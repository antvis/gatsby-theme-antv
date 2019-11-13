import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Search.module.less';

const Search = () => {
  const { t } = useTranslation();
  return <input className={styles.input} placeholder={t('搜索…')} />;
};

export default Search;
