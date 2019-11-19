import React from 'react';
import styles from './Notification.module.less';

export interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}

const numberImages = [
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ViOPRKPsVzoAAAAAAAAAAABkARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NFADS6PF0DYAAAAAAAAAAABkARQnAQ',
];

const Notification: React.FC<NotificationProps> = ({
  index = 0,
  type,
  title,
  date,
  link,
}) => (
  <a href={link} className={styles.notification}>
    <div className={styles.container}>
      <img
        className={styles.number}
        src={numberImages[index]}
        alt={index.toString()}
      />
      <div className={styles.content}>
        <p className={styles.description}>
          {type} ‧ {title}
        </p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  </a>
);

export default Notification;
