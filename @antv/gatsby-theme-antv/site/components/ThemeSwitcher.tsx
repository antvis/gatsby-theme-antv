import React, { FC, useState, useEffect } from 'react';
import { Button, Menu, Dropdown, Space, message } from 'antd';
import {
  CaretDownOutlined,
  CopyOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import pallette from '../pallette.json';
import styles from './ThemeSwitcher.module.less';
import AntvLogo from '../images/watermark.svg';

const htmlToImage = require('html-to-image');

interface ThemeSwitcherProps {
  updateTheme: (val: string) => void;
}

interface ColorsProps {
  colorStyle: React.CSSProperties;
  colors: string[];
}

const Colors: FC<ColorsProps> = ({ colorStyle = {}, colors = [] }) => {
  if (colors.length === 0) {
    return null;
  }
  return (
    <div className={styles.colors}>
      {colors.map((color: string, i: number) => (
        <div
          className={styles.color}
          style={{
            ...colorStyle,
            backgroundColor: color,
            color,
          }}
          key={i}
        />
      ))}
    </div>
  );
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ updateTheme }) => {
  const { t, i18n } = useTranslation();
  const defaultColorArr = pallette.categorical[0].colors20?.slice(0, 3);
  const [curColor, updateCurColor] = useState<string[]>(defaultColorArr);
  const [curPalette, updateCurPalette] = useState<string[]>();
  const copyToClipboard = (arr: string) => {
    const el = document.createElement('textarea');
    el.value = arr;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const download = () => {
    const palette = document.getElementById('palette');
    if (!palette) return;
    htmlToImage.toPng(palette).then((dataUrl: any) => {
      const link = document.createElement('a');
      link.download = 'antv-palette.png';
      link.href = dataUrl;
      link.click();
    });
  };

  useEffect(() => {
    if (curPalette) download();
  }, [curPalette]);

  const menu = (
    <Menu className={styles.operateBtns}>
      <Menu.ItemGroup title={t('分类色板')}>
        {pallette.categorical.map(
          (color: { colors10: string[]; colors20: string[] }, key: number) => {
            return (
              <Menu.Item key={key}>
                <div
                  className={styles.panelContainer}
                  onClick={() => {
                    updateCurColor(color.colors20.slice(0, 3));

                    const themeColors = {
                      colors10: color.colors10,
                      colors20: color.colors20,
                    };
                    updateTheme(JSON.stringify(themeColors));
                  }}
                >
                  <Colors
                    colorStyle={{
                      maxWidth: `${100 / color.colors20.length}%`,
                      height: '24px',
                    }}
                    colors={color.colors20}
                  />
                </div>

                <Space className={styles.btnGroup}>
                  <VerticalAlignBottomOutlined
                    onClick={() => updateCurPalette(color.colors20)}
                  />

                  <CopyOutlined
                    onClick={() => {
                      copyToClipboard(JSON.stringify(color));
                      message.success('Copied!');
                    }}
                  />
                </Space>
              </Menu.Item>
            );
          },
        )}
      </Menu.ItemGroup>
      <Menu.ItemGroup title={t('顺序色板')}>
        {pallette.continuous.map(
          (color: { colors10: string[]; colors20: string[] }, key: number) => {
            return (
              <Menu.Item key={key}>
                <div
                  className={styles.panelContainer}
                  onClick={() => {
                    updateCurColor(color.colors20.slice(0, 3));
                    updateTheme(JSON.stringify(color));
                  }}
                >
                  <Colors
                    colorStyle={{
                      maxWidth: `${100 / color.colors20.length}%`,
                      height: '24px',
                    }}
                    colors={color.colors20}
                  />
                </div>
                <Space className={styles.btnGroup}>
                  <VerticalAlignBottomOutlined
                    onClick={() => updateCurPalette(color.colors20)}
                  />
                  <CopyOutlined
                    onClick={() => {
                      copyToClipboard(JSON.stringify(color, null, '\t'));
                      message.success('Copied!');
                    }}
                  />
                </Space>
              </Menu.Item>
            );
          },
        )}
      </Menu.ItemGroup>
      <Menu.ItemGroup title={t('发散色板')}>
        {pallette.discrete.map(
          (color: { colors10: string[]; colors20: string[] }, key: number) => {
            return (
              <Menu.Item key={key}>
                <div
                  className={styles.panelContainer}
                  onClick={() => {
                    updateCurColor(color.colors20.slice(0, 3));
                    updateTheme(JSON.stringify(color));
                  }}
                >
                  <Colors
                    colorStyle={{
                      maxWidth: `${100 / color.colors20.length}%`,
                      height: '24px',
                    }}
                    colors={color.colors20}
                  />
                </div>
                <Space className={styles.btnGroup}>
                  <VerticalAlignBottomOutlined
                    onClick={() => updateCurPalette(color.colors20)}
                  />
                  <CopyOutlined
                    onClick={() => {
                      copyToClipboard(JSON.stringify(color));
                      message.success('Copied!');
                    }}
                  />
                </Space>
              </Menu.Item>
            );
          },
        )}
      </Menu.ItemGroup>

      <a
        rel="noreferrer"
        className={styles.link}
        target="_blank"
        href={`https://antv.vision/${i18n.language}/docs/specification/language/palette`}
      >
        {t('查看更多色板用法')}
      </a>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <div className={styles.dropGroup}>
          <Button type="link" className={styles.switcher}>
            <div className={styles.themeBtn}>
              <Colors
                colorStyle={{
                  width: `${100 / curColor.length}%`,
                  height: '100%',
                  display: 'inline-block',
                }}
                colors={curColor}
              />
            </div>
          </Button>
          <CaretDownOutlined className={styles.drop} />
        </div>
      </Dropdown>
      {curPalette && (
        <div className={styles.palette} id="palette">
          <AntvLogo />
          <div className={styles.bg}>
            <Colors
              colorStyle={{
                width: `${100 / curPalette.length}%`,
                height: '100%',
                display: 'inline-block',
              }}
              colors={curPalette}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default ThemeSwitcher;
