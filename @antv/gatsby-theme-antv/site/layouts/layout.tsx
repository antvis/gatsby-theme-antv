import React, { useEffect } from 'react';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import { Helmet } from 'react-helmet';
import { FooterProps } from 'rc-footer';
import Seo from '../components/Seo';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import Footer, { OLD_SITE_DOMAIN } from '../components/Footer';
import styles from './layout.module.less';
import TopBanner from '../components/TopBanner';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    initImmediate: false,
    fallbackLng: 'zh',
    keySeparator: false,
    react: {
      useSuspense: false,
    },
  });

const lngs = ['zh', 'en'];

interface LayoutProps {
  children: React.ReactElement<any>;
  location: Location;
  pageContext: any;
  footerProps: FooterProps;
}

function parseNulltoUndefined<T>(value: T) {
  if (value === null) {
    return undefined;
  }
  return value;
}

const Layout: React.FC<LayoutProps> = ({ children, location, footerProps }) => {
  // https://github.com/gatsbyjs/gatsby/issues/13867#issuecomment-489481343
  if (location.pathname.includes('offline-plugin-app-shell-fallback')) {
    return <PageLoading />;
  }
  const query = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          siteUrl
          logoUrl
          showSearch
          isAntVSite
          showChinaMirror
          showLanguageSwitcher
          showAntVProductsCard
          showGithubStar
          showGithubCorner
          showWxQrcode
          wxQrcode
          navs {
            slug
            title {
              zh
              en
            }
            target
          }
          redirects {
            from
            to
          }
          docsearchOptions {
            apiKey
            indexName
          }
          versions
          ecosystems {
            name {
              zh
              en
            }
            url
          }
          announcement {
            zh
            en
          }
        }
      }
      locales {
        internal {
          content
        }
      }
    }
  `;
  const { site, locales } = useStaticQuery(query);
  const {
    siteMetadata: {
      title,
      navs = [],
      githubUrl,
      siteUrl,
      logoUrl = '',
      showLanguageSwitcher,
      showSearch,
      showChinaMirror,
      isAntVSite,
      showGithubStar,
      showGithubCorner,
      showWxQrcode,
      wxQrcode,
      showAntVProductsCard,
      redirects = [],
      docsearchOptions,
      versions,
      ecosystems,
      announcement,
    },
  } = site;

  let resources = {};
  try {
    resources = JSON.parse(locales.internal.content);
  } catch (e) {
    // empty
  }
  const pathPrefix = withPrefix('/').replace(/\/$/, '');
  const path = location.pathname.replace(pathPrefix, '');
  const currentLangKey = getCurrentLangKey(lngs, 'zh', path);

  const isHomePage =
    path === '/' ||
    path === `/${currentLangKey}` ||
    path === `/${currentLangKey}/`;

  if (!i18n.options.lng || process.env.NODE_ENV === 'production') {
    i18n.init({
      lng: currentLangKey,
    });
  }

  if (!i18n.options.resources) {
    i18n.init({
      resources,
    });
  }

  useEffect(() => {
    if (i18n.language !== currentLangKey) {
      i18n.changeLanguage(currentLangKey);
    }
  }, [currentLangKey]);

  if (
    location.pathname === pathPrefix ||
    (children && children.type && (children as any).type.noLayout)
  ) {
    return children;
  }

  const getRediectUrl = () => {
    const list = redirects || [];
    for (let i = 0; i < list.length; i += 1) {
      const {
        from = '',
        to,
        keepUrl,
      } = list[i] as {
        from: string | RegExp;
        to: string;
        keepUrl?: boolean;
      };
      // 支持字符串和正则表达式比较
      if (
        location.pathname !== from &&
        !new RegExp(from).test(location.pathname)
      ) {
        return;
      }
      if (keepUrl && new RegExp(from).test(location.pathname)) {
        return location.pathname.replace(new RegExp(from), to);
      }
      // 如果没有指定 to，则直接用替换成老版本的域名
      return to || `${OLD_SITE_DOMAIN}${location.pathname}`;
    }
  };

  const rediectUrl = getRediectUrl();
  const logoProps = logoUrl
    ? {
        logo: {
          img: <img src={logoUrl} alt="logo" />,
        },
      }
    : {};

  const isExamplePage =
    location.pathname.includes('/examples/') &&
    !location.pathname.endsWith('/gallery');

  return (
    <>
      {rediectUrl && (
        <Helmet>
          <meta httpEquiv="refresh" content={`0;url=${rediectUrl}`} />
        </Helmet>
      )}
      <Seo
        title={siteUrl === 'https://antv.vision' ? '' : title}
        lang={i18n.language}
      />
      <Header
        subTitle={siteUrl === 'https://antv.vision' ? '' : title}
        path={path}
        pathPrefix={pathPrefix}
        navs={navs}
        siteUrl={siteUrl}
        githubUrl={githubUrl}
        Link={Link}
        transparent={isHomePage}
        isHomePage={isHomePage}
        isAntVSite={isAntVSite}
        showSearch={parseNulltoUndefined(showSearch)}
        showGithubStar={parseNulltoUndefined(showGithubStar)}
        showGithubCorner={parseNulltoUndefined(showGithubCorner)}
        showAntVProductsCard={parseNulltoUndefined(showAntVProductsCard)}
        showChinaMirror={parseNulltoUndefined(showChinaMirror)}
        showLanguageSwitcher={parseNulltoUndefined(showLanguageSwitcher)}
        showWxQrcode={parseNulltoUndefined(showWxQrcode)}
        wxQrcode={parseNulltoUndefined(wxQrcode)}
        docsearchOptions={docsearchOptions}
        versions={versions}
        ecosystems={ecosystems}
        {...logoProps}
      />
      {/* 首页和 example 演示页 不展示 头部 banner */}
      {!isHomePage && !isExamplePage && (
        <TopBanner announcement={announcement} />
      )}
      <main className={styles.main}>{children}</main>
      {!isExamplePage && (
        <Footer
          githubUrl={githubUrl}
          rootDomain="https://antv.vision"
          location={location}
          {...footerProps}
        />
      )}
    </>
  );
};

export default Layout;
