import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Result } from 'antd';

import styles from './PlayGround.module.less';

interface PlayGroundProps {
  source: string;
  babeledSource: string;
}

const PlayGround: React.FC<PlayGroundProps> = ({ source, babeledSource }) => {
  const container = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error>();
  // @ts-ignore
  window.__reportErrorInPlayGround = useCallback((e: Error) => {
    console.error(e);
    setError(e);
  }, []);
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      try {
        ${babeledSource}
      } catch(e) {
        if (window.__reportErrorInPlayGround) {
          window.__reportErrorInPlayGround(e);
        }
      }
    `;
    if (container && container.current) {
      container.current.appendChild(script);
    }
    return () => {
      if (container && container.current) {
        container.current.removeChild(script);
      }
    };
  }, [container]);
  if (error) {
    return (
      <Result
        status="error"
        title="演示代码报错，请检查"
        subTitle={error && error.message}
      />
    );
  }
  return (
    <div className={styles.container}>
      <div id="container" ref={container} />
      {source}
    </div>
  );
};

class ErrorHandlerPlayGround extends React.Component<
  PlayGroundProps,
  { hasError: boolean }
> {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <Result status="error" title="演示代码报错，请检查" />;
    }
    return <PlayGround {...this.props} />;
  }
}

export default ErrorHandlerPlayGround;
