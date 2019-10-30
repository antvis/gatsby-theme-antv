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
  recommended?: boolean;
}

const PlayGround: React.FC<PlayGroundProps> = ({
  source,
  babeledSource,
  relativePath,
}) => {
  const playpround = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error | null>();
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
        ${compiledCode}
      } catch(e) {
        if (window.__reportErrorInPlayGround) {
          window.__reportErrorInPlayGround(e);
        }
      }
    `;
    playpround!.current!.appendChild(script);
    return () => {
      if (playpround && playpround.current) {
        playpround.current.innerHTML = '<div id="container" />';
      }
    };
  }, [compiledCode, error]);
  return (
    <div className={styles.playground}>
      <div className={styles.preview}>
        {error ? (
          <Result
            status="error"
            title="演示代码报错，请检查"
            subTitle={<pre>{error && error.message}</pre>}
          />
        ) : (
          <div ref={playpround} />
        )}
      </div>
      <div className={styles.editor}>
        <div className={styles.toolbar} />
        <div className={styles.codemirror}>
          <CodeMirror
            value={source}
            options={{
              mode: 'javascript',
              theme: 'mdn-like',
              indentUnit: 4, // 缩进单位为4
              styleActiveLine: true, // 当前行背景高亮
              styleActiveSelected: true,
              matchBrackets: true, // 括号匹配
              autoCloseBrackets: true,
              matchTags: {
                bothTags: true,
              },
            }}
            onChange={(_: any, __: any, value: string) => {
              try {
                const { code } = transform(value, {
                  filename: relativePath,
                  presets: ['react', 'typescript', 'es2015', 'stage-3'],
                  plugins: ['transform-modules-umd'],
                });
                updateCompiledCode(code);
              } catch (e) {
                console.error(e);
                setError(e);
                return;
              }
              setError(null);
            }}
          />
        </div>
      </div>
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
