import React, { FC, useState } from 'react';
import { Switch } from 'antd';
import classNames from 'classnames';
import styles from './Swatch.module.less';

interface SwatchProps {
  title: string;
  darkmode?: boolean;
  colors?: string[];
}

const Swatch: FC<SwatchProps> = ({ title, darkmode = true, colors = [] }) => {
  const [dark, toggleDark] = useState(false);
  return (
    <div
      className={classNames(styles.swatch, {
        [styles.dark]: dark,
      })}
    >
      {title && (
        <div className={styles.heading}>
          <h3>{title}</h3>
          {darkmode && (
            <div>
              Dark mode:{' '}
              <Switch
                checked={dark}
                onChange={checked => toggleDark(checked)}
              />
            </div>
          )}
        </div>
      )}
      <div className={styles.colors}>
        {colors.map(color => (
          <span key={color}>{color}</span>
        ))}
      </div>
    </div>
  );
};

export default Swatch;
