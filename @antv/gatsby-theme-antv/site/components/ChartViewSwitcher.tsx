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
      <Tooltip title={t('切换至电脑视图')}>
        <Radio.Button value="desktop">
          <DesktopOutlined />
        </Radio.Button>
      </Tooltip>
      <Tooltip title={t('切换至平板视图')}>
        <Radio.Button value="tablet">
          <TabletOutlined />
        </Radio.Button>
      </Tooltip>
      <Tooltip title={t('切换至移动端视图')}>
        <Radio.Button value="mobile">
          <MobileOutlined />
        </Radio.Button>
      </Tooltip>
    </Radio.Group>
  );
};
export default ChartViewSwitcher;
