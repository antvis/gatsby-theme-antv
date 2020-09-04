import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styles from './Tabs.module.less';

interface ShowTabsProps {
  examples?: boolean;
  API?: boolean;
  design?: boolean;
}

const Tabs: React.FC<{
  active: 'API' | 'design';
  slug: string;
  showTabs: ShowTabsProps;
  examplesCount?: number;
  title?: string;
}> = ({ active, slug, showTabs = {} as ShowTabsProps, title }) => {
  const { t } = useTranslation();
  if (showTabs.API === false && showTabs.design === false) {
    return <p className={styles.title}>{t('演示')}</p>;
  }
  const hiddenTitleForDocsearch = (
    <span className={styles.hidden}>{title} - </span>
  );
  return (
    <ul className={styles.tabs}>
      <li
        className={classNames({
          [styles.active]: active === 'API',
          [styles.hidden]: showTabs.API === false,
        })}
      >
        <Link to={`${slug}/API`}>
          <div>
            {hiddenTitleForDocsearch}
            API
          </div>
        </Link>
      </li>
      <li
        className={classNames({
          [styles.active]: active === 'design',
          [styles.hidden]: showTabs.design === false,
        })}
      >
        <Link to={`${slug}/design`}>
          <div>
            {hiddenTitleForDocsearch}
            {t('设计指引')}
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Tabs;
