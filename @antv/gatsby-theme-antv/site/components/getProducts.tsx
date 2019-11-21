import React from 'react';
import { Icon, Popover } from 'antd';

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
    title: React.ReactNode;
    url?: string;
    openExternal?: boolean;
  }>;
}

const ANTV_DOMAIN = 'antv.vision';

export const getProducts = ({
  t,
  language,
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
      description: t('数据驱动，高度易用，可扩展的可视化图形语法。'),
      category: Categories[0],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://g2.${ANTV_DOMAIN}/${language}`,
        },
        {
          icon: <Icon type="pie-chart" />,
          title: t('图表示例'),
          url: `https://g2.${ANTV_DOMAIN}/${language}/examples`,
        },
        {
          icon: <Icon type="read" />,
          title: t('使用文档'),
          url: `https://g2.${ANTV_DOMAIN}/${language}/docs/manual`,
        },
        {
          icon: <Icon type="read" />,
          title: t('API 文档'),
          url: `https://g2.${ANTV_DOMAIN}/${language}/docs/api`,
        },
        {
          icon: <Icon type="history" />,
          title: t('更新日志'),
          url: `https://github.com/antvis/g2/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <Icon type="github" />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/g2`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-g2.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'G6',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/zS1wZZJVcJ/G6%252520tukeshihuayinqing.svg',
      slogan: t('图可视化引擎'),
      description: t('便捷的关系数据可视化引擎与图分析工具。'),
      category: Categories[0],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://g6.${ANTV_DOMAIN}/${language}`,
        },
        {
          icon: <Icon type="pie-chart" />,
          title: t('图表示例'),
          url: `https://g6.${ANTV_DOMAIN}/${language}/examples`,
        },
        {
          icon: <Icon type="read" />,
          title: t('使用文档'),
          url: `https://g6.${ANTV_DOMAIN}/${language}/docs/manual`,
        },
        {
          icon: <Icon type="read" />,
          title: t('API 文档'),
          url: `https://g6.${ANTV_DOMAIN}/${language}/docs/api/GlobalAPI`,
        },
        {
          icon: <Icon type="history" />,
          title: t('更新日志'),
          url: `https://github.com/antvis/g6/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <Icon type="github" />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/g6`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-g6.gitee.io`,
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
        '专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境',
      ),
      category: Categories[0],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://f2.${ANTV_DOMAIN}/${language}`,
        },
        {
          icon: <Icon type="pie-chart" />,
          title: t('图表示例'),
          url: `https://f2.${ANTV_DOMAIN}/${language}/examples`,
        },
        {
          icon: <Icon type="read" />,
          title: t('使用文档'),
          url: `https://f2.${ANTV_DOMAIN}/${language}/docs/tutorial/getting-started`,
        },
        {
          icon: <Icon type="read" />,
          title: t('API 文档'),
          url: `https://f2.${ANTV_DOMAIN}/${language}/docs/api`,
        },
        {
          icon: <Icon type="history" />,
          title: t('更新日志'),
          url: `https://github.com/antvis/f2/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <Icon type="github" />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/f2`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-f2.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'L7',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/OI%26h7HXH33/L7%252520dilikongjianshujukeshihua.svg',
      slogan: t('地理空间数据可视化'),
      description: t('高性能/高渲染质量的地理空间数据可视化框架。'),
      category: Categories[0],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://l7.${ANTV_DOMAIN}/${language}`,
        },
        {
          icon: <Icon type="pie-chart" />,
          title: t('图表示例'),
          url: `https://l7.${ANTV_DOMAIN}/${language}/examples`,
        },
        {
          icon: <Icon type="read" />,
          title: t('使用文档'),
          url: `https://l7.${ANTV_DOMAIN}/${language}/docs/manual/tutorial`,
        },
        {
          icon: <Icon type="read" />,
          title: t('API 文档'),
          url: `https://l7.${ANTV_DOMAIN}/${language}/docs/API`,
        },
        {
          icon: <Icon type="history" />,
          title: t('更新日志'),
          url: `https://github.com/antvis/L7/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <Icon type="github" />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/L7`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-l7.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'G2Plot',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/SlbIagEvT7/G2plot.svg',
      slogan: t('开箱即用的图表库'),
      description: t('开箱即用、易于配置、极致体验的通用图表库。'),
      category: Categories[1],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://g2plot.${ANTV_DOMAIN}/${language}`,
        },
        {
          icon: <Icon type="pie-chart" />,
          title: t('图表示例'),
          url: `https://g2plot.${ANTV_DOMAIN}/${language}/examples`,
        },
        {
          icon: <Icon type="read" />,
          title: t('使用文档'),
          url: `https://g2plot.${ANTV_DOMAIN}/${language}/docs/manual`,
        },
        {
          icon: <Icon type="history" />,
          title: t('更新日志'),
          url: `https://github.com/antvis/g2plot/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <Icon type="github" />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/g2plot`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-g2plot.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'Graphin',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg',
      slogan: t('图分析可视化组件'),
      description: t('开箱即用的图分析应用 React 组件库。'),
      category: Categories[1],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://graphin.${ANTV_DOMAIN}/${language}`,
        },
        {
          icon: <Icon type="read" />,
          title: t('使用文档'),
          url: `https://graphin.${ANTV_DOMAIN}/${language}/docs/manual/introduction`,
        },
        {
          icon: <Icon type="read" />,
          title: t('API 文档'),
          url: `https://graphin.${ANTV_DOMAIN}/${language}/docs/api/graphin`,
        },
        {
          icon: <Icon type="history" />,
          title: t('更新日志'),
          url: `https://github.com/antvis/graphin/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <Icon type="github" />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/graphin`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-graphin.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'ChartCube',
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/Zr74jx8YNX/chartcube.svg',
      slogan: t('图表魔方'),
      description: t('AntV 在线图表制作利器。'),
      category: Categories[1],
      links: [
        {
          icon: <Icon type="home" />,
          title: t('产品首页'),
          url: `https://chartcube.alipay.com`,
          openExternal: true,
        },
        {
          icon: <Icon type="area-chart" />,
          title: t('生成图表'),
          url: `https://chartcube.alipay.com/guide`,
          openExternal: true,
        },
        {
          icon: <Icon type="yuque" />,
          title: t('语雀社区'),
          url: `https://www.yuque.com/chartcube`,
          openExternal: true,
        },
        {
          icon: <Icon type="qrcode" />,
          title: (
            <Popover
              title={t('扫码进 ChartCube 服务群')}
              content={
                <img
                  width={100}
                  height={100}
                  src="https://gw.alipayobjects.com/zos/antfincdn/7LIGEbQFF%24/e1a08ef3-8783-4ea2-95fb-997a11138d3f.png"
                  alt="DingTalk Group"
                />
              }
              overlayStyle={{ textAlign: 'center' }}
            >
              {t('钉钉服务群')}
            </Popover>
          ),
        },
      ],
    },
    {
      title: t('墨者学院'),
      icon:
        'https://gw.alipayobjects.com/zos/antfincdn/12j36RPVldO/mozhexueyuan.svg',
      description: t('数据可视化社团'),
      category: Categories[2],
      links: [
        {
          title: t('学院首页'),
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
