import React, { useState } from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { Layout as AntLayout, Menu, Icon, Tooltip, Affix } from 'antd';
import { groupBy } from 'lodash-es';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Article from '../components/Article';
import SEO from '../components/Seo';
import styles from './markdown.module.less';
import exampleStyles from './example.module.less';

const renderMenuItems = (edges: any[]) =>
  edges.map((edge: any) => {
    const {
      node: {
        frontmatter: { title },
        fields: { slug },
      },
    } = edge;
    if (slug.endsWith('/API') || slug.endsWith('/design')) {
      return null;
    }
    return (
      <Menu.Item key={slug}>
        <Link to={slug}>{title}</Link>
      </Menu.Item>
    );
  });

const shouldBeShown = (slug: string, path: string) => {
  const slugPieces = slug.split('/').slice(slug.split('/').indexOf('docs') + 1);
  const pathPieces = path.split('/').slice(slug.split('/').indexOf('docs') + 1);
  return slugPieces[0] === pathPieces[0];
};

const getMenuItemlocaleKey = (slug: string = '') => {
  const slugPieces = slug.split('/');
  const menuItemlocaleKey = slugPieces
    .slice(slugPieces.indexOf('docs') + 1)
    .filter(key => key)
    .join('/');
  return menuItemlocaleKey;
};

const getDocument = (docs: any[], slug: string = '') => {
  return docs.find(doc => doc.slug === slug) || {};
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
  pageContext,
}: {
  data: any;
  location: Location;
  pageContext: {
    prev: any;
    next: any;
    exampleSections: any;
  };
}) {
  const { markdownRemark, allMarkdownRemark, site } = data; // data.markdownRemark holds our post data
  const {
    frontmatter,
    html,
    tableOfContents,
    fields: { slug, readingTime },
    parent: { relativePath },
  } = markdownRemark;
  const { edges = [] } = allMarkdownRemark;
  const {
    siteMetadata: { docs, githubUrl },
    pathPrefix,
  } = site;
  const path = location.pathname.replace(pathPrefix, '');
  const { i18n } = useTranslation();
  const groupedEdges = groupBy(edges, ({ node: { fields: { slug } } }: any) =>
    slug
      .split('/')
      .slice(0, -1)
      .join('/'),
  );
  const [openKeys, setOpenKeys] = useState<string[]>(Object.keys(groupedEdges));
  const activeTab = location.hash.replace(/^#/, '') || 'examples';
  const setActiveTabWithHash = (tab: 'examples' | 'API' | 'design') => {
    navigate(`${location.pathname}#${tab}`);
  };
  const { exampleSections } = pageContext;
  return (
    <>
      <SEO title={frontmatter.title} lang={i18n.language} />
      <AntLayout style={{ background: '#fff' }} hasSider>
        <AntLayout.Sider width={280} theme="light">
          <Menu
            mode="inline"
            selectedKeys={[slug]}
            style={{ height: '100%' }}
            openKeys={openKeys}
            onOpenChange={openKeys => setOpenKeys(openKeys)}
          >
            {Object.keys(groupedEdges)
              .filter(key => key.startsWith(`/${i18n.language}/`))
              .sort((a: string, b: string) => {
                const aKey = getMenuItemlocaleKey(a);
                const bKey = getMenuItemlocaleKey(b);
                const aDoc = getDocument(docs, aKey);
                const bDoc = getDocument(docs, bKey);
                if (aDoc && bDoc) {
                  return aDoc.order - bDoc.order;
                }
                return 0;
              })
              .map(slug => {
                if (!shouldBeShown(slug, path)) {
                  return null;
                }
                const slugPieces = slug.split('/');
                if (slugPieces.length <= 4) {
                  return renderMenuItems(groupedEdges[slug]);
                } else {
                  const menuItemlocaleKey = getMenuItemlocaleKey(slug);
                  const doc = getDocument(docs, menuItemlocaleKey);
                  return (
                    <Menu.SubMenu
                      key={slug}
                      title={
                        doc && doc.title
                          ? doc.title[i18n.language]
                          : menuItemlocaleKey
                      }
                    >
                      {renderMenuItems(groupedEdges[slug])}
                    </Menu.SubMenu>
                  );
                }
              })}
          </Menu>
        </AntLayout.Sider>
        <Article className={styles.markdown}>
          <Affix>
            <div
              className={styles.toc}
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </Affix>
          <div className={styles.main}>
            <h1>
              {frontmatter.title}
              <Tooltip title="在 GitHub 上编辑">
                <a
                  href={`${githubUrl}/edit/master/${relativePath}`}
                  target="_blank"
                  className={styles.editOnGtiHubButton}
                >
                  <Icon type="edit" />
                </a>
              </Tooltip>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ul className={exampleStyles.tabs}>
              <li
                className={classNames({
                  [exampleStyles.active]: activeTab === 'examples',
                })}
                onClick={() => setActiveTabWithHash('examples')}
              >
                代码演示
              </li>
              <li
                className={classNames({
                  [exampleStyles.active]: activeTab === 'API',
                })}
                onClick={() => setActiveTabWithHash('API')}
              >
                API
              </li>
              <li
                className={classNames({
                  [exampleStyles.active]: activeTab === 'design',
                })}
                onClick={() => setActiveTabWithHash('design')}
              >
                设计指引
              </li>
            </ul>
            {exampleSections.examples && (
              <div
                style={{ display: activeTab === 'examples' ? 'block' : 'none' }}
              >
                {exampleSections.examples}
              </div>
            )}
            {exampleSections.API && (
              <div
                style={{ display: activeTab === 'API' ? 'block' : 'none' }}
                dangerouslySetInnerHTML={{
                  __html: exampleSections.API.node.html,
                }}
              />
            )}
            {exampleSections.design && (
              <div
                style={{ display: activeTab === 'design' ? 'block' : 'none' }}
                dangerouslySetInnerHTML={{
                  __html: exampleSections.design.node.html,
                }}
              />
            )}
          </div>
        </Article>
      </AntLayout>
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        githubUrl
        docs {
          slug
          title {
            zh
            en
          }
          order
        }
      }
      pathPrefix
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      tableOfContents
      fields {
        slug
        langKey
        readingTime {
          text
          time
        }
      }
      frontmatter {
        title
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
