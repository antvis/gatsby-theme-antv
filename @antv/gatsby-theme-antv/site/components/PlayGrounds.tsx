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
      <ul>
        {examples.map(example => (
          <li
            key={example.relativePath}
            onClick={() => updateCurrentExample(example)}
            role="button"
            className={styles.card}
          >
            <img
              src="https://gw.alipayobjects.com/os/s/prod/antv/assets/dist/3.0.0/g2/3.x/line/basic-b9ffb.png"
              alt="scrrenshot"
            />
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
