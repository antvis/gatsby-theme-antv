import React from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import Footer from 'rc-footer';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import Header from '../components/header';
import footerColumns from '../components/footerColumns';
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
  siteData: any;
  location: Location;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  siteData = {},
  location,
}) => {
  const {
    siteMetadata: { title, docs },
    pathPrefix,
  } = siteData;

  const path = location.pathname.replace(pathPrefix, '');

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

export default ({
  location,
  children,
}: {
  children: React.ReactElement<any>;
  location: Location;
}) => {
  const query = graphql`
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
  `;
  const { site } = useStaticQuery(query);
  const { pathPrefix } = site;
  const path = location.pathname.replace(pathPrefix, '');
  const currentLangKey = getCurrentLangKey(lngs, 'zh', path);
  i18n.init({
    lng: currentLangKey,
  });
  return (
    <Layout siteData={site} location={location}>
      {children}
    </Layout>
  );
};
