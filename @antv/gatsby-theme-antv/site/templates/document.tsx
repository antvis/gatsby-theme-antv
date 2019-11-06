import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout as AntLayout, Menu, Icon, Tooltip, Affix } from 'antd';
import { groupBy } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import Article from '../components/Article';
import ReadingTime from '../components/ReadingTime';
import SEO from '../components/Seo';
import styles from './markdown.module.less';

const shouldBeShown = (slug: string, path: string, lang: string) => {
  if (!slug.startsWith(`/${lang}/`)) {
    return false;
  }
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

const isSlugFirstLevelMenuItem = (slug: string = '') =>
  slug.split('/').length <= 4;

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

  interface MenuData {
    type: 'SubMenu' | 'Item';
    title: string;
    slug?: string;
    order?: number;
    children?: MenuData[];
  }

  const getMenuData = () => {
    const results = [] as MenuData[];
    Object.keys(groupedEdges)
      .filter(key => shouldBeShown(key, pathWithoutPrefix, i18n.language))
      .forEach(key => {
        const edges = groupedEdges[key];
        if (isSlugFirstLevelMenuItem(key)) {
          edges.forEach(edge => {
            const {
              node: {
                frontmatter: { title, order },
                fields: { slug },
              },
            } = edge;
            results.push({
              type: 'Item',
              slug,
              title,
              order,
            });
          });
        } else {
          const categroyKey = getMenuItemLocaleKey(key);
          const categroy = getDocument(docs, categroyKey);
          results.push({
            type: 'SubMenu',
            title:
              categroy.title && categroy.title[i18n.language]
                ? categroy.title[i18n.language]
                : categroyKey,
            order: categroy.order || 0,
            children: edges.map(edge => {
              const {
                node: {
                  frontmatter: { title, order },
                  fields: { slug },
                },
              } = edge;
              return {
                type: 'Item',
                slug,
                title,
                order,
              };
            }),
          });
        }
      });
    return results;
  };

  const renderMenu = () => {
    console.log(getMenuData());
    return null;
  };

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
            {renderMenu()}
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
            order
          }
        }
      }
    }
  }
`;
