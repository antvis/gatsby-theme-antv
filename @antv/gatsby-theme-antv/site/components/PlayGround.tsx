/* eslint no-underscore-dangle: 0 */
import React, { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import { Skeleton, Result, Layout } from 'antd';
import debounce from 'lodash/debounce';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import {
  useTranslation,
  withTranslation,
  WithTranslation,
} from 'react-i18next';
import { transform } from '@babel/standalone';
import SplitPane from 'react-split-pane';
import Toolbar, { EDITOR_TABS } from './Toolbar';
import ChartViewBar from './ChartViewBar';
import PlayGrounds, { PlayGroundItemProps } from './PlayGrounds';
import PageLoading from './PageLoading';
import styles from './PlayGround.module.less';

const { Content, Sider } = Layout;

interface PlayGroundProps {
  examples: PlayGroundItemProps[];
  location: Location;
  playground?: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
    htmlCodeTemplate?: string;
  };
}

const MonacoEditor = lazy(() => import('react-monaco-editor'));

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
    // eslint-disable-next-line no-param-reassign
    node.innerHTML = exampleContainer || '<div id="container" />';
    node!.appendChild(script);
  },
  300,
);

const PlayGround: React.FC<PlayGroundProps> = ({
  examples = [],
  location,
  playground,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            playground {
              extraLib
            }
          }
        }
      }
    `,
  );
  const replaceInsertCss = (str: string) => {
    // 统一增加对 insert-css 的使用注释
    return str.replace(
      /^insertCss\(/gm,
      `// 我们用 insert-css 演示引入自定义样式
// 推荐将样式添加到自己的样式文件中
// 若拷贝官方代码，别忘了 npm install insert-css
insertCss(`,
    );
  };
  const { extraLib = '' } = site.siteMetadata.playground;
  const { t } = useTranslation();
  const [currentExample, updateCurrentExample] = useState<
    PlayGroundItemProps
  >();
  const playgroundNode = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<Error | null>();
  const [collapsed, updateCollapsed] = useState<boolean>(false);
  const [compiledCode, updateCompiledCode] = useState<string>('');
  const [relativePath, updateRelativePath] = useState<string | undefined>('');
  const [fileExtension, updateFileExtension] = useState<string | undefined>('');
  const [title, updateTitle] = useState<string | undefined>('');
  const [view, updateView] = useState<string>('desktop');
  const [currentSourceCode, updateCurrentSourceCode] = useState<string>('');
  const [currentSourceData, updateCurrentSourceData] = useState(null);

  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.__reportErrorInPlayGround = (e: Error) => {
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

  const updateCurrentExampleParams = (current: PlayGroundItemProps) => {
    if (!current?.relativePath) return;
    updateRelativePath(current?.relativePath);
    updateFileExtension(
      current?.relativePath.split('.')[
        current.relativePath.split('.').length - 1
      ] || 'js',
    );
    updateTitle(current?.title);
    updateCompiledCode(current.babeledSource);
    updateCurrentSourceCode(replaceInsertCss(current.source));
  };

  useEffect(() => {
    const defaultExample =
      examples.find(
        (item) => `#${item.filename.split('.')[0]}` === location.hash,
      ) || examples[0];
    updateCurrentExample(defaultExample);
  }, []);

  useEffect(() => {
    if (!currentExample) return;
    updateView('desktop');
    updateCurrentExampleParams(currentExample);
  }, [currentExample]);

  const executeCode = () => {
    if (!compiledCode || !playgroundNode || !playgroundNode.current) {
      return;
    }
    execute(compiledCode, playgroundNode.current, playground?.container);
  };

  useEffect(() => {
    executeCode();
  }, [compiledCode, error]);

  useEffect(() => {
    if (playground?.playgroundDidMount) {
      // eslint-disable-next-line no-new-func
      new Function(playground?.playgroundDidMount)();
    }
    return () => {
      if (playground?.playgroundWillUnmount) {
        // eslint-disable-next-line no-new-func
        new Function(playground?.playgroundWillUnmount)();
      }
    };
  }, []);

  const [editorTabs, updateEditroTabs] = useState<EDITOR_TABS[]>([]);
  const [currentEditorTab, updateCurrentEditorTab] = useState(
    EDITOR_TABS.JAVASCRIPT,
  );
  useEffect(() => {
    const dataFileMatch = currentSourceCode.match(/fetch\('(.*)'\)/);
    if (dataFileMatch && dataFileMatch.length > 0) {
      fetch(dataFileMatch[1])
        .then((response) => response.json())
        .then((data) => {
          updateEditroTabs([EDITOR_TABS.JAVASCRIPT, EDITOR_TABS.DATA]);
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

  const [editorValue, updateEditorValue] = useState('');
  useEffect(() => {
    if (currentEditorTab === EDITOR_TABS.JAVASCRIPT) {
      updateEditorValue(currentSourceCode);
    } else if (currentEditorTab === EDITOR_TABS.DATA) {
      updateEditorValue(JSON.stringify(currentSourceData, null, 2));
    }
  }, [currentEditorTab, currentSourceCode]);

  const editor = (
    <MonacoEditor
      height="calc(100% - 32px)"
      language={
        currentEditorTab === EDITOR_TABS.JAVASCRIPT ? 'javascript' : 'json'
      }
      value={editorValue}
      options={{
        readOnly: currentEditorTab === EDITOR_TABS.DATA,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        scrollBeyondLastLine: false,
        fixedOverflowWidgets: true,
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
    />
  );

  const dispatchResizeEvent = () => {
    const e = new Event('resize');
    window.dispatchEvent(e);
  };

  const toggle = () => {
    updateCollapsed(!collapsed);
  };

  return (
    <div className={styles.container}>
      {playground && currentExample ? (
        <div className={styles.playground} ref={fullscreenNode}>
          <SplitPane
            split={isFullScreen ? 'vertical' : 'horizontal'}
            defaultSize="50%"
            minSize={100}
            onDragFinished={dispatchResizeEvent}
          >
            <Layout className={styles.playgroundCard}>
              {!isFullScreen && (
                <Sider
                  collapsedWidth={0}
                  width={120}
                  trigger={null}
                  collapsible
                  collapsed={collapsed}
                  className={styles.menuSider}
                  theme="light"
                >
                  <PlayGrounds
                    examples={examples}
                    currentExample={currentExample}
                    updateCurrentExample={updateCurrentExample}
                  />
                </Sider>
              )}
              <MenuUnfoldOutlined
                className={styles.trigger}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
              />
              <Content className={styles.chartContainer}>
                {relativePath && (
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
                      <>
                        <div className={styles.chartViewBar}>
                          <ChartViewBar updateView={updateView} view={view} />
                        </div>
                        <div ref={playgroundNode} className={styles[view]} />
                      </>
                    )}
                  </div>
                )}
              </Content>
            </Layout>

            <div className={styles.editor}>
              {title && fileExtension && (
                <Toolbar
                  fileExtension={fileExtension}
                  sourceCode={currentSourceCode}
                  playground={playground}
                  location={location}
                  title={title}
                  isFullScreen={isFullScreen}
                  onToggleFullscreen={toggleFullscreen}
                  onExecuteCode={executeCode}
                  editorTabs={editorTabs}
                  currentEditorTab={currentEditorTab}
                  onEditorTabChange={updateCurrentEditorTab}
                />
              )}

              <div className={styles.monaco}>
                <Suspense fallback={<PageLoading />}>{editor}</Suspense>
              </div>
            </div>
          </SplitPane>
        </div>
      ) : (
        <Skeleton paragraph={{ rows: 8 }} />
      )}
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
