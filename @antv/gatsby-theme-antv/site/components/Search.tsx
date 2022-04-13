import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';
import { DocSearch } from '@docsearch/react';

import styles from './Search.module.less';

export interface SearchProps {
  // algolia 搜索配置
  docsearchOptions?: {
    versionV3?: boolean; // 目前有两个版本的 docsearch.js，V2.x 和 V3.x，此开关决定用哪一个版本的搜索框，根据申请到的参数版本决定，二者互不兼容，详情见 https://docsearch.algolia.com/
    appId?: string; // V3.x 版本 docsearch 需要appId, V2.x 版不需要。
    apiKey: string;
    indexName: string;
  };
}

function initDocSearchV2({
  docsearchV2,
  lang,
  docsearchOptions,
}: {
  docsearchV2: any;
  lang: string;
  docsearchOptions: SearchProps['docsearchOptions'];
}) {
  const { apiKey = '194b1be7fb1254c787f4e036912af3eb', indexName = 'antv' } =
    docsearchOptions || {};
  docsearchV2({
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
  const {
    apiKey = '194b1be7fb1254c787f4e036912af3eb',
    indexName = 'antv',
    versionV3 = false,
    appId = 'BH4D9OD16A',
  } = docsearchOptions || {};
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (typeof window !== 'undefined' && !versionV3) {
      import('docsearch.js').then(({ default: docsearchV2 }) => {
        initDocSearchV2({
          docsearchV2,
          lang: i18n.language,
          docsearchOptions,
        });
      });
    }
  }, []);
  return (
    <label className={styles.search} htmlFor="search" id="search">
      {versionV3 ? (
        <DocSearch appId={appId} indexName={indexName} apiKey={apiKey} />
      ) : (
        <>
          <SearchOutlined className={styles.icon} />
          <input
            className={styles.input}
            id="search"
            placeholder={t('搜索…')}
          />
        </>
      )}
    </label>
  );
};

export default Search;
