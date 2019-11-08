import React from 'react';
import Notification from './Notification';
import styles from './Banner.module.less';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

interface Notification {
  type: string;
  title: string;
  date: string;
  link?: string;
}

interface BannerProps {
  coverImage: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  notifications?: Notification[];
  style?: React.CSSProperties;
  className?: string;
}

const numImgs = [
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ViOPRKPsVzoAAAAAAAAAAABkARQnAQ',
  'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NFADS6PF0DYAAAAAAAAAAABkARQnAQ',
];

const backLeftBottom =
  'https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg';

const Banner: React.FC<BannerProps> = ({
  coverImage,
  title,
  description,
  buttonText,
  buttonHref,
  notifications = [],
  style = {},
  className,
}) => {
  const { t } = useTranslation();
  const insNotifications: Notification[] = [
    {
      type: t('更新'),
      title: t('L7 发布新版本，让地图动起来！'),
      date: '2019.12.04',
      link: '',
    },
    {
      type: t('推荐'),
      title: t('Kitchen 3.75，效率大幅提升！'),
      date: '2019.12.03',
      link: '',
    },
  ];
  if (notifications) {
    notifications.forEach((noti, i) => {
      insNotifications[i] = noti;
    });
  }
  const getNotifications = () => {
    const children = insNotifications.map((notification, i) => {
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
        <a href={notification.link} key={i} className={styles.notiWrapper}>
          <Notification
            className={cstyle}
            numImg={numImgs[i]}
            notificationContent={notification}
          />
        </a>
      );
    });
    return children;
  };

  return (
    <section className={classNames(styles.wrapper, className)} style={style}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>{description}</p>

          <a href={buttonHref} className={styles.amore}>
            <button className={styles.more}>{buttonText}</button>
          </a>
        </div>
        <div className={styles.notifications}>{getNotifications()}</div>
        <div className={styles.teaser}>
          <div className={styles.teaserimg}>{coverImage}</div>
        </div>
        <img
          className={styles.backLeftBottom}
          src={backLeftBottom}
          alt="back"
        />
      </div>
    </section>
  );
};

export default Banner;
