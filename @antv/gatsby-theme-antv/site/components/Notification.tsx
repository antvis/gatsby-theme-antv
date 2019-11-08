import React from 'react';
import classNames from 'classnames';
import styles from './Notification.module.less';
import { useTranslation } from 'react-i18next';

interface NotificationProps {
  className?: string;
  numImg: string;
  notificationContent: {
    type: string;
    title: string;
    date: string;
  };
}

const Notification: React.FC<NotificationProps> = ({
  className,
  numImg,
  notificationContent,
}) => {
  const { t } = useTranslation();
  const { type, title, date } = notificationContent;
  let description = `${type} ‧ ${title}`;
  return (
    <div className={classNames(styles.notification, className)}>
      <div className={styles.container}>
        <img className={styles.number} src={numImg} alt="numberimg"></img>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
