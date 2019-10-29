import React from 'react';
import styles from './PlayGround.module.less';

interface PlayGroundProps {
  examples: Array<{
    source: string;
    babeledSource: string;
    absolutePath: string;
    relativePath: string;
  }>;
}

const PlayGround: React.FC<PlayGroundProps> = ({ examples = [] }) => (
  <div className={styles.container}>
    {examples.map(example => (
      <div key={example.relativePath}>
        <pre>{example.source}</pre>
        <pre>{example.babeledSource}</pre>
      </div>
    ))}
  </div>
);

export default PlayGround;
