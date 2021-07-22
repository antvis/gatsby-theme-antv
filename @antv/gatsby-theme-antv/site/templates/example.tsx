import React, { useState, useEffect, useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout as AntLayout, Anchor, Affix, BackTop, Menu, Badge } from 'antd';
import {
  createFromIconfontCN,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { groupBy, debounce, each, filter, size } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import Drawer from 'rc-drawer';
import { useMedia } from 'react-use';
import Article from '../components/Article';
import SEO from '../components/Seo';
import PlayGround from '../components/PlayGround';
import NavigatorBanner from '../components/NavigatorBanner';
import Announcement from '../components/Announcement';
import { usePrevAndNext } from '../hooks';
import styles from './markdown.module.less';

const { SubMenu } = Menu;
const { Link: AnchorLink } = Anchor;

/** 是否为 Examples 图表示例的首页 */
let gallery = false;

const MenuIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_470089_9m0keqj54r.js', // generated by iconfont.cn
});

const BANNER_LOCALSTORAGE_KEY = 'antv_gallery_banner';

const renderAnchorItems = (edges: any[]) =>
  edges
    .filter((edge: any) => {
      const {
        node: {
          fields: { slug },
        },
      } = edge;
      if (
        slug.endsWith('/API') ||
        slug.endsWith('/design') ||
        slug.endsWith('/gallery')
      ) {
        return false;
      }
      return true;
    })
    .sort((a: any, b: any) => {
      const {
        node: {
          frontmatter: { order: aOrder },
        },
      } = a;
      const {
        node: {
          frontmatter: { order: bOrder },
        },
      } = b;
      return aOrder - bOrder;
    })
    .map((edge: any) => {
      const {
        node: {
          frontmatter: { title, icon },
          fields: { slug },
        },
      } = edge;
      return (
        <Menu.Item key={slug}>
          <AnchorLink
            href={`#category-${title.replace(/\s/g, '')}`}
            title={
              <div>
                {icon && (
                  <MenuIcon className={styles.menuIcon} type={`icon-${icon}`} />
                )}
                <span>{title}</span>
              </div>
            }
          />
        </Menu.Item>
      );
    });
const getMenuItemLocaleKey = (slug = '') => {
  const slugPieces = slug.split('/');
  const menuItemLocaleKey = slugPieces
    .slice(slugPieces.indexOf('examples') + 1)
    .filter((key) => key)
    .join('/');
  return menuItemLocaleKey;
};

const getExampleOrder = ({
  groupedEdgeKey = '',
  examples = [],
  groupedEdges = {},
}: {
  groupedEdgeKey: string;
  examples: any[];
  groupedEdges: {
    [key: string]: any[];
  };
}): number => {
  const key = getMenuItemLocaleKey(groupedEdgeKey);
  if (examples.find((item) => item.slug === key)) {
    return (examples.findIndex((item) => item.slug === key) || 0) + 100;
  }
  if (!groupedEdges[groupedEdgeKey] && !groupedEdges[groupedEdgeKey].length) {
    return 0;
  }
  return groupedEdges[groupedEdgeKey][0].node.frontmatter.order || 0;
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
  pageContext,
}: {
  data: any;
  location: Location;
  pageContext: {
    exampleSections: any;
    allDemos?: any[];
  };
}): React.ReactNode {
  const { allMarkdownRemark, site } = data; // data.markdownRemark holds our post data

  const { edges = [] } = allMarkdownRemark;
  const edgesInExamples = edges;
  const pathWithoutTrailingSlashes = location.pathname.replace(/\/$/, '');
  const { node: markdownRemark } =
    edgesInExamples.find((edge: any) => {
      const {
        fields: { slug },
      } = edge.node;
      if (
        /\/examples\/.*\/API$/.test(pathWithoutTrailingSlashes) ||
        /\/examples\/.*\/design$/.test(pathWithoutTrailingSlashes)
      ) {
        return pathWithoutTrailingSlashes.indexOf(slug) >= 0;
      }
      return (
        pathWithoutTrailingSlashes === slug ||
        pathWithoutTrailingSlashes.endsWith(slug)
      );
    }) || {};
  if (!markdownRemark) {
    return null;
  }

  const { frontmatter } = markdownRemark;
  const {
    siteMetadata: { examples = [], galleryMenuCloseAll = false },
  } = site;

  const { t, i18n } = useTranslation();

  const groupedEdges = groupBy(
    edgesInExamples,
    ({
      node: {
        fields: { slug: slugString },
      },
    }: any) => {
      // API.md and deisgn.md
      if (slugString.endsWith('/API') || slugString.endsWith('/design')) {
        return slugString.split('/').slice(0, -2).join('/');
      }
      // index.md
      return slugString.split('/').slice(0, -1).join('/');
    },
  );

  const { exampleSections = {}, allDemos = [] } = pageContext;

  const [prev, next] = usePrevAndNext();

  // 获取 demo 的 Category 分类
  const getDemoCategory = (demo: any, lang = i18n.language) => {
    if (!demo.postFrontmatter || !demo.postFrontmatter[lang]) {
      return 'OTHER';
    }
    return demo.postFrontmatter[lang].title;
  };

  const allDemosInCategory = groupBy(allDemos || [], getDemoCategory);

  const Categories = Object.keys(allDemosInCategory).sort(
    (a: string, b: string) => {
      if (a === 'OTHER') {
        return -1;
      }
      if (b === 'OTHER') {
        return 1;
      }
      return (
        allDemosInCategory[a][0].postFrontmatter[i18n.language].order -
        allDemosInCategory[b][0].postFrontmatter[i18n.language].order
      );
    },
  );

  const [openKeys, setOpenKeys] = useState<string[]>(() =>
    // 是否默认收起所有 sub menu
    galleryMenuCloseAll ? [] : Object.keys(groupedEdges),
  );
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onAnchorLinkChange = debounce((currentActiveLink: string) => {
    let currentSlug = '';
    edges.forEach((edge: any) => {
      const {
        node: {
          frontmatter: { title },
          fields: { slug },
        },
      } = edge;
      if (`#category-${title.replace(/\s/g, '')}` === currentActiveLink) {
        currentSlug = slug;
      }
    });
    setSelectedKeys([currentSlug]);
    if (currentActiveLink) {
      const link = document.querySelector(`a[href='${currentActiveLink}']`);
      if (link) {
        const anchor = link?.parentNode as Element;
        anchor.scrollIntoView({
          block: 'center',
        });
      }
    }
  }, 300);

  // 提取出筛选 和 排序的方法 好在获取treeData 的时候使用
  const groupedEdgesDataEdit = Object.keys(groupedEdges)
    .filter((key) => key.startsWith(`/${i18n.language}/`))
    .sort((a: string, b: string) => {
      const aOrder = getExampleOrder({
        groupedEdgeKey: a,
        examples,
        groupedEdges,
      });
      const bOrder = getExampleOrder({
        groupedEdgeKey: b,
        examples,
        groupedEdges,
      });
      return aOrder - bOrder;
    });

  const menu = (
    <Anchor className={styles.galleryAnchor} onChange={onAnchorLinkChange}>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        style={{ height: '100%' }}
        openKeys={openKeys}
        onOpenChange={(currentOpenKeys) =>
          setOpenKeys(currentOpenKeys as string[])
        }
        forceSubMenuRender
      >
        {groupedEdgesDataEdit.map((slugString) => {
          const slugPieces = slugString.split('/');
          if (slugPieces.length <= 3) {
            return renderAnchorItems(groupedEdges[slugString]);
          }
          const menuItemLocaleKey = getMenuItemLocaleKey(slugString);
          const doc =
            examples.find((item: any) => item.slug === menuItemLocaleKey) || {};
          return (
            <SubMenu
              key={slugString}
              title={
                <div>
                  {doc.icon && (
                    <MenuIcon
                      className={styles.menuIcon}
                      type={`icon-${doc.icon}`}
                    />
                  )}
                  <span>
                    {doc && doc.title
                      ? doc.title[i18n.language]
                      : menuItemLocaleKey}
                  </span>
                </div>
              }
            >
              {renderAnchorItems(groupedEdges[slugString])}
            </SubMenu>
          );
        })}
      </Menu>
    </Anchor>
  );

  const getTreeData = () =>
    groupedEdgesDataEdit.map((slugString) => {
      const menuItemLocaleKey = getMenuItemLocaleKey(slugString);
      const doc =
        examples.find((item: any) => item.slug === menuItemLocaleKey) || {};

      return {
        title: doc && doc.title ? doc.title[i18n.language] : menuItemLocaleKey,
        value: slugString,
        icon: doc.icon,
        children: groupedEdges[slugString].filter((edge) => {
          const {
            node: {
              fields: { slug },
            },
          } = edge;
          if (
            slug.endsWith('/API') ||
            slug.endsWith('/design') ||
            slug.endsWith('/gallery')
          ) {
            return false;
          }
          return true;
        }),
      };
    });

  const isWide = useMedia('(min-width: 767.99px)', true);
  const [drawOpen, setDrawOpen] = useState(false);
  const menuSider = (
    <Affix
      offsetTop={0}
      className={styles.affix}
      style={{ height: isWide ? '100vh' : 'inherit' }}
    >
      {isWide ? (
        <AntLayout.Sider width="auto" theme="light" className={styles.sider}>
          {menu}
        </AntLayout.Sider>
      ) : (
        <Drawer
          handler={
            drawOpen ? (
              <MenuFoldOutlined className={styles.menuSwitch} />
            ) : (
              <MenuUnfoldOutlined className={styles.menuSwitch} />
            )
          }
          wrapperClassName={styles.menuDrawer}
          onChange={(open) => setDrawOpen(!!open)}
          width={280}
        >
          {menu}
        </Drawer>
      )}
    </Affix>
  );

  type NewDemo = {
    title: string;
    id: string;
    category: string;
  };

  /** 获取上新的 demo. 直接用英文 title 作为 id */
  const demosOnTheNew = useMemo((): Array<NewDemo> => {
    const result: NewDemo[] = [];

    each(allDemosInCategory, (categoryDemos, category) => {
      const newDemos = filter(categoryDemos, (d) => d.new);
      // 大于4个新增 demo 或全部新增，则直接使用 category 作为代替
      if (
        size(newDemos) > 6 ||
        (size(newDemos) && size(newDemos) === size(categoryDemos))
      ) {
        result.push({
          title: category,
          id: getDemoCategory(newDemos[0], 'en'),
          category,
        });
      } else {
        each(newDemos, (demo) =>
          result.push({
            title: demo.title[i18n.language],
            id: demo.title.en,
            category: getDemoCategory(demo),
          }),
        );
      }
    });
    return result;
  }, [allDemosInCategory, allDemos, i18n.language]);

  /** 公告 id */
  const bannerId = useMemo(() => {
    return demosOnTheNew.map((d) => d.id).join('-');
  }, [demosOnTheNew]);

  const galleryPageContent = (
    <div className={styles.gallery}>
      <div className={styles.galleryContent}>
        <div
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{
            __html: exampleSections.description,
          }}
        />
        {/* 是否展示上新公告  */}
        {demosOnTheNew.length > 0 && (
          <Announcement
            message={
              <div>
                {t('上新啦，点击直达：')}
                {demosOnTheNew.map((demo, idx) => (
                  <span key={demo.title}>
                    {idx !== 0 && '，'}
                    <a href={`#category-${demo.category.replace(/\s/g, '')}`}>
                      {demo.title}
                    </a>
                  </span>
                ))}
              </div>
            }
            localStorageId={BANNER_LOCALSTORAGE_KEY}
            bannerId={bannerId}
          />
        )}
        {Categories.map((category: string, i) => (
          <div key={i}>
            {category !== 'OTHER' && (
              <h2 id={`category-${category.replace(/\s/g, '')}`}>{category}</h2>
            )}
            <ul className={styles.galleryList}>
              {allDemosInCategory[category]
                .sort((a, b) => {
                  return (a.order || -1) - (b.order || -1);
                })
                .map((demo) => {
                  let cardTitle;
                  if (typeof demo.title === 'string') {
                    cardTitle = demo.title;
                  } else {
                    cardTitle = demo.title
                      ? demo.title[i18n.language]
                      : demo.filename;
                  }
                  const demoSlug = demo.relativePath.replace(
                    /\/demo\/(.*)\..*/,
                    (_: string, filename: string) => {
                      return `#${filename}`;
                    },
                  );
                  const card = (
                    <div>
                      <img
                        src={
                          demo.screenshot ||
                          'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png'
                        }
                        alt={cardTitle}
                      />
                    </div>
                  );
                  return (
                    <li
                      className={styles.galleryCard}
                      key={demo.relativePath}
                      title={cardTitle}
                    >
                      <Link
                        className={styles.galleryCardLink}
                        to={`/${i18n.language}/examples/${demoSlug}`}
                      >
                        {demo.new ? (
                          <Badge.Ribbon
                            text="new"
                            className={styles.customRibbon}
                          >
                            {card}
                          </Badge.Ribbon>
                        ) : (
                          card
                        )}
                        <h4>{cardTitle}</h4>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const exmaplePageContent = (
    <div className={styles.exampleContent}>
      {exampleSections.examples && exampleSections.examples.length > 0 && (
        <PlayGround
          allDemos={allDemosInCategory}
          categories={Categories}
          examples={allDemos}
          exampleSections={exampleSections}
          location={location}
          markdownRemark={markdownRemark}
          treeData={getTreeData()}
        />
      )}
    </div>
  );

  // 判断当前所在页面
  useEffect(() => {
    if (pathWithoutTrailingSlashes.endsWith('/examples/gallery')) {
      gallery = true;
    } else {
      gallery = false;
    }

    return () => {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    };
  }, [pathWithoutTrailingSlashes]);
  return (
    <>
      <SEO title={frontmatter.title} lang={i18n.language} />
      <AntLayout
        style={{ background: '#fff' }}
        hasSider
        className={styles.layout}
      >
        {gallery ? menuSider : null}

        {gallery ? (
          <Article className={styles.markdown}>
            <div className={styles.main} style={{ width: '100%' }}>
              {galleryPageContent}
              <div>
                <NavigatorBanner type="prev" post={prev} />
                <NavigatorBanner type="next" post={next} />
              </div>
              <BackTop style={{ right: 32 }}>
                <div className={styles.backTop}>
                  <VerticalAlignTopOutlined />
                </div>
              </BackTop>
            </div>
          </Article>
        ) : (
          <div className={styles.exampleLayout}>{exmaplePageContent}</div>
        )}
      </AntLayout>
    </>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        galleryMenuCloseAll
        examples {
          slug
          icon
          title {
            zh
            en
          }
        }
        playground {
          container
          playgroundDidMount
          playgroundWillUnmount
          dependencies
          devDependencies
          htmlCodeTemplate
        }
      }
      pathPrefix
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "//examples//" } } }
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
            icon
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`;
