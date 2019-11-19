import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import { useTranslation } from 'react-i18next';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Cases from '@antv/gatsby-theme-antv/site/components/Cases';
import BannerSVG from '@antv/gatsby-theme-antv/site/components/BannerSVG';

const IndexPage = () => {
  const { t, i18n } = useTranslation();

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
    {
      name: '公司1',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/8c0770a0-98a6-406d-b35d-0fe3e3f66d79.svg',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司2',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/c662aa41-5506-43a8-987f-08e250c5568f.svg',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司3',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/02272508-c6be-4cb6-8471-dd91e44d7b85.svg',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司4',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/13f6ad34-97eb-4356-ad4f-f3b9e9426366.svg',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司5',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/8aef4d82-6c25-4709-bcf0-c9d67e5188d6.svg',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司6',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/a83afb28-0eef-4380-a284-f5ead42b14d4.svg'
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司7',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/da5e0fbe-898a-49d4-9def-43ca34c01172.svg'
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司8',
      // img: 'https://gw.alipayobjects.com/zos/basement_prod/4533e975-a09a-47af-9429-1ceaefddbd11.svg'
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const notifications = [
    {
      type: t('测试'),
      title: t('G6 3.2 全新上线！'),
      date: '2019.12.04',
      link: '#',
    },
  ];

  const cases = [
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
      title: '灯塔专业版',
      description:
        '深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金',
      link: '#',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
    {
      logo:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ekkhR7ISzUsAAAAAAAAAAABkARQnAQ',
      title: '灯塔专业版2',
      description:
        '深2222222入金融的基金深入金融的基金深2222222入金融的基金深入金融的基金深2222222入金融的基金深入金融的基金',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerButtons = [
    {
      text: t('图表示例'),
      link: '#products',
      type: 'primary',
    },
    {
      text: t('下载使用'),
      link: 'https://antv.alipay.com/zh-cn/index.html',
    },
  ];
  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <Banner
        coverImage={<BannerSVG />}
        title={t('让数据栩栩如生')}
        description={t(
          'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        )}
        notifications={notifications}
        className="banner"
        buttons={bannerButtons}
        showGithubStars={false}
        video="https://mdn.alipayobjects.com/afts/file/A*qmPlRYhAlBkAAAAAAAAAAABjAQAAAQ?bz=antv_site"
        onCloseVideo={() => {
          console.log('close'); // eslint-disable-line no-console
        }}
        onPlayVideo={() => {
          console.log('paly'); // eslint-disable-line no-console
        }}
      />
      <Features
        features={features}
        title="我们的优势"
        // className="features"
        style={{ width: '100%' }}
      />
      <Features features={features} style={{ width: '100%' }} />
      <Cases cases={cases} />
      <Companies title={t('合作公司')} companies={companies} />
    </>
  );
};

export default IndexPage;
