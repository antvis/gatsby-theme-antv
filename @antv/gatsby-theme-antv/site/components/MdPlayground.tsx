/* eslint no-underscore-dangle: 0 */
import React, { useRef, useEffect, useState } from 'react';
// gatsby ssr not support Suspense&lazy https://github.com/gatsbyjs/gatsby/issues/11960
import loadable from '@loadable/component';
import { useStaticQuery, graphql } from 'gatsby';
import { useMedia } from 'react-use';
import classNames from 'classnames';
import { Result } from 'antd';
import { get, debounce } from 'lodash-es';
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from 'react-i18next';
import { transform } from '@babel/standalone';
import SplitPane from 'react-split-pane';
import Toolbar, { EDITOR_TABS } from './Toolbar';
import styles from './MdPlayGround.module.less';

const MonacoEditor = loadable(() => import('react-monaco-editor'));

interface PlayGroundProps {
  source: string;
  babeledSource: string;
  relativePath?: string;
  title?: string;
  location?: Location;
  playground?: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
    dependencies?: {
      [key: string]: string;
    };
    devDependencies?: {
      [key: string]: string;
    };
    htmlCodeTemplate?: string;
  };
  height?: number;
  replaceId?: string;
}

const PlayGround: React.FC<PlayGroundProps> = ({
  source,
  babeledSource,
  relativePath = '',
  playground = {},
  location,
  title = '',
  height,
  replaceId = 'container',
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            mdPlayground {
              splitPaneMainSize
            }
            playground {
              extraLib
            }
          }
        }
      }
    `,
  );

  const { extraLib = '' } = site.siteMetadata.playground;
  const splitPaneSize = get(
    site.siteMetadata,
    ['mdPlayground', 'splitPaneMainSize'],
    '62%',
  );
  const { t, i18n } = useTranslation();
  const playgroundNode = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error | null>();
  const [compiledCode, updateCompiledCode] = useState(babeledSource);

  const [currentSourceData, updateCurrentSourceData] = useState(null);
  const editroRef = useRef<any>(null);

  const comment =
    i18n.language === 'zh'
      ? `// 我们用 insert-css 演示引入自定义样式
// 推荐将样式添加到自己的样式文件中
// 若拷贝官方代码，别忘了 npm install insert-css
insertCss(`
      : `// We use 'insert-css' to insert custom styles
// It is recommended to add the style to your own style sheet files
// If you want to copy the code directly, please remember to install the npm package 'insert-css
insertCss(`;

  const replaceInsertCss = (str: string) => {
    // 统一增加对 insert-css 的使用注释
    return str.replace(/^insertCss\(/gm, comment);
  };

  const [currentSourceCode, updateCurrentSourceCode] = useState(
    replaceInsertCss(source),
  );
  if (typeof window !== 'undefined') {
    (window as any).__reportErrorInPlayGround = (e: Error) => {
      console.error(e); // eslint-disable-line no-console
      setError(e);
    };
  }

  const fullscreenNode = useRef<HTMLDivElement>(null);
  const [isFullScreen, updateIsFullScreen] = useState(false);
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

  const execute = debounce(
    (
      code: string,
      node: HTMLDivElement,
      exampleContainer: string | undefined,
    ) => {
      const script = document.createElement('script');
      // replace container id in case of multi demos in document
      const newCode = code.replace(/'container'|"container"/, `'${replaceId}'`);
      script.innerHTML = `
        try {
          ${newCode}
        } catch(e) {
          if (window.__reportErrorInPlayGround) {
            window.__reportErrorInPlayGround(e);
          }
        }
      `;
      // eslint-disable-next-line no-param-reassign
      node.innerHTML = exampleContainer || `<div id=${replaceId} />`;
      node!.appendChild(script);
    },
    300,
  );

  const executeCode = () => {
    if (!compiledCode || !playgroundNode || !playgroundNode.current) {
      return;
    }
    execute(compiledCode, playgroundNode.current, playground.container);
  };

  useEffect(() => {
    executeCode();
  }, [compiledCode, error]);

  useEffect(() => {
    if (playground.playgroundDidMount) {
      // eslint-disable-next-line no-new-func
      new Function(playground.playgroundDidMount)();
    }
    return () => {
      if (playground.playgroundWillUnmount) {
        // eslint-disable-next-line no-new-func
        new Function(playground.playgroundWillUnmount)();
      }
    };
  }, []);

  const [editorTabs, updateEditorTabs] = useState<EDITOR_TABS[]>([]);
  const [currentEditorTab, updateCurrentEditorTab] = useState(
    EDITOR_TABS.JAVASCRIPT,
  );
  useEffect(() => {
    const dataFileMatch = currentSourceCode.match(/fetch\('(.*)'\)/);
    if (dataFileMatch && dataFileMatch.length > 0) {
      fetch(dataFileMatch[1])
        .then((response) => response.json())
        .then((data) => {
          updateEditorTabs([EDITOR_TABS.JAVASCRIPT, EDITOR_TABS.DATA]);
          updateCurrentSourceData(data);
        });
    }
  }, []);

  const onCodeChange = (value: string) => {
    if (currentEditorTab === EDITOR_TABS.JAVASCRIPT) {
      updateCurrentSourceCode(value);
      try {
        const { code } = transform(value, {
          filename: relativePath,
          presets: ['react', 'typescript', 'es2015', 'stage-3'],
          plugins: ['transform-modules-umd'],
        });
        updateCompiledCode(code);
      } catch (e) {
        console.error(e); // eslint-disable-line no-console
        setError(e);
        return;
      }
      setError(null);
    }
  };

  useEffect(() => {
    if (editroRef.current) {
      if (currentEditorTab === EDITOR_TABS.JAVASCRIPT) {
        editroRef.current.setValue(currentSourceCode);
      } else if (currentEditorTab === EDITOR_TABS.DATA) {
        editroRef.current.setValue(JSON.stringify(currentSourceData, null, 2));
      }
    }
  }, [currentEditorTab]);

  const editor = (
    <MonacoEditor
      language={
        currentEditorTab === EDITOR_TABS.JAVASCRIPT ? 'javascript' : 'json'
      }
      value={currentSourceCode}
      options={{
        readOnly: currentEditorTab === EDITOR_TABS.DATA,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        scrollBeyondLastLine: false,
        fixedOverflowWidgets: true,
        lineNumbersMinChars: 4,
        showFoldingControls: 'always',
        foldingHighlight: true,
      }}
      onChange={(value) => onCodeChange(value)}
      editorWillMount={(monaco) => {
        monaco.editor.defineTheme('customTheme', {
          base: 'vs',
          inherit: true,
          rules: [],
          colors: {
            'editor.inactiveSelectionBackground': '#ffffff',
          },
        });
        monaco.editor.setTheme('customTheme');
        monaco.languages.typescript.javascriptDefaults.addExtraLib(
          extraLib,
          '',
        );
      }}
      editorDidMount={(editorInstance) => {
        editroRef.current = editorInstance.getModel();
      }}
    />
  );

  const fileExtension =
    relativePath.split('.')[relativePath.split('.').length - 1] || 'js';

  const isWide = useMedia('(min-width: 767.99px)', true);

  const dispatchResizeEvent = () => {
    const e = new Event('resize');
    window.dispatchEvent(e);
  };

  return (
    <div
      className={styles.playground}
      ref={fullscreenNode}
      style={height ? { height } : {}}
    >
      <SplitPane
        split={isWide ? 'vertical' : 'horizontal'}
        defaultSize={splitPaneSize}
        minSize={100}
        onDragFinished={dispatchResizeEvent}
      >
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
            <div
              ref={playgroundNode}
              className={styles.exampleContainerWrapper}
            />
          )}
        </div>
        <div className={styles.editor}>
          <Toolbar
            fileExtension={fileExtension}
            sourceCode={currentSourceCode}
            playground={playground}
            location={location}
            title={title}
            onExecuteCode={executeCode}
            editorTabs={editorTabs}
            currentEditorTab={currentEditorTab}
            onEditorTabChange={updateCurrentEditorTab}
            isFullScreen={false}
            onToggleFullscreen={toggleFullscreen}
          />
          <div
            className={styles.monaco}
            // toolbar height = 36px
            style={{ height: 'calc(100% - 36px)' }}
          >
            {editor}
          </div>
        </div>
      </SplitPane>
    </div>
  );
};

interface MdPlaygroundProps {
  examples: PlayGroundProps[];
  path: string;
  height?: number;
  rid?: string;
}

const MdPlayGround: React.FC<MdPlaygroundProps> = ({
  examples,
  path,
  rid,
  height = 400,
}) => {
  if (!examples || !examples.length || !path) return null;
  const example = examples.find((item: any) => item.relativePath === path);
  if (!example) return null;
  return (
    <PlayGround
      source={example.source}
      babeledSource={example.babeledSource}
      playground={example.playground}
      height={height}
      replaceId={rid}
    />
  );
};

class ErrorHandlerMdPlayGround extends React.Component<
  MdPlaygroundProps & WithTranslation,
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
    return <MdPlayGround {...this.props} />;
  }
}

export default withTranslation()(ErrorHandlerMdPlayGround);
