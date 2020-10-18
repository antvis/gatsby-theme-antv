import React from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import {
  DefaultIcon,
  TowRowsIcon,
  ThreeRowsIcon,
  ThreeRowsIcon2,
} from './LayoutIcons';
import styles from './LayoutSwicher.module.less';

interface LayoutProps {
  updateLayout: (val: string) => void;
}

const LayoutSwicher: React.FC<LayoutProps> = ({ updateLayout }) => {
  const menu = (
    <Menu>
      <Menu.Item
        icon={<DefaultIcon />}
        onClick={() => updateLayout('viewDefault')}
      >
        经典布局
      </Menu.Item>

      <Menu.Item
        icon={<TowRowsIcon />}
        onClick={() => updateLayout('viewTwoRows')}
      >
        两栏布局
      </Menu.Item>
      <Menu.Item
        icon={<ThreeRowsIcon />}
        onClick={() => updateLayout('viewThreeCols')}
      >
        三栏布局
      </Menu.Item>
      <Menu.Item
        icon={<ThreeRowsIcon2 />}
        onClick={() => updateLayout('viewThreeRows')}
      >
        三栏布局
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div className={styles.dropGroup}>
        <Button type="link" className={styles.switch} icon={<DefaultIcon />} />
        <CaretDownOutlined className={styles.drop} />
      </div>
    </Dropdown>
  );
};
export default LayoutSwicher;
