import React from 'react';
import Notification from './Notification';
import styles from './Banner.module.less';
import classNames from 'classnames';

interface Notification {
  type: string;
  title: string;
  date: string;
}

interface Props {
  coverImage: JSX.Element;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  notifications: Array<Notification>;
  style: object;
  className: string;
}

const notifications: Array<Notification> = [
  {
    type: '更新',
    title: 'L7 发布新版本，让地图动起来！',
    date: '2019.12.04',
  },
  {
    type: '推荐',
    title: 'Kitchen 3.75 ，效率大幅提升！',
    date: '2019.12.03',
  },
];

const numImgs = [
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ViOPRKPsVzoAAAAAAAAAAABkARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NFADS6PF0DYAAAAAAAAAAABkARQnAQ',
];

const Banner = (props: Props) => {
  const notiInstrinsicFlgs = [];
  notifications.forEach(noti => {
    notiInstrinsicFlgs.push(true);
  });
  if (props.notifications) {
    props.notifications.forEach((noti, i) => {
      notifications[i] = noti;
      notiInstrinsicFlgs[i] = false;
    });
  }
  const getNotifications = () => {
    const children = notifications.map((notification, i) => {
      if (i > 1) return;
      let cstyle;
      switch (i) {
        case 0: {
          cstyle = styles.noti0;
          break;
        }
        case 1: {
          cstyle = styles.noti1;
          break;
        }
        default: {
          break;
        }
      }
      return (
        <div key={i}>
          <Notification
            className={cstyle}
            numImg={numImgs[i]}
            notificationContent={notification}
            translate={true}
          />
        </div>
      );
    });
    return children;
  };

  return (
    <section
      className={classNames(styles.wrapper, props.className)}
      style={props.style}
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{props.title}</div>
          <p className={styles.description}>{props.description}</p>

          <div className={styles.teaser}>
            <div className={styles.teaserimg}>{props.coverImage}</div>
          </div>

          <a href={props.buttonHref} className={styles.amore}>
            <button className={styles.more}>{props.buttonText}</button>
          </a>
        </div>
        <div className={styles.notifications}>{getNotifications()}</div>
      </div>
    </section>
  );
};

export default Banner;
