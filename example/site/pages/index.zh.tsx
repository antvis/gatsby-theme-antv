import React from 'react';
import { Skeleton } from 'antd';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import Features from '@antv/gatsby-theme-antv/site/components/Features';

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  i18n.options.keySeparator = '>';

  const coverImage = <svg></svg>;

  const features = [
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: t('简单方便'),
      description: t(
        '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      ),
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: t('方便可靠'),
      description: t(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      ),
    },
    {
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: t('无限可能'),
      description: t(
        '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      ),
    },
  ];

  const companies = [
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*58snT4MwuGcAAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*14yvRoRDs4wAAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
  ];

  const notifications = [
    {
      type: t('测试'),
      title: t('G6 3.2 全新上线！'),
      date: '2019.12.04',
    },
  ];
  const bannerProps = {
    coverImage,
    title: t('让数据栩栩如生'),
    description: t(
      'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
    ),
    buttonText: t('继续了解'),
    buttonHref: '#products',
    notifications: notifications,
  };
  const featuresProps = {
    features,
  };
  const companiesProps = {
    title: t('合作公司'),
    companies,
  };

  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div style={{ margin: '0 auto', padding: '0 60px' }}>
        {t('中文首页')}
        {t('项目里的国际化')}
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Banner
          {...bannerProps}
          className="banner"
          style={{ height: '600px' }}
        />
        <Features
          {...featuresProps}
          className="features"
          style={{ width: '100%' }}
        />
        <Companies
          {...companiesProps}
          className="companies"
          style={{ width: '100%' }}
        />
      </div>
    </>
  );
};

export default IndexPage;
