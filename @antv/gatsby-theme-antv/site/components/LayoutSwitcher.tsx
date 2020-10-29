import React from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { DefaultIcon, TowRowsIcon, ThreeRowsIcon } from './LayoutIcons';
import styles from './LayoutSwitcher.module.less';

interface LayoutProps {
  updateLayout: (val: string) => void;
}

let icon = <DefaultIcon />;

const LayoutSwitcher: React.FC<LayoutProps> = ({ updateLayout }) => {
  const { t } = useTranslation();
  const menu = (
    <Menu>
      <Menu.Item
        icon={<DefaultIcon />}
        onClick={() => {
          icon = <DefaultIcon />;
          updateLayout('viewDefault');
        }}
      >
        {t('经典布局')}
      </Menu.Item>

      <Menu.Item
        icon={<TowRowsIcon />}
        onClick={() => {
          icon = <TowRowsIcon />;
          updateLayout('viewTwoCols');
        }}
      >
        {t('两栏布局')}
      </Menu.Item>
      <Menu.Item
        icon={<ThreeRowsIcon />}
        onClick={() => {
          icon = <ThreeRowsIcon />;
          updateLayout('viewThreeCols');
        }}
      >
        {t('三栏布局')}
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
export default LayoutSwitcher;
