import React from 'react';
import { useStaticQuery, graphql, withPrefix, Link } from 'gatsby';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './layout.module.less';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    initImmediate: false,
    // @ts-ignore
    resources: I18NEXT_RESOURCES,
    fallbackLng: 'zh',
    react: {
      useSuspense: false,
    },
  });

const lngs = ['zh', 'en'];

interface LayoutProps {
  children: React.ReactElement<any>;
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const query = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          githubUrl
          showLanguageSwitcher
          navs {
            slug
            title {
              zh
              en
            }
            target
          }
        }
      }
    }
  `;
  const { site } = useStaticQuery(query);
  const {
    siteMetadata: { title, navs = [], githubUrl, showLanguageSwitcher },
  } = site;
  const pathPrefix = withPrefix('/').replace(/\/$/, '');
  const path = location.pathname.replace(pathPrefix, '');
  const currentLangKey = getCurrentLangKey(lngs, 'zh', path);

  i18n.init({
    lng: currentLangKey,
  });

  if (
    location.pathname === pathPrefix ||
    (children && children.type && (children as any).type.noLayout)
  ) {
    return children;
  }

  return (
    <>
      <Header
        subTitle={pathPrefix === '' ? '' : title}
        path={path}
        pathPrefix={pathPrefix}
        navs={navs}
        githubUrl={githubUrl}
        Link={Link}
        showLanguageSwitcher={showLanguageSwitcher === null ? undefined : showLanguageSwitcher}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
