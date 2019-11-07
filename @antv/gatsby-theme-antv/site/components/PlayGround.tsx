import React, { useRef, useEffect, useState } from 'react';
import { UnControlled as CodeMirrorEditor } from 'react-codemirror2';
import { Editor } from 'codemirror';
import classNames from 'classnames';
import { Typography, Icon, Tooltip } from 'antd';
import debounce from 'lodash/debounce';
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from 'react-i18next';
import { transform } from '@babel/standalone';
import { Result } from 'antd';
import SplitPane from 'react-split-pane';
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
  playground?: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
  };
}

const execute = debounce(
  (
    code: string,
    node: HTMLDivElement,
    exampleContainer: string | undefined,
  ) => {
    const script = document.createElement('script');
    script.innerHTML = `
      try {
        ${code}
      } catch(e) {
        if (window.__reportErrorInPlayGround) {
          window.__reportErrorInPlayGround(e);
        }
      }
    `;
    node.innerHTML = exampleContainer || '<div id="container" />';
    node!.appendChild(script);
  },
  300,
);

if (typeof window !== 'undefined') {
  window.addEventListener(
    'unhandledrejection',
    (event: PromiseRejectionEvent) => {
      // @ts-ignore
      if (window.__reportErrorInPlayGround) {
        // @ts-ignore
        window.__reportErrorInPlayGround(event.reason);
      }
    },
  );
}

const PlayGround: React.FC<PlayGroundProps> = ({
  source,
  babeledSource,
  relativePath = '',
  playground = {},
}) => {
  const { t } = useTranslation();
  const fullscreenNode = useRef<HTMLDivElement>(null);
  const playpround = useRef<HTMLDivElement>(null);
  const cmInstance = useRef<Editor>();
  const [isFullScreen, updateIsFullScreen] = useState(false);
  const [error, setError] = useState<Error | null>();
  const [compiledCode, updateCompiledCode] = useState(babeledSource);
  const [currentSourceCode, updateCurrentSourceCode] = useState(source);

  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.__reportErrorInPlayGround = (e: Error) => {
      console.error(e);
      setError(e);
    };
  }

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
    execute(compiledCode, playpround.current, playground.container);
  }, [compiledCode, error]);

  useEffect(() => {
    if (playground.playgroundDidMount) {
      new Function(playground.playgroundDidMount)();
    }
    return () => {
      if (playground.playgroundWillUnmount) {
        new Function(playground.playgroundWillUnmount)();
      }
    };
  }, []);

  // 统一增加对 insert-css 的使用注释
  const replacedSource = source.replace(
    /^insertCss/gm,
    `// 我们用 insert-css 演示引入自定义样式
// 推荐将这些样式添加到自己的样式文件中
// 如果是拷贝官网的用法，别忘了 npm install insert-css
insertCss`,
  );

  const editor = (
    <CodeMirrorEditor
      value={replacedSource}
      options={{
        mode: 'jsx',
        theme: 'mdn-like',
        tabSize: 2,
        // @ts-ignore
        styleActiveLine: true, // 当前行背景高亮
        matchBrackets: true, // 括号匹配
        autoCloseBrackets: true,
        autofocus: false,
        matchTags: {
          bothTags: true,
        },
      }}
      cursor={{
        line: -1,
        ch: -1,
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
      editorDidMount={editor => {
        cmInstance.current = editor;
      }}
    />
  );

  return (
    <div className={styles.playground} ref={fullscreenNode}>
      <SplitPane split="vertical" defaultSize="58%" minSize={100}>
        <div
          className={classNames(
            styles.preview,
            `playground-${relativePath.split('/').join('-')}`,
          )}
        >
          {error ? (
            <Result
              status="error"
              title={t('演示代码报错，请检查')}
              subTitle={<pre>{error && error.message}</pre>}
            />
          ) : (
            <div ref={playpround} className={styles.exampleContainerWrapper} />
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
          <div className={styles.codemirror}>{editor}</div>
        </div>
      </SplitPane>
    </div>
  );
};

class ErrorHandlerPlayGround extends React.Component<
  PlayGroundProps & WithTranslation,
  { error?: Error }
> {
  state = {
    error: undefined,
  };
  static getDerivedStateFromError(error: Error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error };
  }
  render() {
    const { t } = this.props;
    const { error } = this.state;
    if (error) {
      // 你可以自定义降级后的 UI 并渲染
      return (
        <Result
          status="error"
          title={t('演示代码报错，请检查')}
          subTitle={<pre>{error && (error as any).message}</pre>}
        />
      );
    }
    return <PlayGround {...this.props} />;
  }
}

export default withTranslation()(ErrorHandlerPlayGround);
