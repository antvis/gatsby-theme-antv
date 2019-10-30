import React, { useRef, useEffect, useState, useCallback } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Typography, Icon, Tooltip } from 'antd';
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from 'react-i18next';
import { transform } from '@babel/standalone';
import { Result } from 'antd';
import styles from './PlayGround.module.less';

const { Paragraph } = Typography;

export interface PlayGroundProps {
  source: string;
  babeledSource: string;
  absolutePath?: string;
  relativePath?: string;
  screenshot?: string;
  recommended?: boolean;
  filename: string;
  title?: string;
}

const PlayGround: React.FC<PlayGroundProps> = ({
  source,
  babeledSource,
  relativePath,
}) => {
  const { t } = useTranslation();
  const fullscreenNode = useRef<HTMLDivElement>(null);
  const playpround = useRef<HTMLDivElement>(null);
  const [isFullScreen, updateIsFullScreen] = useState(false);
  const [error, setError] = useState<Error | null>();
  const [compiledCode, updateCompiledCode] = useState(babeledSource);
  const [currentSourceCode, updateCurrentSourceCode] = useState(source);

  // @ts-ignore
  window.__reportErrorInPlayGround = useCallback((e: Error) => {
    console.error(e);
    setError(e);
  });

  const toggleFullscreen = () => {
    updateIsFullScreen(!isFullScreen);
    if (fullscreenNode.current) {
      if (!isFullScreen && !document.fullscreenElement) {
        fullscreenNode.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

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
    <div className={styles.playground} ref={fullscreenNode}>
      <div className={styles.preview}>
        {error ? (
          <Result
            status="error"
            title={t('演示代码报错，请检查')}
            subTitle={<pre>{error && error.message}</pre>}
          />
        ) : (
          <div ref={playpround} />
        )}
      </div>
      <div className={styles.editor}>
        <div className={styles.toolbar}>
          <Tooltip title={isFullScreen ? t('离开全屏') : t('进入全屏')}>
            <Icon
              type={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
              onClick={toggleFullscreen}
            />
          </Tooltip>
          <Paragraph copyable={{ text: currentSourceCode }} />
        </div>
        <div className={styles.codemirror}>
          <CodeMirror
            value={source}
            options={{
              mode: 'javascript',
              theme: 'mdn-like',
              indentUnit: 2, // 缩进单位为 2
              styleActiveLine: { nonEmpty: true }, // 当前行背景高亮
              matchBrackets: true, // 括号匹配
              autoCloseBrackets: true,
              autofocus: false,
              matchTags: {
                bothTags: true,
              },
            }}
            onChange={(_: any, __: any, value: string) => {
              updateCurrentSourceCode(value);
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
  PlayGroundProps & WithTranslation,
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
    const { t } = this.props;
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <Result status="error" title={t('演示代码报错，请检查')} />;
    }
    return <PlayGround {...this.props} />;
  }
}

export default withTranslation()(ErrorHandlerPlayGround);
