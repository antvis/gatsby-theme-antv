import React, { useState } from 'react';
import classNames from 'classnames';
import PlayGround, { PlayGroundProps } from './PlayGround';
import styles from './PlayGrounds.module.less';

interface PlayGroundsProps {
  examples: PlayGroundProps[];
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({ examples = [] }) => {
  const [currentExample, updateCurrentExample] = useState<PlayGroundProps>(
    examples[0],
  );
  return (
    <div className={styles.container}>
      <ul className={styles.cards}>
        {examples.map(example => (
          <li
            key={example.relativePath}
            onClick={() => updateCurrentExample(example)}
            role="button"
            className={classNames(styles.card, {
              [styles.current]:
                example.relativePath === currentExample.relativePath,
            })}
          >
            <img src={example.screenshot} alt={example.relativePath} />
          </li>
        ))}
      </ul>
      <PlayGround
        key={currentExample.relativePath}
        relativePath={currentExample.relativePath}
        source={currentExample.source}
        babeledSource={currentExample.babeledSource}
      />
    </div>
  );
};

export default PlayGrounds;
