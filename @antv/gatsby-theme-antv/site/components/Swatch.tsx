import React, { FC, useState } from 'react';
import { Switch, message } from 'antd';
import classNames from 'classnames';
import styles from './Swatch.module.less';

interface SwatchProps {
  title: string;
  darkmode?: boolean;
  colors?: string[];
  colorNames?: string[];
}

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Swatch: FC<SwatchProps> = ({
  title,
  darkmode = true,
  colors = [],
  colorNames = [],
}) => {
  const [dark, toggleDark] = useState(false);
  const colorsArray = colors.split(',');
  const colorNamesArray = colors.split(',');
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
        {colorsArray.map((color: string, i: number) => (
          <div
            className={styles.color}
            style={{
              backgroundColor: color,
            }}
            key={color}
            onClick={() => {
              copyToClipboard(color);
              message.success(
                <span>
                  成功复制
                  <span
                    style={{ backgroundColor: color }}
                    className={styles.block}
                  />
                  {color}
                </span>,
              );
            }}
          >
            {colorNamesArray[i] || color}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swatch;
