import React, { useEffect, useState } from 'react';
import {
  CodeSandboxOutlined,
  Html5Outlined,
  PlayCircleOutlined,
  ThunderboltOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
} from '@ant-design/icons';
import { Typography, Tooltip, Modal, Button } from 'antd';
import path from 'path';
import { UnControlled as CodeMirrorEditor } from 'react-codemirror2';
import { getParameters } from 'codesandbox/lib/api/define';
import stackblitzSdk from '@stackblitz/sdk';
import { useTranslation } from 'react-i18next';
import indentString from 'indent-string';
import { ping } from '../utils';
import styles from './Toolbar.module.less';

const { Paragraph } = Typography;

interface ToolbarProps {
  sourceCode: string;
  fileExtension: string;
  title:
    | {
        zh?: string;
        en?: string;
      }
    | string;
  location?: Location;
  playground: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
    dependencies?: {
      [key: string]: string;
    };
    htmlCodeTemplate?: string;
  };
  isFullScreen: boolean;
  onToggleFullscreen: () => void;
  onExecuteCode: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  sourceCode,
  fileExtension,
  playground = {},
  location,
  title = '',
  isFullScreen,
  onToggleFullscreen,
  onExecuteCode,
}) => {
  const { t, i18n } = useTranslation();

  const requireMatches = sourceCode.match(/require\(['"](.*)['"]\)/g) || [];
  const importMatches = sourceCode.match(/from\s+['"](.*)['"]/g) || [];
  const deps: {
    [key: string]: string;
  } = {};
  [...requireMatches, ...importMatches].forEach((match: string) => {
    const requireMatch = match.match(/require\(['"](.*)['"]\)/);
    if (requireMatch && requireMatch[1]) {
      deps[requireMatch[1]] = 'latest';
    }
    const importMatch = match.match(/from\s+['"](.*)['"]/);
    if (importMatch && importMatch[1]) {
      deps[importMatch[1]] = 'latest';
    }
  });

  const exmapleTitle =
    typeof title === 'object' ? title[i18n.language as 'zh' | 'en'] : title;

  // 使用 playground.dependencies 定义的版本号
  const dependencies = playground.dependencies || {};
  Object.keys(dependencies).forEach(name => {
    deps[name] = dependencies[name];
  });

  const codeSandboxConfig = {
    files: {
      'package.json': {
        content: {
          main: `index.${fileExtension}`,
          dependencies: deps,
        },
      },
      [`index.${fileExtension}`]: {
        content: sourceCode,
      },
      'index.html': {
        content: playground.container || '<div id="container" />',
      },
    } as {
      [key: string]: any;
    },
  };

  function replaceFetchUrl(text: string) {
    const dataFileMatch = sourceCode.match(/fetch\('(.*)'\)/);
    if (
      dataFileMatch &&
      dataFileMatch.length > 0 &&
      !dataFileMatch[1].startsWith('http')
    ) {
      return text.replace(
        dataFileMatch[1],
        path.join(
          location!.origin || '',
          location!.pathname || '',
          '..',
          dataFileMatch[1],
        ),
      );
    }
    return text;
  }

  codeSandboxConfig.files[`index.${fileExtension}`].content = replaceFetchUrl(
    sourceCode,
  );

  function getHtmlCodeTemplate() {
    const { htmlCodeTemplate = '', container = '' } = playground;
    const insertCssMatcher = /insertCss\(`\s*(.*)\s*`\);/;
    const code = replaceFetchUrl(sourceCode)
      .replace(/import\s+.*\s+from\s+['"].*['"];?/g, '')
      .replace(insertCssMatcher, '')
      .replace(/^\s+|\s+$/g, '');
    let result = htmlCodeTemplate
      .replace('{{code}}', indentString(code, 4))
      .replace('{{title}}', exmapleTitle || 'example');
    const customStyles = sourceCode.match(insertCssMatcher);
    if (customStyles && customStyles[1]) {
      result = result.replace(
        '</head>',
        `  <style>\n${indentString(
          customStyles[1],
          4,
        )}\n    </style>\n  </head>`,
      );
    }
    if (container) {
      result = result.replace(
        '<body>',
        `<body>\n${indentString(container, 4)}`,
      );
    }
    return result;
  }

  const riddlePrefillConfig = {
    title: exmapleTitle,
    js: sourceCode,
    html: playground.container || '<div id="container" />',
  };

  const stackblitzPrefillConfig = {
    title: exmapleTitle || '',
    description: '',
    template: 'create-react-app',
    dependencies: deps,
    files: {
      [`index.${fileExtension.startsWith('ts') ? 'ts' : 'js'}`]: sourceCode,
      'index.html': playground.container || '<div id="container" />',
    },
  };

  const [riddleVisible, updateRiddleVisible] = useState(false);
  useEffect(() => {
    ping(status => {
      updateRiddleVisible(status === 'responded');
    });
  }, []);

  const [htmlModalVisible, updateHtmlModalVisible] = useState(false);

  return (
    <div className={styles.toolbar}>
      {riddleVisible ? (
        <form
          action="//riddle.alibaba-inc.com/riddles/define"
          method="POST"
          target="_blank"
        >
          <input
            type="hidden"
            name="data"
            value={JSON.stringify(riddlePrefillConfig)}
          />
          <Tooltip title={t('在 Riddle 中打开')}>
            <input
              type="submit"
              value="Create New Riddle with Prefilled Data"
              className={styles.riddle}
            />
          </Tooltip>
        </form>
      ) : null}
      <Tooltip title={t('在 StackBlitz 中打开')}>
        <ThunderboltOutlined
          className={styles.stackblitz}
          onClick={() => {
            stackblitzSdk.openProject(stackblitzPrefillConfig);
          }}
        />
      </Tooltip>
      <Tooltip title={t('在 CodeSandbox 中打开')}>
        <form
          action="https://codesandbox.io/api/v1/sandboxes/define"
          method="POST"
          target="_blank"
        >
          <input
            type="hidden"
            name="parameters"
            value={getParameters(codeSandboxConfig)}
          />
          <button type="submit" className={styles.codesandbox}>
            <CodeSandboxOutlined style={{ marginLeft: 8 }} />
          </button>
        </form>
      </Tooltip>
      <Paragraph copyable={{ text: sourceCode }} />
      {playground.htmlCodeTemplate && (
        <>
          <Tooltip title={t('HTML 代码')}>
            <Html5Outlined
              className={styles.html}
              onClick={() => updateHtmlModalVisible(true)}
            />
          </Tooltip>
          <Modal
            visible={htmlModalVisible}
            title={t('HTML 代码')}
            onCancel={() => updateHtmlModalVisible(false)}
            width="60vw"
            footer={
              <Button onClick={() => updateHtmlModalVisible(false)}>
                {t('取消')}
              </Button>
            }
          >
            <div className={styles.editor}>
              <CodeMirrorEditor
                value={getHtmlCodeTemplate()}
                options={{
                  mode: 'htmlembedded',
                  readOnly: true,
                  theme: 'mdn-like',
                  lineNumbers: true,
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
              />
            </div>
          </Modal>
        </>
      )}
      <Tooltip title={isFullScreen ? t('离开全屏') : t('进入全屏')}>
        {isFullScreen ? (
          <FullscreenExitOutlined
            onClick={onToggleFullscreen}
            style={{ marginLeft: 12 }}
          />
        ) : (
          <FullscreenOutlined
            onClick={onToggleFullscreen}
            style={{ marginLeft: 12 }}
          />
        )}
      </Tooltip>
      <Tooltip title={t('执行代码')}>
        <PlayCircleOutlined
          onClick={onExecuteCode}
          style={{ marginLeft: 12 }}
        />
      </Tooltip>
    </div>
  );
};

export default Toolbar;
