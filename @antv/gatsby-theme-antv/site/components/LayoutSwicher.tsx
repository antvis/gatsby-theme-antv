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

interface Prop {
  updateLayout: Function;
}

const LayoutSwicher: React.FC<Prop> = ({ updateLayout }) => {
  const menu = (
    <Menu>
      <Menu.Item onClick={() => updateLayout('viewDefault')}>
        <DefaultIcon />
        经典布局
      </Menu.Item>

      <Menu.Item onClick={() => updateLayout('viewTwoRows')}>
        <TowRowsIcon />
        两栏布局
      </Menu.Item>
      <Menu.Item onClick={() => updateLayout('viewThreeCols')}>
        <ThreeRowsIcon />
        三栏布局
      </Menu.Item>
      <Menu.Item onClick={() => updateLayout('viewThreeRows')}>
        <ThreeRowsIcon2 />
        三栏布局
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu}>
        <div className={styles.dropGroup}>
          <Button
            type="link"
            className={styles.switch}
            icon={<DefaultIcon />}
          />
          <CaretDownOutlined className={styles.drop} />
        </div>
      </Dropdown>
    </>
  );
};
export default LayoutSwicher;
