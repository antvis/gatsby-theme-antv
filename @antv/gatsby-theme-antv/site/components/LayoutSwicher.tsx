import React from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { DefaultIcon, TowRowsIcon, ThreeRowsIcon } from './LayoutIcons';
import styles from './LayoutSwicher.module.less';

interface Prop {
  updateLayout: Function;
}

const LayoutSwicher: React.FC<Prop> = ({ updateLayout }) => {
  const menu = (
    <Menu>
      <Menu.Item onClick={() => updateLayout('view0')}>
        <DefaultIcon />
        经典布局
      </Menu.Item>
      <Menu.Item onClick={() => updateLayout('view1')}>
        <ThreeRowsIcon />
        三栏布局
      </Menu.Item>
      <Menu.Item onClick={() => updateLayout('view2')}>
        <TowRowsIcon />
        两栏布局
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
