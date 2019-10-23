import React, { useEffect } from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import Footer from 'rc-footer';
import { getCurrentLangKey } from 'ptz-i18n';
import i18n from 'i18next';
import fetch from 'isomorphic-fetch';
import Backend from 'i18next-fetch-backend';
import { initReactI18next, useTranslation } from 'react-i18next';
import Header from '../components/header';
import footerColumns from '../components/footerColumns';
import styles from './layout.module.less';

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json',
      fetch,
    },
    react: {
      useSuspense: false,
    },
  });

interface LayoutProps {
  children: React.ReactElement<any>;
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const { i18n } = useTranslation();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          docs {
            slug
            title {
              zh
              en
            }
            order
            redirect
          }
        }
        pathPrefix
      }
    }
  `);

  const {
    site: {
      siteMetadata: { title, docs },
      pathPrefix,
    },
  } = data;
  const path = location.pathname.replace(pathPrefix, '');
  const currentLangKey = getCurrentLangKey(['zh', 'en'], 'zh', path);

  if (!i18n.isInitialized) {
    i18n.init({
      lng: currentLangKey,
      fallbackLng: 'zh',
    });
  }

  useEffect(() => {
    if (i18n.language !== currentLangKey) {
      i18n.changeLanguage(currentLangKey);
    }
  }, [currentLangKey]);

  if (path === withPrefix('/') || `${path}/` === withPrefix('/')) {
    return children;
  }

  return (
    <>
      <Header
        siteTitle={title}
        path={path}
        pathPrefix={pathPrefix}
        docs={docs}
      />
      <main className={styles.main}>{children}</main>
      <Footer
        columns={footerColumns}
        bottom={
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://xtech.antfin.com/">AFX</a>
          </div>
        }
      />
    </>
  );
};

export default Layout;
