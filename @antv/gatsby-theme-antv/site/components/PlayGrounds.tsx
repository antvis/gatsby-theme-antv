import React, { useState } from 'react';
import classNames from 'classnames';
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
  console.log(examples);
  const defaultExample =
    examples.find(
      item => `#${item.filename.split('.')[0]}` === location.hash,
    ) || examples[0];
  const [currentExample, updateCurrentExample] = useState(defaultExample);
  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        {examples.map(example => (
          <li
            key={example.relativePath}
            onClick={() => {
              window.location.hash = currentExample.filename.split('.')[0];
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
        ))}
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
