import React from 'react';
import { Skeleton } from 'antd';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="蚂蚁数据可视化" lang="zh" />
      <div style={{ margin: '0 auto', padding: '0 80px' }}>
        {t('中文首页')}
        {t('中文首页1')}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </>
  );
};

export default IndexPage;
