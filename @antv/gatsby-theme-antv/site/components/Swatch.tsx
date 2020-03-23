import React, { FC } from 'react';
import { Switch } from 'antd';
import styles from './Swatch.module.less';

interface SwatchProps {
  title: string;
  darkmode?: boolean;
  colors?: string[];
}

const Swatch: FC<SwatchProps> = ({ title, darkmode, colors = [] }) => {
  return (
    <div className={styles.swatch}>
      {title && (
        <div className={styles.heading}>
          <h3>{title}</h3>
          {darkmode && (
            <div>
              Dark mode: <Switch />
            </div>
          )}
        </div>
      )}
      <div className={styles.colors}>
        色彩：
        {colors.map(color => (
          <span key={color}>{color}</span>
        ))}
      </div>
    </div>
  );
};

export default Swatch;
