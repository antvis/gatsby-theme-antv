import React from 'react';
import classNames from 'classnames';
import styles from './Notification.module.less';
import { useTranslation } from 'react-i18next';

interface Props {
  className: string;
  numImg: string;
  translate: boolean;
  notificationContent: {
    type: string;
    title: string;
    date: string;
  };
}

const Notification = (props: Props) => {
  const { t } = useTranslation();
  const { type, title, date } = props.notificationContent;
  let description = `${type} ‧ ${title}`;
  if (props.translate) {
    description = `${t(type)} ‧ ${t(title)}`;
  }
  return (
    <div className={classNames(styles.notification, props.className)}>
      <div className={styles.container}>
        <img className={styles.number} src={props.numImg} alt="numberimg"></img>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
