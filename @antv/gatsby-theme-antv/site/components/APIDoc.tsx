import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip, Collapse } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Mark from 'mark.js';
import { getGithubSourceUrl } from '../templates/document';
import Tabs, { CollapseDataProp } from './Tabs';
import CollapseIcon from './CollapseIcon';
import styles from './APIDoc.module.less';

const { Panel } = Collapse;

interface APIDocProps {
  markdownRemark: any;
  githubUrl: string;
  relativePath: string;
  exampleSections: any;
  description: string;
  codeQuery: string;
}

const APIDoc: React.FC<APIDocProps> = ({
  markdownRemark,
  githubUrl,
  relativePath,
  exampleSections,
  codeQuery,
  description,
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
    if (!exampleSections?.API) return;
    const initData = createApiStructure(exampleSections.API.node.html);
    initData.forEach((node: { title: string; show: boolean }) => {
      const element = node;
      if (element.title) {
        element.show = true;
      }
    });
    updateCollapseData(initData);
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

  const renderCollapse = () => {
    return (
      <div id="apiStructure">
        <Collapse
          expandIcon={({ isActive }) => (
            <CollapseIcon rotate={isActive ? 90 : 0} type="caret-right" />
          )}
          className={styles.rootCollapse}
          activeKey={outsideActiveKeys}
          onChange={outsideHandleChange}
        >
          {collapseData.map((data: CollapseDataProp) => (
            <Panel
              key={`outside-${data.title}`}
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
                    key={`inside-${child.title}`}
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
        showTabs={{
          API: !!exampleSections.API,
          design: !!exampleSections.design,
        }}
        content={collapseData}
        codeQuery={codeQuery}
      />
      <div className={styles.docContent}>
        {exampleSections.API && active === 'API' && collapseData.length > 0
          ? renderCollapse()
          : null}
        {exampleSections.design && active === 'design' ? (
          <div className={styles.designContent}>
            <h1 className={styles.demoTtile}>
              {frontmatter.title}
              <Tooltip title={t('在 GitHub 上编辑')}>
                <a
                  href={getGithubSourceUrl({
                    githubUrl,
                    relativePath,
                    prefix: 'examples',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.editOnGtiHubButton}
                >
                  <EditOutlined />
                </a>
              </Tooltip>
            </h1>
            <div
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
            <div
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{
                __html: exampleSections.design.node.html,
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default APIDoc;
