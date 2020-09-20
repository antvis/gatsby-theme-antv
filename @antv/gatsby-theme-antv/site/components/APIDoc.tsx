import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip, Collapse } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Mark from 'mark.js';
import { getGithubSourceUrl } from '../templates/document';
import Tabs from './Tabs';
import CollapseIcon from './CollapseIcon';
import styles from './APIDoc.module.less';

const { Panel } = Collapse;

const APIDoc = ({
  slug,
  pathWithoutTrailingSlashes,
  relativePath,
  githubUrl,
  frontmatter,
  exampleSections,
  renderAst,
  htmlAst,
}: {
  slug: string;
  pathWithoutTrailingSlashes: string;
  relativePath: string;
  githubUrl: string;
  frontmatter: { title: string };
  exampleSections: any;
  renderAst: Function;
  htmlAst: any;
}) => {
  const { t } = useTranslation();
  const [collapseData, updateCollapseData] = useState<string[]>([]);
  const [searchQuery, updateSearchQuery] = useState<string>('');
  const [r0ActiveKeys, updateR0ActiveKeys] = useState<string[]>(['r0-0']);
  const [r2ActiveKeys, updateR2ActiveKeys] = useState<string[]>(['r2-0']);
  let activeTab = 'API' as 'API' | 'design';
  let exampleRootSlug = slug;
  if (/\/examples\/.*\/API$/.test(pathWithoutTrailingSlashes)) {
    activeTab = 'API';
    exampleRootSlug = exampleRootSlug.replace(/\/API$/, '');
  } else if (/\/examples\/.*\/design$/.test(pathWithoutTrailingSlashes)) {
    activeTab = 'design';
    exampleRootSlug = exampleRootSlug.replace(/\/design$/, '');
  }

  const r0HandleChange = (activeKey: any) => {
    updateR0ActiveKeys(activeKey);
  };

  const r2HandleChange = (activeKey: any) => {
    updateR2ActiveKeys(activeKey);
  };

  useEffect(() => {
    if (!exampleSections?.API) return;
    const initData = exampleSections?.API.structure[0].children;
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
          activeKey={r0ActiveKeys}
          onChange={r0HandleChange}
        >
          {collapseData.map((node: any, key: any) => (
            <Panel
              key={`r0-${key}`}
              header={node.title}
              className={node.show ? styles.rootItem : styles.hidden}
            >
              {node.children.map((child: any, i: number) => (
                <Collapse
                  bordered={false}
                  activeKey={r2ActiveKeys}
                  onChange={r2HandleChange}
                  key={`r1-${i}`}
                >
                  <Panel
                    header={child.title}
                    key={`r2-${i}`}
                    extra={genExtra(child.options)}
                  >
                    {renderAst(child.content)}
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
        slug={exampleRootSlug}
        title={frontmatter.title}
        active={activeTab}
        updateR0ActiveKeys={updateR0ActiveKeys}
        updateR2ActiveKeys={updateR2ActiveKeys}
        updateSearchQuery={updateSearchQuery}
        updateCollapseData={updateCollapseData}
        showTabs={{
          API: !!exampleSections.API,
          design: !!exampleSections.design,
        }}
        content={collapseData}
      />
      <div className={styles.docContent}>
        {exampleSections.API && activeTab === 'API' && collapseData.length > 0
          ? renderCollapse()
          : null}
        {exampleSections.design && activeTab === 'design' ? (
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
            <div>{renderAst(htmlAst)}</div>
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
