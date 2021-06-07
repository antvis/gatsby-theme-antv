import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Search.module.less';

export interface SearchProps {
  docsearchOptions?: {
    apiKey: string;
    indexName: string;
  };
}

function initDocSearch({
  docsearch,
  lang,
  docsearchOptions,
}: {
  docsearch: any;
  lang: string;
  docsearchOptions: SearchProps['docsearchOptions'];
}) {
  const { apiKey = '194b1be7fb1254c787f4e036912af3eb', indexName = 'antv' } =
    docsearchOptions || {};
  docsearch({
    apiKey,
    indexName,
    inputSelector: `.${styles.input}`,
    algoliaOptions: { facetFilters: [`tags:${lang}`] },
    transformData(hits: Array<{ url: string }>) {
      hits.forEach((hit) => {
        /* eslint-disable no-param-reassign */
        hit.url = hit.url.replace('g2.antv.vision', window.location.host);
        hit.url = hit.url.replace('g6.antv.vision', window.location.host);
        hit.url = hit.url.replace('f2.antv.vision', window.location.host);
        hit.url = hit.url.replace('l7.antv.vision', window.location.host);
        hit.url = hit.url.replace('x6.antv.vision', window.location.host);
        hit.url = hit.url.replace('g2plot.antv.vision', window.location.host);
        hit.url = hit.url.replace('graphin.antv.vision', window.location.host);
        hit.url = hit.url.replace('https:', window.location.protocol);
        hit.url = hit.url.replace('#gatsby-focus-wrapper', '');
        /* eslint-enable no-param-reassign */
      });
      return hits;
    },
    debug: false, // Set debug to true if you want to inspect the dropdown
  });
}

const Search: React.FC<SearchProps> = ({ docsearchOptions }) => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('docsearch.js').then(({ default: docsearch }) => {
        initDocSearch({
          docsearch,
          lang: i18n.language,
          docsearchOptions,
        });
      });
    }
  }, []);
  return (
    <label className={styles.search} htmlFor="search">
      <SearchOutlined className={styles.icon} />
      <input className={styles.input} id="search" placeholder={t('搜索…')} />
    </label>
  );
};

export default Search;
