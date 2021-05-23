import React, { useMemo, useEffect } from 'react';
import { Alert } from 'antd';
import { get } from 'lodash';
import { NotificationFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styles from './TopBanner.module.less';

const BANNER_LOCALSTORAGE_KEY = 'antv_local_banner';

type Props = {
  announcement: { zh: string; en: string };
};

const TopBanner: React.FC<Props> = ({ announcement }) => {
  const { i18n } = useTranslation();
  /** 公告 id */
  const bannerId = useMemo(() => {
    return announcement ? announcement.en : '';
  }, [announcement]);

  /** 公告 id 更新，更新下本地缓存 */
  useEffect(() => {
    if (typeof localStorage !== undefined) {
      try {
        const item = localStorage.getItem(BANNER_LOCALSTORAGE_KEY) || '{}';
        if (get(JSON.parse(item), [bannerId]) !== false) {
          localStorage.setItem(
            BANNER_LOCALSTORAGE_KEY,
            JSON.stringify({ [bannerId]: true }),
          );
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [bannerId]);

  return typeof localStorage !== undefined &&
    get(JSON.parse(localStorage.getItem(BANNER_LOCALSTORAGE_KEY) || '{}'), [
      bannerId,
    ]) ? (
    <Alert
      message={
        <span className={styles.topBannerAnnouncements}>
          {get(announcement, i18n.language)}
        </span>
      }
      type="info"
      showIcon
      icon={<NotificationFilled style={{ height: '16px' }} />}
      closable
      onClose={() => {
        // 关闭公告
        if (typeof localStorage !== undefined) {
          localStorage.setItem(
            BANNER_LOCALSTORAGE_KEY,
            JSON.stringify({ [bannerId]: false }),
          );
        }
      }}
      style={{ borderRadius: 0, borderWidth: '1px 0' }}
    />
  ) : null;
};

export default TopBanner;
