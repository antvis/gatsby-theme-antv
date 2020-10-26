import React from 'react';
import { Radio, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
        <Tooltip title={t('切换至电脑视图')}>
          <DesktopOutlined />
        </Tooltip>
      </Radio.Button>
      <Radio.Button value="tablet">
        <Tooltip title={t('切换至平板视图')}>
          <TabletOutlined />
        </Tooltip>
      </Radio.Button>
      <Radio.Button value="mobile">
        <Tooltip title={t('切换至移动端视图')}>
          <MobileOutlined />
        </Tooltip>
      </Radio.Button>
    </Radio.Group>
  );
};
export default ChartViewSwitcher;
