import React, { FC, useState } from 'react';
import { Switch, message } from 'antd';
import classNames from 'classnames';
import styles from './Swatch.module.less';

interface SwatchProps {
  title: string;
  darkmode?: boolean;
  colors?: string;
  colornames?: string;
  grid?: 'sudoku';
}

const copyToClipboard = (str: string) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

interface ColorsProps {
  colorStyle: React.CSSProperties;
  colors: string[];
  names?: string[];
  name?: string;
}

const Colors: FC<ColorsProps> = ({
  colorStyle = {},
  colors = [],
  names = [],
  name,
}) => {
  if (colors.length === 0) {
    return null;
  }
  return (
    <div className={styles.colors}>
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>
        {colors.map((color: string, i: number) => (
          <div
            className={classNames(styles.color, {
              [styles.first]: i === 0,
              [styles.third]: i === 2,
              [styles.seventh]: i === 6,
              [styles.last]: i === colors.length - 1,
            })}
            style={{
              ...colorStyle,
              backgroundColor: color,
              color,
            }}
            key={i}
            onClick={() => {
              copyToClipboard(color);
              message.success(
                <span>
                  Copied
                  <span
                    style={{ backgroundColor: color }}
                    className={styles.block}
                  />
                  {color}
                </span>,
              );
            }}
          >
            <span
              className={styles.name}
              style={{ display: colors.length > 10 ? 'none' : '' }}
            >
              {names[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Swatch: FC<SwatchProps> = ({
  title,
  darkmode = true,
  colors = '',
  colornames = '',
  grid,
}) => {
  const [dark, toggleDark] = useState(false);
  let colorsArray = [] as string[];
  const colorsSwatchArray = [] as string[][];
  const colorNamesArray = colornames.split(',');
  const colorStyle: React.CSSProperties = {};
  if (colors.includes('|')) {
    colors.split('|').forEach((item: string) => {
      colorsSwatchArray.push(item.split(','));
    });
  } else {
    colorsArray = colors.split(',');
    if (colorsArray.length < 5) {
      colorStyle.width = `calc(${100 / colorsArray.length}% - 150px)`;
      colorStyle.minWidth = 120;
      colorStyle.marginLeft = 12;
      colorStyle.marginRight = 12;
      colorStyle.fontSize = 16;
    } else if (colorsArray.length > 10) {
      colorStyle.width = 25;
      colorStyle.height = 25;
      colorStyle.marginLeft = 4;
      colorStyle.marginRight = 4;
    }
  }

  const isSudoKu = grid === 'sudoku';

  return (
    <div
      className={classNames(styles.swatch, {
        [styles.dark]: !!dark,
        [styles.multiple]: colors.includes('|'),
        [styles.sudoku]: isSudoKu,
        [styles.less]: colors.split(',').length < 5,
      })}
    >
      {(title || darkmode) && (
        <div className={styles.heading}>
          <h4>{title}</h4>
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
      <div className={styles.panel}>
        <div className={styles.panelContainer}>
          {colorsSwatchArray.map((swatch, i) => (
            <Colors
              key={i}
              name={colorNamesArray[i]}
              colorStyle={{
                ...colorStyle,
                maxWidth: isSudoKu ? undefined : `${100 / swatch.length}%`,
              }}
              colors={swatch}
            />
          ))}
          <Colors
            names={colorNamesArray}
            colorStyle={colorStyle}
            colors={colorsArray}
          />
        </div>
      </div>
    </div>
  );
};

export default Swatch;
