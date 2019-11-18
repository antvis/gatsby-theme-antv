import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import styles from './Search.module.less';

function initDocSearch(docsearch: any, lang: string) {
  docsearch({
    apiKey: '60ac2c1a7d26ab713757e4a081e133d0',
    indexName: 'ant_design',
    inputSelector: `.${styles.input}`,
    algoliaOptions: { facetFilters: [`tags:${lang}`] },
    transformData(hits: Array<{ url: string }>) {
      hits.forEach(hit => {
        hit.url = hit.url.replace('antv.alipay.com', window.location.host); // eslint-disable-line
        hit.url = hit.url.replace('https:', window.location.protocol); // eslint-disable-line
      });
      return hits;
    },
    debug: true, // Set debug to true if you want to inspect the dropdown
  });
}

const Search = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('docsearch.js').then(({ default: docsearch }) => {
        initDocSearch(docsearch, i18n.language);
      });
    }
  }, []);
  return (
    <span className={styles.search}>
      <Icon type="search" className={styles.icon} />
      <input className={styles.input} placeholder={t('搜索…')} />
    </span>
  );
};

export default Search;
