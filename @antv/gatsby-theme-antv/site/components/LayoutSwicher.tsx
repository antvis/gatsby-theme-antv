import React from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { DefaultIcon, TowRowsIcon, ThreeRowsIcon } from './LayoutIcons';
import styles from './LayoutSwicher.module.less';

interface LayoutProps {
  updateLayout: (val: string) => void;
}

let icon = <DefaultIcon />;
const LayoutSwicher: React.FC<LayoutProps> = ({ updateLayout }) => {
  const menu = (
    <Menu>
      <Menu.Item
        icon={<DefaultIcon />}
        onClick={() => {
          icon = <DefaultIcon />;
          updateLayout('viewDefault');
        }}
      >
        经典布局
      </Menu.Item>

      <Menu.Item
        icon={<TowRowsIcon />}
        onClick={() => {
          icon = <TowRowsIcon />;
          updateLayout('viewTwoCols');
        }}
      >
        两栏布局
      </Menu.Item>
      <Menu.Item
        icon={<ThreeRowsIcon />}
        onClick={() => {
          icon = <ThreeRowsIcon />;
          updateLayout('viewThreeCols');
        }}
      >
        三栏布局
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div className={styles.dropGroup}>
        <Button type="link" className={styles.switch} icon={icon} />
        <CaretDownOutlined className={styles.drop} />
      </div>
    </Dropdown>
  );
};
export default LayoutSwicher;
