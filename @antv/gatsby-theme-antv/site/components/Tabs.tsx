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
  active: 'examples' | 'API' | 'design';
  slug: string;
  showTabs: ShowTabsProps;
  examplesCount?: number;
}> = ({ active, slug, showTabs = {} as ShowTabsProps, examplesCount }) => {
  const { t } = useTranslation();
  if (showTabs.API === false && showTabs.design === false) {
    return <h3 className={styles.title}>{t('演示')}</h3>;
  }
  return (
    <ul className={styles.tabs}>
      <li
        className={classNames({
          [styles.active]: active === 'examples',
          [styles.hidden]: showTabs.examples === false,
        })}
      >
        <Link to={slug}>
          <h2>
            {t('代码演示')}
            {examplesCount && examplesCount > 1 ? (
              <sup className={styles.count}>({examplesCount})</sup>
            ) : null}
          </h2>
        </Link>
      </li>
      <li
        className={classNames({
          [styles.active]: active === 'API',
          [styles.hidden]: showTabs.API === false,
        })}
      >
        <Link to={`${slug}/API`}>
          <h2>API</h2>
        </Link>
      </li>
      <li
        className={classNames({
          [styles.active]: active === 'design',
          [styles.hidden]: showTabs.design === false,
        })}
      >
        <Link to={`${slug}/design`}>
          <h2>{t('设计指引')}</h2>
        </Link>
      </li>
    </ul>
  );
};

export default Tabs;
