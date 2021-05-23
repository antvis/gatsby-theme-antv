import React, { useEffect } from 'react';
import { Alert } from 'antd';
import type { AlertProps } from 'antd';
import { get } from 'lodash';
import { NotificationFilled } from '@ant-design/icons';

type Props = AlertProps & {
  localStorageId: string;
  bannerId: string;
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
  const isBrowser = localStorage !== undefined;
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
      console.error(e);
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
      icon={<NotificationFilled style={{ height: '16px' }} />}
      closable
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
