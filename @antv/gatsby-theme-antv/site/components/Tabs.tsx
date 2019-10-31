import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styles from './Tabs.module.less';

const Tabs: React.FC<{
  active: 'examples' | 'API' | 'design';
  slug: string;
}> = ({ active, slug }) => {
  const { t } = useTranslation();
  return (
    <ul className={styles.tabs}>
      <li
        className={classNames({
          [styles.active]: active === 'examples',
        })}
      >
        <Link to={slug}>{t('代码演示')}</Link>
      </li>
      <li
        className={classNames({
          [styles.active]: active === 'API',
        })}
      >
        <Link to={`${slug}/API`}>API</Link>
      </li>
      <li
        className={classNames({
          [styles.active]: active === 'design',
        })}
      >
        <Link to={`${slug}/design`}>{t('设计指引')}</Link>
      </li>
    </ul>
  );
};

export default Tabs;
