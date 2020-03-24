import React, { FC, useState } from 'react';
import { Switch, message } from 'antd';
import classNames from 'classnames';
import styles from './Swatch.module.less';

interface SwatchProps {
  title: string;
  darkmode?: boolean;
  colors?: string;
  colornames?: string;
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
  colors = '',
  colornames = '',
}) => {
  const [dark, toggleDark] = useState(false);
  const colorsArray = colors.split(',');
  const colorNamesArray = colornames.split(',');
  return (
    <div
      className={classNames(styles.swatch, {
        [styles.dark]: dark,
      })}
    >
      {(title || darkmode) && (
        <div className={styles.heading}>
          {title && <h4>{title}</h4>}
          {darkmode && (
            <div>
              <span className={styles.darkmode}>Dark Mode</span>
              <Switch
                checked={dark}
                size="small"
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
            <span>{colorNamesArray[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swatch;
