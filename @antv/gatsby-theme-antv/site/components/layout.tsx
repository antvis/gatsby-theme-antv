import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Location as RouterLocation } from '@reach/router';
import Footer from 'rc-footer';
import { getCurrentLangKey } from 'ptz-i18n';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Header from './header';
import RedirectIndex from './RedirectIndex';
import locale from '../locale.json';
import footerColumns from './footerColumns';
import styles from './layout.module.less';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locale,
    lng: 'zh',
    fallbackLng: 'zh',
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
          siteUrl
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
      siteMetadata: { title, siteUrl, docs },
      pathPrefix = '',
    },
  } = data;

  const currentLangKey = getCurrentLangKey(
    ['zh', 'en'],
    'zh',
    location.pathname.replace(pathPrefix, ''),
  );

  useEffect(() => {
    if (i18n.language !== currentLangKey) {
      i18n.changeLanguage(currentLangKey);
    }
  }, [currentLangKey]);

  if (location.pathname === '/' || location.pathname.startsWith(pathPrefix)) {
    return <RedirectIndex />;
  }

  return (
    <>
      <Header
        siteTitle={title}
        siteUrl={siteUrl}
        location={location}
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

// here app catches the suspense from page in case translations are not yet loaded
export default function App(props: any) {
  return (
    <RouterLocation>
      {({ location }) => <Layout location={location} {...props} />}
    </RouterLocation>
  );
}
