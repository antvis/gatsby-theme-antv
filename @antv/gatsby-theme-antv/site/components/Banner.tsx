import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Button, Icon, Modal } from 'antd';
import GitHubButton from 'react-github-button';
import gh from 'parse-github-url';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import styles from './Banner.module.less';
import Notification, { NotificationProps } from './Notification';

interface BannerButton {
  text: string;
  link: string;
  style?: React.CSSProperties;
  type?: string;
  shape?: string;
}

interface BannerProps {
  coverImage?: React.ReactNode;
  title: string;
  description: string;
  notifications?: NotificationProps[];
  style?: React.CSSProperties;
  className?: string;
  video?: string;
  showGithubStars?: boolean;
  buttons?: BannerButton[];
  onCloseVideo?: () => void;
  onPlayVideo?: () => void;
}

const backLeftBottom =
  'https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg';

const Banner: React.FC<BannerProps> = ({
  coverImage,
  title,
  description,
  notifications,
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

  const insNotifications: NotificationProps[] = [
    {
      type: t('推荐'),
      title: t('AntV 11-22 品牌日：知源·致远'),
      date: '2019.11.22',
      link: 'https://www.yuque.com/antv/blog/2019-release',
    },
    {
      type: t('更新'),
      title: t('G2Plot 图表库发布'),
      date: '2019.11.22',
      link: 'https://www.yuque.com/antv/blog/charts',
    },
  ];

  const notificationsNode = (notifications || insNotifications)
    .slice(0, 2)
    .map((notification, i) => (
      <Notification index={i} key={i} {...notification} />
    ));

  const showVideo = () => {
    if (onPlayVideo) {
      onPlayVideo();
    }

    Modal.info({
      title: 'This is a notification message',
      className: styles.videoModal,
      onCancel: onCloseVideo,
      content: <Player className={styles.video} autoPlay src={video} />,
      width: '70%',
    });
  };

  const renderButtons = buttons.map((button: BannerButton, i) => {
    const { link, type = 'primary', shape } = button
    const ButtonLink =
      link.startsWith('http') || link.startsWith('#')
        ? 'a'
        : Link;
    // buttonProps可读写，便于业务方传入更多的组件props配置
    let buttonProps = {} as any;
    if (link.startsWith('http')) {
      buttonProps.target = '_blank';
      buttonProps.rel = 'noopener noreferrer';
    }
    if (ButtonLink === 'a') {
      buttonProps.href = link;
    } else {
      buttonProps.to = link;
    }
    // 复合属性，仅ant design支持的type属性提供透明配置
    buttonProps = {
      ...buttonProps,
      ...button,
      type,
      shape: shape || 'round',
      ghost: !i ? false : (['primary', 'dashed', 'danger', 'link'].includes(type) ? true : false)
    }
    return (
      <Button
        {...buttonProps}
        className={classNames(
          styles.buttonLink
        )}
        key={i}
      >{button.text}
      </Button>
    )
  });

  if (video) {
    renderButtons.push(
      <div
        key="video"
        onClick={showVideo}
        className={styles.videoButtonWrapper}
      >
        <div className={styles.videoButton}>
          <Icon type="caret-right" className={styles.videoButtonIcon} />
          <p
            className={styles.videoButtonText}
            style={{
              fontSize: '14px',
              lineHeight: '40px',
            }}
          >
            {t('知源・致远')}
          </p>
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
          {notificationsNode}
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
