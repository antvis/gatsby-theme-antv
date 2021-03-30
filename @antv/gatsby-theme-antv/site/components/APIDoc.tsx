import React, { useState, useEffect } from 'react';
import { Collapse, Skeleton } from 'antd';
import Icon from '@ant-design/icons';
import Mark from 'mark.js';
import { useTranslation } from 'react-i18next';
import Tabs, { CollapseDataProp } from './Tabs';
import EmptySvg from '../images/empty.svg';

import styles from './APIDoc.module.less';
import docStyles from '../templates/markdown.module.less';

const { Panel } = Collapse;
interface APIDocProps {
  markdownRemark: any;
  githubUrl: string;
  relativePath: string;
  exampleSections: any;
  description: string;
  codeQuery: string;
  showAPISearch: boolean;
}

const APIDoc: React.FC<APIDocProps> = ({
  markdownRemark,
  exampleSections,
  codeQuery,
  description,
  showAPISearch,
}) => {
  const { t } = useTranslation();
  const [collapseData, updateCollapseData] = useState<CollapseDataProp[]>([]);
  const [searchQuery, updateSearchQuery] = useState<string>('');
  const { frontmatter } = markdownRemark;
  const [outsideActiveKeys, updateOutsideActiveKeys] = useState<string[]>([]);
  const [insideActiveKeys, updateInsideActiveKeys] = useState<string[]>([]);
  const [active, updateActive] = useState<'API' | 'design'>('API');

  const outsideHandleChange = (activeKey: any) => {
    updateOutsideActiveKeys(activeKey);
  };

  const insideHandleChange = (activeKey: any) => {
    updateInsideActiveKeys(activeKey);
  };

  const createApiStructure = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    let nodes = div.childNodes;
    if (nodes.length === 1 && nodes[0].nodeName === 'DIV') {
      // 当md中出现注释，会在最外层包一层div
      nodes = nodes[0].childNodes;
    }

    const result: any = [];
    let htmlList = [];
    let item = null;
    let depth = 0;
    let firstDepth = 0;

    const getHeading = (node: HTMLElement) => {
      if (/[hH]\d/.test(node.nodeName)) {
        return {
          depth: +node.nodeName.slice(1),
          name: node.innerText,
        };
      }
      return null;
    };

    const isExpandable = (level: number) => {
      if (firstDepth === 0) {
        // 第一个标题能展开
        return true;
      }
      // 最多展开2级
      return level < firstDepth + 2;
    };

    const getDescription = (node: HTMLElement) => {
      const childs = node.childNodes;
      if (childs.length > 0 && childs[0]) {
        const first = childs[0];
        if (first.nodeName === 'DESCRIPTION') {
          const res: {
            require?: string;
            type?: string;
            default?: string;
          } = {};
          first.childNodes.forEach((c) => {
            const text = (c as HTMLElement).innerText;
            if (c.nodeName === 'STRONG') {
              res.require = text;
            } else if (c.nodeName === 'EM') {
              if (text !== 'default:') {
                res.type = text;
              }
            } else if (c.nodeName === 'CODE') {
              res.default = text;
            }
          });
          return res;
        }
      }
      return null;
    };

    const recordResult = (node: any, level: number) => {
      if (level === firstDepth) {
        result.push(node);
      }
      if (level === firstDepth + 1 && result.length) {
        result[result.length - 1].children.push(node);
      }
    };
    for (let i = 0, len = nodes.length; i < len; i += 1) {
      const heading = getHeading(nodes[i] as HTMLElement);
      if (heading && isExpandable(heading.depth)) {
        item = {
          title: heading.name,
          options: {},
          children: [],
          content: '',
        };
        depth = heading.depth;
        firstDepth = firstDepth || depth;
        htmlList = [];
      } else {
        htmlList.push((nodes[i] as HTMLElement).outerHTML);
        const des = getDescription(nodes[i] as HTMLElement);
        if (item && des) {
          item.options = des;
        }
      }
      const isLast = i === len - 1;
      let isBoundary = false;
      if (!isLast) {
        const nextHeading = getHeading(nodes[i + 1] as HTMLElement);
        isBoundary = !!nextHeading && isExpandable(nextHeading.depth);
      }
      if (item && (isLast || isBoundary)) {
        item.content = htmlList.length > 0 ? htmlList.join('') : '';
        recordResult(item, depth);
      }
    }
    return result;
  };

  useEffect(() => {
    if (!exampleSections?.API) {
      updateActive('design');
      return;
    }
    const initData = createApiStructure(exampleSections?.API?.node?.html);
    initData.forEach((node: { title: string; show: boolean }) => {
      const element = node;
      if (element.title) {
        element.show = true;
      }
    });
    const defaultKey = initData[0]?.title;
    if (defaultKey) updateOutsideActiveKeys([`outside-${defaultKey}-0`]);

    updateCollapseData(initData);
    if (initData.length <= 0) {
      updateActive('design');
    }
  }, [exampleSections]);

  useEffect(() => {
    if (!collapseData) return;
    const context = document.getElementById('apiStructure');
    if (context) {
      const instance = new Mark(context);
      if (searchQuery) {
        const reg = new RegExp(searchQuery, 'gi');
        instance.markRegExp(reg);
      } else {
        instance.unmark();
      }
    }
  }, [searchQuery]);

  const genExtra = (options: {
    require?: string;
    type?: string;
    default?: string;
  }) => (
    <>
      {options?.require && (
        <span className={styles.require}>{options?.require}</span>
      )}
      {options?.type && <span className={styles.type}>{options?.type}</span>}
      {options?.default && (
        <span className={styles.default}>{options?.default}</span>
      )}
    </>
  );

  const empty = (
    <div className={styles.emptyContainer}>
      <div className={styles.empty}>
        <Icon component={EmptySvg} />
        <div>{t('正在施工中...')}</div>
      </div>
    </div>
  );

  const renderCollapse = () => {
    return (
      <div id="apiStructure" className={docStyles.markdown}>
        <Collapse
          className={styles.rootCollapse}
          activeKey={outsideActiveKeys}
          onChange={outsideHandleChange}
        >
          {collapseData.map((data: CollapseDataProp, i: number) => (
            <Panel
              key={`outside-${data.title}-${i}`}
              header={data.title}
              className={data.show ? styles.rootItem : styles.hidden}
            >
              {data.content && (
                <div
                  /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{
                    __html: data.content,
                  }}
                />
              )}
              {data?.children?.map((child: CollapseDataProp, index: number) => (
                <Collapse
                  bordered={false}
                  activeKey={insideActiveKeys}
                  onChange={insideHandleChange}
                  key={`collapse-${child.title}-${index}`}
                >
                  <Panel
                    header={child.title}
                    key={`inside-${child.title}-${i}`}
                    extra={genExtra(child.options)}
                  >
                    {child.content && (
                      <div
                        /* eslint-disable-next-line react/no-danger */
                        dangerouslySetInnerHTML={{
                          __html: child.content,
                        }}
                      />
                    )}
                  </Panel>
                </Collapse>
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  };

  return (
    <div className={styles.docPane}>
      <Tabs
        title={frontmatter.title}
        active={active}
        updateActive={updateActive}
        updateOutsideActiveKeys={updateOutsideActiveKeys}
        updateInsideActiveKeys={updateInsideActiveKeys}
        updateSearchQuery={updateSearchQuery}
        updateCollapseData={updateCollapseData}
        content={collapseData}
        codeQuery={codeQuery}
        showAPISearch={showAPISearch}
      />
      {!exampleSections ? (
        <Skeleton className={styles.skeleton} paragraph={{ rows: 16 }} />
      ) : (
        <div className={styles.docContent}>
          {active === 'API' && collapseData.length > 0 && renderCollapse()}
          {collapseData.length <= 0 && active === 'API' && empty}
          {active === 'design' ? (
            <div className={styles.designContent}>
              <div
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <div
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{
                  __html: exampleSections?.design?.node?.html,
                }}
              />
              {!exampleSections?.design?.node?.html && !description && empty}{' '}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default APIDoc;
