import React from 'react';
import { Typography, Icon, Tooltip } from 'antd';
import path from 'path';
import { getParameters } from 'codesandbox/lib/api/define';
import stackblitzSdk from '@stackblitz/sdk';
import { useTranslation } from 'react-i18next';
import styles from './Toolbar.module.less';

const { Paragraph } = Typography;

interface ToolbarProps {
  sourceCode: string;
  fileExtension: string;
  title: string;
  location?: Location;
  playground: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
    dependencies?: {
      [key: string]: string;
    };
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
  const { t } = useTranslation();

  const requireMatches =
    sourceCode.match(/require\(['"](.*)['"]\)/g) || [];
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

  const dataFileMatch = sourceCode.match(/fetch\('(.*)'\)/);
  if (
    dataFileMatch &&
    dataFileMatch.length > 0 &&
    !dataFileMatch[1].startsWith('http')
  ) {
    const [filename] = dataFileMatch[1].split('/').slice(-1);
    codeSandboxConfig.files[
      `index.${fileExtension}`
    ].content = sourceCode.replace(
      dataFileMatch[1],
      path.join(
        location!.origin || '',
        location!.pathname || '',
        `../data/${filename}`,
      ),
    );
  }

  const riddlePrefillConfig = {
    title,
    js: sourceCode,
    html: playground.container || '<div id="container" />',
  };

  const stackblitzPrefillConfig = {
    title,
    description: '',
    template: 'create-react-app',
    dependencies: deps,
    files: {
      [`index.${fileExtension.startsWith('ts') ? 'ts' : 'js'}`]: sourceCode,
      'index.html': playground.container || '<div id="container" />',
    },
  };

  return (
    <div className={styles.toolbar}>
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
      <Tooltip title={t('在 StackBlitz 中打开')}>
        <Icon
          type="thunderbolt"
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
            <Icon type="code-sandbox" style={{ marginLeft: 8 }} />
          </button>
        </form>
      </Tooltip>
      <Paragraph copyable={{ text: sourceCode }} />
      <Tooltip title={isFullScreen ? t('离开全屏') : t('进入全屏')}>
        <Icon
          type={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
          onClick={onToggleFullscreen}
          style={{ marginLeft: 12 }}
        />
      </Tooltip>
      <Tooltip title={t('执行代码')}>
        <Icon
          type="play-circle"
          onClick={onExecuteCode}
          style={{ marginLeft: 12 }}
        />
      </Tooltip>
    </div>
  );
};

export default Toolbar;
