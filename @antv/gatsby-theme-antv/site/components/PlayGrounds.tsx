import React from 'react';
import PlayGround from './PlayGround';
import styles from './PlayGrounds.module.less';

interface PlayGroundsProps {
  examples: Array<{
    source: string;
    babeledSource: string;
    absolutePath: string;
    relativePath: string;
  }>;
}

const PlayGrounds: React.FC<PlayGroundsProps> = ({ examples = [] }) => (
  <div className={styles.container}>
    {examples.map(example => (
      <PlayGround
        key={example.relativePath}
        source={example.source}
        babeledSource={example.babeledSource}
      />
    ))}
  </div>
);

export default PlayGrounds;
