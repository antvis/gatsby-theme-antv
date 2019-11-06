import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout as AntLayout, Menu, Icon, Tooltip, Affix } from 'antd';
import { groupBy } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import Article from '../components/Article';
import ReadingTime from '../components/ReadingTime';
import SEO from '../components/Seo';
import styles from './markdown.module.less';

const renderMenuItems = (edges: any[]) =>
  edges.map((edge: any) => {
    const {
      node: {
        frontmatter: { title },
        fields: { slug },
      },
    } = edge;
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

const getMenuItemLocaleKey = (slug: string = '') => {
  const slugPieces = slug.split('/');
  const menuItemLocaleKey = slugPieces
    .slice(slugPieces.indexOf('docs') + 1)
    .filter(key => key)
    .join('/');
  return menuItemLocaleKey;
};

const getDocument = (docs: any[], slug: string = '') => {
  return docs.find(doc => doc.slug === slug) || {};
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}: {
  data: any;
  location: Location;
  pageContext: {
    prev: any;
    next: any;
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
  const edgesInDocs = edges.filter((item: any) =>
    item.node.fields.slug.includes('/docs/'),
  );
  const {
    siteMetadata: { docs = [], githubUrl },
    pathPrefix,
  } = site;
  const pathWithoutPrefix = location.pathname.replace(
    new RegExp(`^${pathPrefix}`),
    '',
  );
  const { t, i18n } = useTranslation();
  const groupedEdges = groupBy(
    edgesInDocs,
    ({
      node: {
        fields: { slug },
      },
    }: any) =>
      slug
        .split('/')
        .slice(0, -1)
        .join('/'),
  );
  const [openKeys, setOpenKeys] = useState<string[]>(Object.keys(groupedEdges));
  return (
    <>
      <SEO title={frontmatter.title} lang={i18n.language} />
      <AntLayout
        style={{ background: '#fff' }}
        hasSider
        className={styles.layout}
      >
        <AntLayout.Sider width="auto" theme="light" className={styles.sider}>
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
                const aKey = getMenuItemLocaleKey(a);
                const bKey = getMenuItemLocaleKey(b);
                const aDoc = getDocument(docs, aKey);
                const bDoc = getDocument(docs, bKey);
                if (aDoc && bDoc) {
                  return aDoc.order - bDoc.order;
                }
                return 0;
              })
              .map(slug => {
                if (!shouldBeShown(slug, pathWithoutPrefix)) {
                  return null;
                }
                const slugPieces = slug.split('/');
                if (slugPieces.length <= 4) {
                  return renderMenuItems(groupedEdges[slug]);
                } else {
                  const menuItemLocaleKey = getMenuItemLocaleKey(slug);
                  const doc = getDocument(docs, menuItemLocaleKey);
                  return (
                    <Menu.SubMenu
                      key={slug}
                      title={
                        doc && doc.title
                          ? doc.title[i18n.language]
                          : menuItemLocaleKey
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
          <Affix offsetTop={8} target={() => document.body}>
            <div
              className={styles.toc}
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </Affix>
          <div className={styles.main}>
            <h1>
              {frontmatter.title}
              <Tooltip title={t('在 GitHub 上编辑')}>
                <a
                  href={`${githubUrl}/edit/master/${relativePath}`}
                  target="_blank"
                  className={styles.editOnGtiHubButton}
                >
                  <Icon type="edit" />
                </a>
              </Tooltip>
            </h1>
            <div className={styles.meta}>
              <ReadingTime readingTime={readingTime} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
