import React, { useState } from 'react';
import PlayGround, { PlayGroundProps } from './PlayGround';
import styles from './PlayGrounds.module.less';

interface PlayGroundsProps {
  examples: PlayGroundProps[];
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({ examples = [] }) => {
  const [example, updateCurrentExample] = useState<PlayGroundProps>(
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
            className={styles.card}
          >
            <img src={example.screenshot} alt={example.relativePath} />
          </li>
        ))}
        <PlayGround
          key={example.relativePath}
          relativePath={example.relativePath}
          source={example.source}
          babeledSource={example.babeledSource}
        />
      </ul>
    </div>
  );
};

export default PlayGrounds;
