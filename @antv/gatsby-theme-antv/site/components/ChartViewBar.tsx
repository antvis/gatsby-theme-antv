import React from 'react';
import { Radio } from 'antd';
import {
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import styles from './ChartViewBar.module.less';

interface Prop {
  updateView: Function;
  view: string;
}

const ChartViewBar: React.FC<Prop> = (props) => {
  const onChange = (e: any) => {
    props.updateView(e.target.value);
    const resize = new Event('resize');
    window.dispatchEvent(resize);
  };
  return (
    <Radio.Group
      className={styles.btnBar}
      value={props.view}
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
export default ChartViewBar;
