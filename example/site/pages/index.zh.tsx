import React from 'react';
import { Skeleton } from 'antd';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div style={{ margin: '0 auto', padding: '0 80px' }}>
        {t('中文首页')}
        {t('项目里的国际化')}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </>
  );
};

export default IndexPage;
