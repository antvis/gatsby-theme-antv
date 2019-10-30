import React from 'react';
import PlayGround, { PlayGroundProps } from './PlayGround';
import styles from './PlayGrounds.module.less';

interface PlayGroundsProps {
  examples: PlayGroundProps[];
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({ examples = [] }) => (
  <div className={styles.container}>
    {examples.map(example => (
      <PlayGround
        key={example.relativePath}
        relativePath={example.relativePath}
        source={example.source}
        babeledSource={example.babeledSource}
      />
    ))}
  </div>
);

export default PlayGrounds;
