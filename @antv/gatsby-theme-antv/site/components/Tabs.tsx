import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { Input, AutoComplete } from 'antd';
import { SelectProps } from 'antd/es/select';
import { useTranslation } from 'react-i18next';
// import visit from 'unist-util-visit';
import Icon, { SearchOutlined } from '@ant-design/icons';
import CollaspeAllSvg from '../images/collapse-all.svg';
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
  updateR0ActiveKeys: Function;
  updateR2ActiveKeys: Function;
  updateSearchResult: Function;
  updateSearchQuery: Function;
  content?: string[];
}> = ({
  active,
  slug,
  showTabs = {} as ShowTabsProps,
  title,
  updateR0ActiveKeys,
  updateR2ActiveKeys,
  updateSearchResult,
  updateSearchQuery,
  content,
}) => {
  const [options, updateOptions] = useState<SelectProps<object>['options']>([]);
  const [list, updateList] = useState<Record<string, any>>({});
  const getOptionList = (
    nodes: string[],
    result: Record<string, any>,
    level: string,
    parent?: string,
  ) => {
    nodes.forEach((node: any, index: number) => {
      if (node.title) {
        const key = parent
          ? `${parent}:${level}-${index}`
          : `${level}-${index}`;
        if (!result[node.title]) {
          // eslint-disable-next-line no-param-reassign
          result[node.title] = [key];
        } else {
          result[node.title].push(key);
        }
        if (node.children) getOptionList(node.children, result, 'r2', key);
      }
    });
    return result;
  };

  useEffect(() => {
    if (content) updateList(getOptionList(content, list, 'r0'));
  }, [content]);

  const showSearchResult = (keys: string[]) => {
    const r0: string[] = [];
    const r2: string[] = [];
    keys.forEach((key: string) => {
      const temp = key.split(':');
      if (temp[0]) r0.push(temp[0]);
      if (temp[1]) r2.push(temp[1]);
    });
    if (r0) updateR0ActiveKeys(r0);
    if (r2) updateR2ActiveKeys(r2);
  };

  const searchResult = () => {
    return Object.entries(list).map((item, index) => {
      return {
        value: item[0],
        label: (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {item[0]}
          </div>
        ),
      };
    });
  };

  const { t } = useTranslation();
  if (showTabs.API === false && showTabs.design === false) {
    return <p className={styles.title}>{t('演示')}</p>;
  }
  const hiddenTitleForDocsearch = (
    <span className={styles.hidden}>{title} - </span>
  );

  const handleSearch = (value: string) => {
    updateOptions(value ? searchResult() : []);
  };

  const collaspseALL = () => {
    updateR0ActiveKeys([]);
    updateR2ActiveKeys([]);
  };

  const onSelect = (value: string) => {
    collaspseALL();
    showSearchResult(list[value]);
  };

  const getSearchResult = (
    nodes: string[],
    query: string,
    result: string[],
    level: string,
    parent?: string,
  ) => {
    nodes.forEach((node: any, index) => {
      const key = parent ? `${parent}:${level}-${index}` : `${level}-${index}`;
      const ast = JSON.stringify(node);
      const reg = new RegExp(query, 'gi');
      if (reg.test(ast)) {
        result.push(key);
      }

      if (node.children)
        getSearchResult(node.children, query, result, 'r2', key);
    });
    return result;
  };

  const onPressEnter = (e: any) => {
    if (!content) return;
    const { value } = e.target;
    const pattern = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]",
    );
    let query = '';
    for (let i = 0; i < value.length; i += 1) {
      query += value.substr(i, 1).replace(pattern, '');
    }
    const keys: string[] = [];
    if (query) {
      updateSearchQuery(query);
      getSearchResult(content, query, keys, 'r0');
    }

    collaspseALL();
    showSearchResult(keys);
  };

  return (
    <>
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
      {active === 'API' && (
        <div className={styles.tabExtra}>
          <div className={styles.tabSearch}>
            <AutoComplete
              className={styles.autoComplete}
              dropdownMatchSelectWidth={150}
              options={options}
              onSelect={onSelect}
              allowClear
              filterOption
              backfill
              onSearch={handleSearch}
            >
              <Input
                size="small"
                prefix={<SearchOutlined />}
                className={styles.input}
                placeholder={t('搜索')}
                onPressEnter={onPressEnter}
              />
            </AutoComplete>
          </div>
          <div className={styles.collapseAll} onClick={collaspseALL}>
            <Icon component={CollaspeAllSvg} />
            {t('收起所有')}
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;
