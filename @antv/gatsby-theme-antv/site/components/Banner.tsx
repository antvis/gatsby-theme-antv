import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon, Modal } from 'antd';
import GitHubButton from 'react-github-button';
import gh from 'parse-github-url';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import Notification from './Notification';
import styles from './Banner.module.less';

interface Notification {
  type: string;
  title: string;
  date: string;
  link?: string;
}

interface BannerButton {
  text: string;
  link: string;
  style?: React.CSSProperties;
  type?: string;
}

interface BannerProps {
  coverImage?: React.ReactNode;
  title: string;
  description: string;
  notifications?: Notification[];
  style?: React.CSSProperties;
  className?: string;
  video?: string;
  showGithubStars?: boolean;
  buttons?: BannerButton[];
  onCloseVideo?: () => void;
  onPlayVideo?: () => void;
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
  notifications = [],
  style = {},
  className,
  video,
  showGithubStars = true,
  buttons = [],
  onCloseVideo,
  onPlayVideo,
}) => {
  const { t } = useTranslation();

  const query = graphql`
    query SiteBannerQuery {
      site {
        siteMetadata {
          githubUrl
        }
      }
    }
  `;
  const { site } = useStaticQuery(query);
  const { githubUrl } = site.siteMetadata;

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
      if (i > 1) {
        return undefined;
      }
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

  const showVideo = () => {
    if (onPlayVideo) {
      onPlayVideo();
    }

    Modal.info({
      title: 'This is a notification message',
      className: styles.videoModal,
      onCancel: onCloseVideo,
      content: (
        <Player
          className={styles.video}
          autoPlay="true"
          src="https://mdn.alipayobjects.com/afts/file/A*grJPTKqmP9QAAAAAAAAAAABjAQAAAQ?bz=antv_site"
        />
      ),
      width: '70%',
    });
  };

  const renderButtons = buttons.map((button: BannerButton, i) => (
    <Link
      key={i}
      to={button.link}
      target="newtag"
      style={{ marginLeft: i === 0 ? '0%' : '2%' }}
    >
      <div
        className={classNames(
          styles.button,
          styles[button.type || ''],
          'primary-button',
        )}
        style={button.style}
      >
        {button.text}
      </div>
    </Link>
  ));

  if (video) {
    renderButtons.push(
      <div
        key="video"
        onClick={showVideo}
        className={styles.videoButtonWrapper}
      >
        <div className={styles.videoButton}>
          <Icon
            type="caret-right"
            className={styles.videoButtonIcon}
            style={{ fontSize: '16px', color: '#873BF4' }}
          />
        </div>
      </div>,
    );
  }

  if (showGithubStars) {
    const githubObj = gh(githubUrl);
    if (githubObj && githubObj.owner && githubObj.name) {
      renderButtons.push(
        <div key="github" className={styles.githubWrapper}>
          <GitHubButton
            type="stargazers"
            size="large"
            namespace={githubObj.owner}
            repo={githubObj.name}
          />
        </div>,
      );
    }
  }

  return (
    <section className={classNames(styles.wrapper, className)} style={style}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={classNames(styles.title, 'banner-title')}>
            {title}
          </div>
          <p className={classNames(styles.description, 'banner-description')}>
            {description}
          </p>
          <div className={classNames(styles.buttons, 'banner-buttons')}>
            {renderButtons}
          </div>
        </div>
        <div className={classNames(styles.notifications, 'notifications')}>
          {getNotifications()}
        </div>
        <div className={classNames(styles.teaser, 'teaser')}>
          <div className={classNames(styles.teaserimg, 'teaser-img')}>
            {coverImage}
          </div>
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
