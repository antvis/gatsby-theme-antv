import React from 'react';
import { navigate, graphql, StaticQuery } from 'gatsby';
import { getUserLangKey } from 'ptz-i18n';
import { withTranslation, WithTranslation } from 'react-i18next';
import Seo from './Seo';
import PageLoading from './PageLoading';

class RedirectIndex extends React.PureComponent<WithTranslation> {
  langKey = '';

  constructor(args: any) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const langKey = getUserLangKey(['zh', 'en'], 'zh');
      this.langKey = langKey;
      // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961
      navigate(langKey);
    }
  }

  renderIndex = (data: {
    site: {
      siteMetadata: {
        title?: string;
      };
    };
  }) => {
    const { t } = this.props;
    const {
      site: {
        siteMetadata: { title = '' },
      },
    } = data;
    return (
      <>
        <Seo
          title={title || 'AntV'}
          titleSuffix={t('蚂蚁数据可视化')}
          description={t(
            'AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
          )}
          lang={this.langKey}
        />
        <PageLoading />
      </>
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={this.renderIndex}
      />
    );
  }
}

export default withTranslation()(RedirectIndex);
