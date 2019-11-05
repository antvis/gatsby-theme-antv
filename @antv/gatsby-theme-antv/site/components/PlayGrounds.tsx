import React, { useState } from 'react';
import classNames from 'classnames';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import PlayGround, { PlayGroundProps } from './PlayGround';
import styles from './PlayGrounds.module.less';

interface PlayGroundsProps {
  examples: PlayGroundProps[];
  location: Location;
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({
  examples = [],
  location,
}) => {
  const { i18n } = useTranslation();
  console.log(i18n.language);
  const defaultExample =
    examples.find(
      item => `#${item.filename.split('.')[0]}` === location.hash,
    ) || examples[0];
  const [currentExample, updateCurrentExample] = useState(defaultExample);
  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        {examples.map(example => {
          console.log(example.title);
          const title =
            typeof example.title === 'object'
              ? example.title[i18n.language]
              : example.title;
          return (
            <Tooltip title={title || ''} key={example.relativePath}>
              <li
                onClick={() => {
                  history.pushState(
                    {},
                    '',
                    `#${example.filename.split('.')[0]}`,
                  );
                  updateCurrentExample(example);
                }}
                role="button"
                className={classNames(styles.card, {
                  [styles.current]:
                    example.relativePath === currentExample.relativePath,
                })}
              >
                <img
                  src={
                    example.screenshot ||
                    'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png'
                  }
                  alt={example.relativePath}
                />
              </li>
            </Tooltip>
          );
        })}
      </ul>
      <PlayGround
        key={currentExample.relativePath}
        relativePath={currentExample.relativePath}
        source={currentExample.source}
        babeledSource={currentExample.babeledSource}
        filename={currentExample.filename}
      />
    </div>
  );
};

export default PlayGrounds;
