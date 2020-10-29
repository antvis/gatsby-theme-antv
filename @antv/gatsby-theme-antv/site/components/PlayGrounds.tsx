import React from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './PlayGrounds.module.less';

export interface PlayGroundItemProps {
  source: string;
  examples: PlayGroundItemProps[];
  babeledSource: string;
  absolutePath?: string;
  relativePath?: string;
  screenshot?: string;
  recommended?: boolean;
  filename: string;
  title?: string;
  location?: Location;
  playground?: {
    container?: string;
    playgroundDidMount?: string;
    playgroundWillUnmount?: string;
    dependencies?: {
      [key: string]: string;
    };
    htmlCodeTemplate?: string;
  };
}

interface PlayGroundsProps {
  examples: PlayGroundItemProps[];
  currentExample: PlayGroundItemProps;
  updateCurrentExample: (val: PlayGroundItemProps) => void;
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({
  examples = [],
  currentExample,
  updateCurrentExample,
}) => {
  const { i18n } = useTranslation();

  return (
    <div className={classNames(styles.shadowWrapper)}>
      <div className={styles.cards}>
        {examples.map((example) => {
          const title =
            typeof example.title === 'object'
              ? example.title[i18n.language]
              : example.title;
          return (
            <Tooltip
              placement="right"
              title={title || ''}
              key={example.relativePath}
            >
              <a
                href={`#${example.filename.split('.')[0]}`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  window.history.pushState(
                    {},
                    '',
                    `#${example.filename.split('.')[0]}`,
                  );
                  updateCurrentExample(example);
                }}
                id={`example-${example.filename.split('.')[0]}`}
                className={classNames(styles.card, {
                  [styles.current]:
                    currentExample &&
                    example.relativePath === currentExample.relativePath,
                })}
              >
                <img
                  src={
                    example.screenshot ||
                    'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png'
                  }
                  alt={title || example.relativePath}
                />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default PlayGrounds;
