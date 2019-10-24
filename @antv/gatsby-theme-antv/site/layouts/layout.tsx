import React, { useEffect } from 'react';
import { useStaticQuery, graphql, withPrefix } from 'gatsby';
import Footer from 'rc-footer';
import i18n from '../i18n';
import { getCurrentLangKey } from 'ptz-i18n';
import Header from '../components/header';
import footerColumns from '../components/footerColumns';
import styles from './layout.module.less';

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
  useEffect(() => {
    i18n.changeLanguage(currentLangKey);
  }, [currentLangKey]);
  return (
    <Layout siteData={site} location={location}>
      {children}
    </Layout>
  );
};
