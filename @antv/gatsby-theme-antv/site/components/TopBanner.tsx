import React, { useMemo } from 'react';
import { get } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import styles from './TopBanner.module.less';
import Announcement from './Announcement';

const BANNER_LOCALSTORAGE_KEY = 'antv_local_banner';

type Props = {
  announcement: { zh: string; en: string };
};

/**
 * @description 顶部公告，用于展示一些更新信息：比如 API 文档更新、版本发布、生态丰富等
 */
const TopBanner: React.FC<Props> = ({ announcement }) => {
  const { i18n } = useTranslation();
  /** 公告 id */
  const bannerId = useMemo(() => {
    return announcement ? announcement.en : '';
  }, [announcement]);

  const content = get(announcement, i18n.language);

  return content ? (
    <Announcement
      message={<span className={styles.topBannerAnnouncements}>{content}</span>}
      bannerId={bannerId}
      localStorageId={BANNER_LOCALSTORAGE_KEY}
      style={{ borderRadius: 0, borderWidth: '1px 0' }}
    />
  ) : null;
};

export default TopBanner;
