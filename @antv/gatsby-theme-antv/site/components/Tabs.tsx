import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Input, AutoComplete, Empty } from 'antd';
import { SelectProps } from 'antd/es/select';
import { useTranslation } from 'react-i18next';
import Icon, { SearchOutlined } from '@ant-design/icons';
import CollaspeAllSvg from '../images/collapse-all.svg';
import styles from './Tabs.module.less';

export interface CollapseDataProp {
  title?: string;
  show?: boolean;
  content?: string;
  children?: CollapseDataProp[];
  options: {
    require?: string;
    type?: string;
    default?: string;
  };
}

interface ShowTabsProps {
  examples?: boolean;
  API?: boolean;
  design?: boolean;
}

const Tabs: React.FC<{
  active: 'API' | 'design';
  showTabs: ShowTabsProps;
  examplesCount?: number;
  title?: string;
  updateActive: (val: 'API' | 'design') => void;
  updateOutsideActiveKeys: (val: string[]) => void;
  updateInsideActiveKeys: (val: string[]) => void;
  updateSearchQuery: (val: string) => void;
  updateCollapseData: (val: CollapseDataProp[]) => void;
  codeQuery: string;
  content?: CollapseDataProp[];
}> = ({
  active,
  showTabs = {} as ShowTabsProps,
  title,
  updateActive,
  updateOutsideActiveKeys,
  updateInsideActiveKeys,
  updateSearchQuery,
  updateCollapseData,
  codeQuery,
  content,
}) => {
  const [options, updateOptions] = useState<SelectProps<[]>['options']>([]);
  const [input, updateInput] = useState<string>('');
  const [isEmpty, updateIsEmpty] = useState<React.ReactNode>(null);
  const [list, updateList] = useState<Record<string, any>>({});

  const getOptionList = (
    nodes: CollapseDataProp[],
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
        if (node.children) getOptionList(node.children, result, 'inside', key);
      }
    });
    return result;
  };

  const showSearchResult = (keys: string[]) => {
    const outside: string[] = [];
    const inside: string[] = [];
    const showIndex: string[] = [];
    keys.forEach((key: string) => {
      const temp = key.split(':');
      if (temp[0]) {
        outside.push(temp[0]);
        showIndex.push(temp[0].split('-')[1]);
      }
      if (temp[1]) inside.push(temp[1]);
    });
    if (outside.length > 0) updateOutsideActiveKeys(outside);
    if (inside.length > 0) updateInsideActiveKeys(inside);
    if (showIndex.length > 0 && content) {
      content.forEach((node: any, index: number) => {
        const element = node;
        if (element.title && showIndex.indexOf(index.toString()) === -1) {
          element.show = false;
        }
      });
      updateCollapseData(content);
    }
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
            <span className={styles.resultNum}>{item[1].length}</span>
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

  const empty = <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

  const handleSearch = (value: string) => {
    updateInput(value);
    updateOptions(value ? searchResult() : []);
  };

  const collaspseALL = () => {
    updateOutsideActiveKeys([]);
    updateInsideActiveKeys([]);
  };

  const onSelect = (value: string) => {
    collaspseALL();
    showSearchResult(list[value]);
    updateSearchQuery(value);
  };

  const getSearchResult = (
    nodes: CollapseDataProp[],
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
        getSearchResult(node.children, query, result, 'inside', key);
    });
    return result;
  };

  const search = (value: string) => {
    if (!content) return;
    const pattern = new RegExp(
      "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]",
    );
    let query = '';
    for (let i = 0; i < value.length; i += 1) {
      query += value.substr(i, 1).replace(pattern, '');
    }
    const keys: string[] = [];
    if (query) {
      updateSearchQuery(query);
      getSearchResult(content, query, keys, 'outside');
    }
    if (keys.length > 0) {
      collaspseALL();
      showSearchResult(keys);
    } else {
      collaspseALL();
      updateIsEmpty(empty);
    }
  };

  const onPressEnter = (e: any) => {
    const { value } = e.target;
    search(value);
  };

  const clearSearch = () => {
    if (!content) return;
    updateIsEmpty(null);
    updateSearchQuery('');
    content.forEach((node: any) => {
      const element = node;
      element.show = true;
    });
    updateCollapseData(content);
    updateOutsideActiveKeys([]);
    updateInsideActiveKeys([]);
  };

  useEffect(() => {
    if (content) updateList(getOptionList(content, list, 'outside'));
  }, [content]);

  useEffect(() => {
    if (codeQuery) {
      clearSearch();
      updateInput(codeQuery);
      search(codeQuery);
    }
  }, [codeQuery]);

  useEffect(() => {
    if (!input) clearSearch();
  }, [input]);

  return (
    <>
      <ul className={styles.tabs}>
        <li
          className={classNames({
            [styles.active]: active === 'API',
            [styles.hidden]: showTabs.API === false,
          })}
        >
          <div onClick={() => updateActive('API')}>
            {hiddenTitleForDocsearch}
            API
          </div>
        </li>
        <li
          className={classNames({
            [styles.active]: active === 'design',
            [styles.hidden]: showTabs.design === false,
          })}
        >
          <div onClick={() => updateActive('design')}>
            {hiddenTitleForDocsearch}
            {t('设计指引')}
          </div>
        </li>
      </ul>
      {active === 'API' && (
        <div className={styles.tabExtra}>
          <div className={styles.tabSearch}>
            <AutoComplete
              className={styles.autoComplete}
              dropdownMatchSelectWidth
              options={options}
              value={input}
              onSelect={onSelect}
              allowClear
              filterOption
              backfill
              onSearch={handleSearch}
              notFoundContent={isEmpty}
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
