import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import {
  EditOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VerticalAlignTopOutlined,
  CaretDownOutlined,
  CaretRightOutlined,
} from '@ant-design/icons';
import {
  Layout as AntLayout,
  Menu,
  Tooltip,
  Affix,
  Anchor,
  BackTop,
} from 'antd';
import { groupBy, debounce } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import Drawer from 'rc-drawer';
import { useMedia } from 'react-use';
import RehypeReact from 'rehype-react';
import Swatch from '../components/Swatch';
import Article from '../components/Article';
import ReadingTime from '../components/ReadingTime';
import NavigatorBanner from '../components/NavigatorBanner';
import SEO from '../components/Seo';
import CustomTag from '../components/CustomTag';
import MdPlayground from '../components/MdPlayground';
import Contributors from '../components/Contributors';
import { usePrevAndNext } from '../hooks';
import { capitalize } from '../utils';
import styles from './markdown.module.less';

const { Link: AnchorLink } = Anchor;

enum AnchorLinkStatus {
  NONE = 'none',
  EXPAND = 'expand',
  FLOD = 'flod',
}
interface AnchorLinkAttr {
  href: string;
  title: string;
  children: any;
  status: AnchorLinkStatus;
}

const shouldBeShown = (slug: string, path: string, lang: string) => {
  if (!slug.startsWith(`/${lang}/`)) {
    return false;
  }
  const slugPieces = slug.split('/').slice(slug.split('/').indexOf('docs') + 1);
  const pathPieces = path.split('/').slice(slug.split('/').indexOf('docs') + 1);
  return slugPieces[0] === pathPieces[0];
};

const getMenuItemLocaleKey = (slug = '') => {
  const slugPieces = slug.split('/');
  const menuItemLocaleKey = slugPieces
    .slice(slugPieces.indexOf('docs') + 1)
    .filter((key) => key)
    .join('/');
  return menuItemLocaleKey;
};

const getDocument = (docs: any[], slug = '', level: number) => {
  if (slug.split('/').length !== level + 2) {
    return;
  }
  return docs.find((doc) => doc.slug === slug);
};

const getAnchorLinks = (tableOfContents: string) => {
  // https://github.com/gatsbyjs/gatsby/issues/19487
  // Deploying to netlify : error "document" is not available during server side rendering
  if (typeof window === 'undefined' || !window.document) {
    return [];
  }
  const temp = document.createElement('div');
  temp.innerHTML = tableOfContents;
  const nodes = temp.childNodes;

  const parseUl = (node: HTMLElement) => {
    if (!node) {
      return [];
    }
    const items = node.childNodes;
    const result = [];

    for (let i = 0, len = items.length; i < len; i += 1) {
      const item = items[i] as HTMLElement;
      if (item.tagName === 'LI') {
        const link: any = {};
        const childs = item.childNodes as NodeListOf<HTMLElement>;
        childs.forEach((child: HTMLElement) => {
          if (child.tagName === 'A') {
            link.href = decodeURIComponent((child as HTMLAnchorElement).hash);
            link.title = child.innerText;
          } else if (child.tagName === 'P') {
            link.href = decodeURIComponent(
              (child.childNodes[0] as HTMLAnchorElement).hash,
            );
            link.title = (child.childNodes[0] as HTMLElement).innerText;
          } else if (child.tagName === 'UL') {
            link.children = parseUl(child);
          }
        });
        link.status = link.children
          ? AnchorLinkStatus.EXPAND
          : AnchorLinkStatus.NONE;
        result.push(link);
      }
    }

    return result;
  };
  return parseUl(nodes[0] as HTMLElement);
};

interface MenuData {
  type: 'SubMenu' | 'Item';
  title: string;
  slug: string;
  order?: number;
  children?: MenuData[];
}

const getMenuData = ({ groupedEdges, language, docs = [], level = 0 }: any) => {
  const results = [] as MenuData[];
  Object.keys(groupedEdges).forEach((key: string) => {
    const edges = groupedEdges[key] || [];
    const categoryKey = getMenuItemLocaleKey(key);
    const category = getDocument(docs, categoryKey, level);
    if (!category) {
      if (categoryKey.split('/').length !== level + 1) {
        return;
      }
      edges.forEach((edge: any) => {
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
      const subGroupedEdges = {} as any;
      Object.keys(groupedEdges).forEach((item: string) => {
        if (item.startsWith(key)) {
          subGroupedEdges[item] = groupedEdges[item];
        }
      });
      results.push({
        type: 'SubMenu',
        title:
          category.title && category.title[language]
            ? category.title[language]
            : categoryKey,
        slug: key,
        order: category.order || 0,
        children: getMenuData({
          groupedEdges: subGroupedEdges,
          language,
          docs,
          level: level + 1,
        }),
      });
    }
  });
  return results.sort((a: any, b: any) => a.order - b.order);
};

const renderMenu = (menuData: MenuData[]) =>
  menuData.map((item: MenuData) => {
    if (item.type === 'Item') {
      return (
        <Menu.Item key={item.slug}>
          <Link to={item.slug}>{item.title}</Link>
        </Menu.Item>
      );
    }
    if (item.type === 'SubMenu') {
      return (
        item.children &&
        item.children.length > 0 && (
          <Menu.SubMenu key={item.slug} title={capitalize(item.title)}>
            {renderMenu(item.children)}
          </Menu.SubMenu>
        )
      );
    }
    return null;
  });

export const getGithubSourceUrl = ({
  githubUrl,
  relativePath,
  prefix,
}: {
  githubUrl: string;
  relativePath: string;
  prefix: string;
}): string => {
  // https://github.com/antvis/x6/tree/master/packages/x6-sites
  if (githubUrl.includes('/tree/master/')) {
    return `${githubUrl.replace(
      '/tree/master/',
      '/edit/master/',
    )}/${prefix}/${relativePath}`;
  }
  return `${githubUrl}/edit/master/${prefix}/${relativePath}`;
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
  pageContext,
}: {
  data: any;
  location: Location;
  pageContext: {
    examples: any;
  };
}): React.ReactNode {
  const [prev, next] = usePrevAndNext();
  const { markdownRemark, allMarkdownRemark, site } = data; // data.markdownRemark holds our post data
  const { examples = [] } = pageContext;
  if (!markdownRemark) {
    return null;
  }
  const {
    frontmatter,
    htmlAst,
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
        fields: { slug: slugString },
      },
    }: any) => slugString.split('/').slice(0, -1).join('/'),
  );

  const filterGroupedEdges = {} as any;
  Object.keys(groupedEdges)
    .filter((key) => shouldBeShown(key, pathWithoutPrefix, i18n.language))
    .forEach((key: string) => {
      filterGroupedEdges[key] = groupedEdges[key];
    });

  const [openKeys, setOpenKeys] = useState<string[]>(
    Object.keys(filterGroupedEdges).filter((key) => slug.startsWith(key)),
  );

  const menuData = getMenuData({
    groupedEdges: filterGroupedEdges,
    language: i18n.language,
    docs,
  });

  const menu = (
    <Menu
      mode="inline"
      selectedKeys={[slug]}
      style={{ height: '100%' }}
      openKeys={openKeys}
      onOpenChange={(currentOpenKeys) =>
        setOpenKeys(currentOpenKeys as string[])
      }
      inlineIndent={16}
      forceSubMenuRender
    >
      {renderMenu(menuData)}
    </Menu>
  );

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

  const Playground = (props: any) => (
    <MdPlayground examples={examples} {...props} />
  );

  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      swatch: Swatch,
      tag: CustomTag,
      playground: Playground,
    },
  }).Compiler;

  const [anchorLinks, setAnchorLinks] = useState(() =>
    getAnchorLinks(tableOfContents),
  );

  const changeAnchorLinkStatus = (link: AnchorLinkAttr) => {
    const tLink = link;
    const { status } = link;
    const nextStatus =
      status === AnchorLinkStatus.EXPAND
        ? AnchorLinkStatus.FLOD
        : AnchorLinkStatus.EXPAND;
    tLink.status = nextStatus;
    setAnchorLinks([...anchorLinks]);
  };

  const renderAnchorLinks = (links: AnchorLinkAttr[]) =>
    links.map((link: AnchorLinkAttr) => (
      <React.Fragment key={link.href}>
        {link.status === AnchorLinkStatus.EXPAND && (
          <CaretDownOutlined
            style={{ color: '#8c8c8c' }}
            onClick={() => changeAnchorLinkStatus(link)}
          />
        )}
        {link.status === AnchorLinkStatus.FLOD && (
          <CaretRightOutlined
            style={{ color: '#8c8c8c' }}
            onClick={() => changeAnchorLinkStatus(link)}
          />
        )}
        <AnchorLink
          href={link.href}
          title={link.title}
          className={link.children ? styles.parent : styles.children}
        >
          {link.children &&
            link.status === AnchorLinkStatus.EXPAND &&
            renderAnchorLinks(link.children)}
        </AnchorLink>
      </React.Fragment>
    ));

  const onAnchorLinkChange = debounce((activeLink: string) => {
    if (!activeLink) return;
    // We could update URL hash on scroll
    window.history.replaceState({}, '', activeLink);
    const anchorElem = document.querySelector(
      `.${styles.toc} a[href='${activeLink}']`,
    )?.parentNode as HTMLElement | null;
    const tocContentElem = document.querySelector<HTMLElement>(
      `.${styles.apiAnchor}`,
    );
    // We can no longer use Element.scrollIntoView
    // when using a plain `position: sticky` for table of contents
    // because it will try to scroll the main article as well
    tocContentElem?.scrollTo({
      top:
        Number(anchorElem?.offsetTop) -
        window.innerHeight / 2 -
        Number(anchorElem?.clientHeight),
      behavior: 'smooth',
    });
  }, 300);

  return (
    <>
      <SEO title={frontmatter.title} lang={i18n.language} />
      <AntLayout
        style={{ background: '#fff' }}
        hasSider
        className={styles.layout}
      >
        {menuSider}
        <Article className={styles.markdown}>
          <div className={styles.toc}>
            <Anchor
              affix={false}
              className={styles.apiAnchor}
              onChange={onAnchorLinkChange}
            >
              {renderAnchorLinks(anchorLinks)}
            </Anchor>
          </div>
          <div className={styles.main}>
            <h1>
              {frontmatter.title}
              <Tooltip title={t('在 GitHub 上编辑')}>
                <a
                  href={getGithubSourceUrl({
                    githubUrl,
                    relativePath,
                    prefix: 'docs',
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.editOnGtiHubButton}
                >
                  <EditOutlined />
                </a>
              </Tooltip>
            </h1>
            <div className={styles.meta}>
              <ReadingTime readingTime={readingTime} />
              <Contributors
                style={{ marginLeft: '8px' }}
                contributors={frontmatter.contributors}
              />
            </div>
            <div className={styles.content}>{renderAst(htmlAst)}</div>
            <div>
              <NavigatorBanner type="prev" post={prev} />
              <NavigatorBanner type="next" post={next} />
              <BackTop style={{ right: 32 }}>
                <div className={styles.backTop}>
                  <VerticalAlignTopOutlined />
                </div>
              </BackTop>
            </div>
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
      htmlAst
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
        contributors {
          author
          github
          avatar
        }
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "//docs//" } } }
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
