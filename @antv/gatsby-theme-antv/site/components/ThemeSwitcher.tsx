import React, { FC, useState } from 'react';
import { Button, Menu, Dropdown, Space, message } from 'antd';
import {
  CaretDownOutlined,
  CopyOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import pallette from '../pallette.json';
import styles from './ThemeSwitcher.module.less';

interface ThemeSwitcherProps {
  updateLayout?: (val: string) => void;
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

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const defaultColorArr = pallette.categorical[0].color20?.slice(0, 3);
  const [curColor, updateCurColor] = useState<string[]>(defaultColorArr);
  const copyToClipboard = (arr: string) => {
    const el = document.createElement('textarea');
    el.value = arr;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const menu = (
    <Menu className={styles.operateBtns}>
      <Menu.ItemGroup title="分类色板">
        {pallette.categorical.map(
          (color: { color20: string[] }, key: number) => {
            return (
              <Menu.Item key={key}>
                <Space>
                  <div
                    className={styles.panelContainer}
                    onClick={() => {
                      updateCurColor(color.color20.slice(0, 3));
                    }}
                  >
                    <Colors
                      colorStyle={{
                        maxWidth: `${100 / color.color20.length}%`,
                      }}
                      colors={color.color20}
                    />
                  </div>

                  <VerticalAlignBottomOutlined />
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
      <Menu.ItemGroup title="顺序色板">
        {pallette.continuous.map(
          (color: { color20: string[] }, key: number) => {
            return (
              <Menu.Item key={key}>
                <Space>
                  <div
                    className={styles.panelContainer}
                    onClick={() => {
                      updateCurColor(color.color20.slice(0, 3));
                    }}
                  >
                    <Colors
                      colorStyle={{
                        maxWidth: `${100 / color.color20.length}%`,
                      }}
                      colors={color.color20}
                    />
                  </div>

                  <VerticalAlignBottomOutlined />
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
      <Menu.ItemGroup title="发散色板">
        {pallette.discrete.map((color: { color20: string[] }, key: number) => {
          return (
            <Menu.Item key={key}>
              <Space>
                <div
                  className={styles.panelContainer}
                  onClick={() => {
                    updateCurColor(color.color20.slice(0, 3));
                  }}
                >
                  <Colors
                    colorStyle={{
                      maxWidth: `${100 / color.color20.length}%`,
                    }}
                    colors={color.color20}
                  />
                </div>

                <VerticalAlignBottomOutlined />
                <CopyOutlined
                  onClick={() => {
                    copyToClipboard(JSON.stringify(color));
                    message.success('Copied!');
                  }}
                />
              </Space>
            </Menu.Item>
          );
        })}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
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
  );
};
export default ThemeSwitcher;
