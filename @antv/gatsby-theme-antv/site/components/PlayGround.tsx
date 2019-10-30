import React, { useRef, useEffect, useState, useCallback } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { transform } from '@babel/standalone';
import { Result } from 'antd';

import styles from './PlayGround.module.less';

export interface PlayGroundProps {
  source: string;
  babeledSource: string;
  absolutePath?: string;
  relativePath?: string;
  screenshot?: string;
}

const PlayGround: React.FC<PlayGroundProps> = ({
  source,
  babeledSource,
  relativePath,
}) => {
  const playpround = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error>();
  const [compiledCode, updateCompiledCode] = useState(babeledSource);

  // @ts-ignore
  window.__reportErrorInPlayGround = useCallback((e: Error) => {
    console.error(e);
    setError(e);
  });

  useEffect(() => {
    if (!compiledCode || !playpround || !playpround.current) {
      return;
    }
    playpround.current.innerHTML = '<div id="container" />';
    const script = document.createElement('script');
    script.innerHTML = `
      try {
        setTimeout(function() {
          ${compiledCode}
        }, 0);
      } catch(e) {
        if (window.__reportErrorInPlayGround) {
          window.__reportErrorInPlayGround(e);
        }
      }
    `;
    setTimeout(() => {
      playpround!.current!.appendChild(script);
    }, 0);
    return () => {
      playpround!.current!.innerHTML = '<div id="container" />';
    };
  }, [compiledCode]);
  return (
    <div className={styles.playground}>
      {error ? (
        <Result
          status="error"
          title="演示代码报错，请检查"
          subTitle={error && error.message}
        />
      ) : (
        <div ref={playpround} />
      )}
      <CodeMirror
        value={source}
        options={{
          mode: 'javascript',
          theme: 'mdn-like',
        }}
        onBeforeChange={(_: any, __: any, value: string) => {
          try {
            const { code } = transform(value, {
              filename: relativePath,
              presets: ['react', 'typescript', 'es2015', 'stage-3'],
              plugins: ['transform-modules-umd'],
            });
            updateCompiledCode(code);
          } catch (e) {
            console.error(e);
          }
        }}
      />
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
