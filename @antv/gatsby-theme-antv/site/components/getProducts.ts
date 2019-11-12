const tuple = <T extends string[]>(...args: T) => args;
const Categories = tuple('basic', 'extension', 'ecology');

export interface ProductItem {
  title: string;
  icon?: React.ReactNode;
  slogan?: string;
  description: string;
  category: typeof Categories[number];
  links?: Array<{
    icon?: React.ReactNode;
    title: string;
    url: string;
    openExternal?: boolean;
  }>;
}

export const getProducts = ({
  t,
  language,
  rootDomain = '',
}: {
  t: (key: string) => string;
  language: string;
  rootDomain?: string;
}): ProductItem[] => {
  const products = [
    {
      title: 'G2',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/trEfLRh5pc/G2%252520keshihuatuxingyufa.svg',
      slogan: t('可视化图形语法'),
      description: t('以数据驱动，具有高度的易用性和扩展性的可视化图形语法。'),
      category: Categories[0],
      links: [
        {
          title: t('产品首页'),
          url: `${rootDomain}/g2/${language}`,
        },
        {
          title: t('图表示例'),
          url: `${rootDomain}/g2/${language}/examples`,
        },
        {
          title: t('使用文档'),
          url: `${rootDomain}/g2/${language}/docs/manual`,
        },
        {
          title: t('国内镜像'),
          url: `https://antv.gitee.io/g2`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'G6',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/zS1wZZJVcJ/G6%252520tukeshihuayinqing.svg',
      slogan: t('图可视化引擎'),
      description: t('一套便捷的关系数据可视化引擎与图分析工具。'),
      category: Categories[0],
      links: [
        {
          title: t('产品首页'),
          url: `${rootDomain}/g6/${language}`,
        },
        {
          title: t('图表示例'),
          url: `${rootDomain}/g6/${language}/examples`,
        },
        {
          title: t('使用文档'),
          url: `${rootDomain}/g6/${language}/docs/manual`,
        },
        {
          title: t('国内镜像'),
          url: `https://antv.gitee.io/g6`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'F2',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/D%26fDbWqVkv/F2%252520yidongduankeshihuafangan.svg',
      slogan: t('移动可视化方案'),
      description: t(
        '专注于移动端的可视化解决方案，兼容 H5/Node/小程序/Weex 等多端环境',
      ),
      category: Categories[0],
      links: [
        {
          title: t('产品首页'),
          url: `${rootDomain}/f2/${language}`,
        },
        {
          title: t('图表示例'),
          url: `${rootDomain}/f2/${language}/examples`,
        },
        {
          title: t('使用文档'),
          url: `${rootDomain}/f2/${language}/docs/manual`,
        },
        {
          title: t('国内镜像'),
          url: `https://antv.gitee.io/f2`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'L7',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/OI%26h7HXH33/L7%252520dilikongjianshujukeshihua.svg',
      slogan: t('地理空间数据可视化'),
      description: t('一套高性能/高渲染质量的地理空间数据可视化框架。'),
      category: Categories[0],
      links: [
        {
          title: t('产品首页'),
          url: `${rootDomain}/l7/${language}`,
        },
        {
          title: t('图表示例'),
          url: `${rootDomain}/l7/${language}/examples`,
        },
        {
          title: t('使用文档'),
          url: `${rootDomain}/l7/${language}/docs/manual`,
        },
        {
          title: t('国内镜像'),
          url: `https://antv.gitee.io/l7`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'G2Plot',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg',
      slogan: t('强大的图表库'),
      description: t('开箱即用、易于配置、具有良好视觉和交互体验的通用图表。'),
      category: Categories[1],
      links: [
        {
          title: t('产品首页'),
          url: `${rootDomain}/g2plot/${language}`,
        },
        {
          title: t('图表示例'),
          url: `${rootDomain}/g2plot/${language}/examples`,
        },
        {
          title: t('使用文档'),
          url: `${rootDomain}/g2plot/${language}/docs/manual`,
        },
        {
          title: t('国内镜像'),
          url: `https://antv.gitee.io/g2plot`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'Graphin',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg',
      slogan: t('图分析框架'),
      description: t('开箱即用的图分析应用 React 组件库。'),
      category: Categories[1],
      links: [
        {
          title: t('产品首页'),
          url: `${rootDomain}/graphin/${language}`,
        },
        {
          title: t('图表示例'),
          url: `${rootDomain}/graphin/${language}/examples`,
        },
        {
          title: t('使用文档'),
          url: `${rootDomain}/graphin/${language}/docs/manual`,
        },
        {
          title: t('国内镜像'),
          url: `https://antv.gitee.io/graphin`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'ChartCube',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/kM2Rd6CnlW/ChartCube.svg',
      slogan: t('图表魔方'),
      description: t('AntV 在线图表制作利器。'),
      category: Categories[1],
      links: [
        {
          title: t('产品首页'),
          url: `https://chartcube.alipay.com`,
          openExternal: true,
        },
        {
          title: t('生成图表'),
          url: `https://chartcube.alipay.com/guide`,
          openExternal: true,
        },
      ],
    },
    {
      title: t('墨者学院'),
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/12j36RPVldO/mozhexueyuan.svg',
      description: t('数据可视化社区'),
      category: Categories[2],
      links: [
        {
          title: t('产品首页'),
          url: `https://www.yuque.com/mo-college`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'BizCharts',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/Q1pbg%26O2TM/BizCharts.svg',
      description: t('基于商业场景下的数据可视化解决方案'),
      category: Categories[2],
      links: [
        {
          title: t('产品首页'),
          url: 'https://bizcharts.net',
          openExternal: true,
        },
      ],
    },
    {
      title: 'Viser',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/QAyW5h99HVa/Viser.svg',
      description: t('基于 G2 实现的可视化解决方案'),
      category: Categories[2],
      links: [
        {
          title: t('产品首页'),
          url: `https://viserjs.github.io/`,
          openExternal: true,
        },
      ],
    },
  ];

  return products;
};
