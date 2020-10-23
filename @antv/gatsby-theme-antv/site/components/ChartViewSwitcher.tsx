import React from 'react';
import { Radio } from 'antd';
import {
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import styles from './ChartViewSwitcher.module.less';

interface Prop {
  updateView: (val: string) => void;
  view: string;
}

const ChartViewSwitcher: React.FC<Prop> = ({ updateView, view }) => {
  const onChange = (e: any) => {
    updateView(e.target.value);
    const resize = new Event('resize');
    window.dispatchEvent(resize);
  };
  return (
    <Radio.Group
      className={styles.btnBar}
      value={view}
      buttonStyle="solid"
      onChange={onChange}
    >
      <Radio.Button value="desktop">
        <DesktopOutlined />
      </Radio.Button>
      <Radio.Button value="tablet">
        <TabletOutlined />
      </Radio.Button>
      <Radio.Button value="mobile">
        <MobileOutlined />
      </Radio.Button>
    </Radio.Group>
  );
};
export default ChartViewSwitcher;