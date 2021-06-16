import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { get } from 'lodash-es';
import { NotificationFilled } from '@ant-design/icons';
import cx from 'classnames';
import styles from './Announcement.module.less';

type Props = {
  message: React.ReactNode;
  localStorageId: string;
  bannerId: string;
  style?: React.CSSProperties;
};

/**
 * @description 通用公告组件，根据 bannerId 来更新 lcoalStorage
 */
const Announcement: React.FC<Props> = ({
  message,
  bannerId,
  localStorageId,
  ...alertProps
}) => {
  const isBrowser = typeof window !== 'undefined';
  /** 公告 id 更新，更新下本地缓存 */
  useEffect(() => {
    try {
      const item = (isBrowser && localStorage.getItem(localStorageId)) || '{}';
      if (get(JSON.parse(item), [bannerId]) !== false && isBrowser) {
        localStorage.setItem(
          localStorageId,
          JSON.stringify({ [bannerId]: true }),
        );
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
  }, [bannerId]);

  return get(
    JSON.parse((isBrowser && localStorage.getItem(localStorageId)) || '{}'),
    [bannerId],
  ) ? (
    <Alert
      message={message}
      type="info"
      showIcon
      icon={<NotificationFilled style={{ height: '16px', color: '#4776E8' }} />}
      closable
      className={cx('banner-announcement', styles.bannerAnnouncement)}
      onClose={() => {
        // 关闭公告
        if (isBrowser) {
          localStorage.setItem(
            localStorageId,
            JSON.stringify({ [bannerId]: false }),
          );
        }
      }}
      {...alertProps}
    />
  ) : null;
};

export default Announcement;
