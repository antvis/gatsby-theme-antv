import React from 'react';

import {
  AreaChartOutlined,
  DingdingOutlined,
  GithubOutlined,
  HistoryOutlined,
  HomeOutlined,
  PieChartOutlined,
  ReadOutlined,
  YuqueOutlined,
} from '@ant-design/icons';

import { getChinaMirrorHost } from '../utils';

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

export type ValuesOf<T extends any[]> = T[number];

export const getProducts = ({
  t,
  language,
  isChinaMirrorHost = false,
}: {
  t: (key: string) => string;
  language: string;
  isChinaMirrorHost?: boolean;
}): ProductItem[] => {
  const hosts: { [name: string]: string } = {};
  [
    'g2',
    'g2plot',
    'g6',
    'l7',
    'f2',
    'f2native',
    'graphin',
    'g',
    'x6',
    'ava',
  ].forEach((name: string) => {
    hosts[name] = isChinaMirrorHost
      ? getChinaMirrorHost(`${name}.${ANTV_DOMAIN}`)
      : `${name}.${ANTV_DOMAIN}`;
  });
  const products = [
    {
      title: 'G2',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/trEfLRh5pc/G2%252520keshihuatuxingyufa.svg',
      slogan: t('可视化引擎'),
      description: t('数据驱动，高度易用，可扩展的可视化图形语法。'),
      category: Categories[0],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.g2}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.g2}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.g2}/${language}/docs/manual`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.g2}/${language}/docs/api`,
        },
        {
          icon: <HistoryOutlined />,
          title: t('更新日志'),
          url: `https://github.com/antvis/g2/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <GithubOutlined />,
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
      title: 'F2',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/D%26fDbWqVkv/F2%252520yidongduankeshihuafangan.svg',
      slogan: t('移动可视化方案'),
      description: t(
        '专注于移动端的可视化解决方案，兼容 H5/小程序/Weex 等多端环境',
      ),
      category: Categories[0],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.f2}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.f2}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.f2}/${language}/docs/tutorial/getting-started`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.f2}/${language}/docs/api`,
        },
        {
          icon: <HistoryOutlined />,
          title: t('更新日志'),
          url: `https://github.com/antvis/f2/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <GithubOutlined />,
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
      title: 'G6',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/zS1wZZJVcJ/G6%252520tukeshihuayinqing.svg',
      slogan: t('图可视化引擎'),
      description: t('便捷的关系数据可视化引擎与图分析工具。'),
      category: Categories[0],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.g6}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.g6}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.g6}/${language}/docs/manual`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.g6}/${language}/docs/api`,
        },
        {
          icon: <HistoryOutlined />,
          title: t('更新日志'),
          url: `https://github.com/antvis/g6/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <GithubOutlined />,
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
      title: 'X6',
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/1d5e84d0-d153-4648-81c0-397b3d383d2c.svg',
      slogan: t('图编辑引擎'),
      description: t('极易定制、开箱即用、数据驱动的图编辑引擎'),
      category: Categories[0],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.x6}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.x6}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.x6}/${language}/docs/tutorial/about/`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.x6}/${language}/docs/api/graph/`,
        },
        {
          icon: <GithubOutlined />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/x6`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-x6.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'L7',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/OI%26h7HXH33/L7%252520dilikongjianshujukeshihua.svg',
      slogan: t('地理空间数据可视化'),
      description: t('高性能/高渲染质量的地理空间数据可视化框架。'),
      category: Categories[0],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.l7}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.l7}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.l7}/${language}/docs/tutorial`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.l7}/${language}/docs/api/l7`,
        },
        {
          icon: <HistoryOutlined />,
          title: t('更新日志'),
          url: `https://github.com/antvis/L7/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <GithubOutlined />,
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
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.g2plot}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.g2plot}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.g2plot}/${language}/docs/manual`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.g2plot}/${language}/docs/api`,
        },
        {
          icon: <HistoryOutlined />,
          title: t('更新日志'),
          url: `https://github.com/antvis/g2plot/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <GithubOutlined />,
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
      title: 'F2Native',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/D%26fDbWqVkv/F2%252520yidongduankeshihuafangan.svg',
      slogan: t('移动可视化方案'),
      description: t(
        '跨平台高性能的移动端可视化解决方案，满足你的各种图表需求。',
      ),
      category: Categories[1],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.f2native}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.f2native}/${language}/docs/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.f2native}/${language}/docs/tutorial/getting-started`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.f2native}/${language}/docs/api/API`,
        },
        {
          icon: <GithubOutlined />,
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
      title: 'Graphin',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg',
      slogan: t(''),
      description: t('基于 G6 封装的图分析应用组件。'),
      category: Categories[1],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.graphin}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('组件示例'),
          url: `https://${hosts.graphin}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.graphin}/${language}/docs/manual/introduction`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.graphin}/${language}/docs/api/graphin`,
        },
        {
          icon: <HistoryOutlined />,
          title: t('更新日志'),
          url: `https://github.com/antvis/graphin/blob/master/CHANGELOG.md`,
          openExternal: true,
        },
        {
          icon: <GithubOutlined />,
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
      title: 'AVA',
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/1069c628-7460-4b09-a649-0f2ad64dfc78.svg',
      slogan: t(''),
      description: t('AVA 是为了更简便的可视分析而生的技术框架。'),
      category: Categories[1],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://${hosts.ava}/${language}`,
        },
        {
          icon: <PieChartOutlined />,
          title: t('图表示例'),
          url: `https://${hosts.ava}/${language}/examples`,
        },
        {
          icon: <ReadOutlined />,
          title: t('使用文档'),
          url: `https://${hosts.ava}/${language}/docs/guide`,
        },
        {
          icon: <ReadOutlined />,
          title: t('API 文档'),
          url: `https://${hosts.ava}/${language}/docs/api`,
        },
        {
          icon: <GithubOutlined />,
          title: t('GitHub 仓库'),
          url: `https://github.com/antvis/ava`,
          openExternal: true,
        },
        {
          icon: '🇨🇳',
          title: t('国内镜像'),
          url: `https://antv-ava.gitee.io`,
          openExternal: true,
        },
      ],
    },
    {
      title: 'ChartCube',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/Zr74jx8YNX/chartcube.svg',
      slogan: t('图表魔方'),
      description: t('AntV 在线图表制作利器。'),
      category: Categories[1],
      links: [
        {
          icon: <HomeOutlined />,
          title: t('产品首页'),
          url: `https://chartcube.alipay.com`,
          openExternal: true,
        },
        {
          icon: <AreaChartOutlined />,
          title: t('生成图表'),
          url: `https://chartcube.alipay.com/guide`,
          openExternal: true,
        },
        {
          icon: <YuqueOutlined />,
          title: t('语雀社区'),
          url: `https://www.yuque.com/chartcube`,
          openExternal: true,
        },
        {
          icon: <DingdingOutlined />,
          title: t('钉钉服务群'),
          url: `dingtalk://dingtalkclient/action/joingroup?cid=8305538734`,
          openExternal: true,
        },
      ],
    },
    {
      title: t('墨者学院'),
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/12j36RPVldO/mozhexueyuan.svg',
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
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/Q1pbg%26O2TM/BizCharts.svg',
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
      title: 'Ant Design Charts',
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      description: t('基于 G2Plot 实现的 React 可视化图表库'),
      category: Categories[2],
      links: [
        {
          title: t('产品首页'),
          url: `https://charts.ant.design/`,
          openExternal: true,
        },
      ],
    },
  ];

  return products;
};

const CATEGORY_TYPE = tuple('basic', 'extension', 'mobile', 'ecology');
export const CATEGORIES: Array<{
  type: typeof CATEGORY_TYPE[number];
  name: string;
}> = [
  { type: 'basic', name: '标准版基础产品' },
  { type: 'extension', name: '标准版扩展产品' },
  { type: 'mobile', name: '移动定制（F版）产品' },
  { type: 'ecology', name: '周边生态' },
];

export type ProductType = {
  links: {
    /** 产品首页 */
    readonly home?: { url: string; title?: string };
    /** 图表示例 */
    readonly example?: { url: string; title?: string };
    /** 使用文档 */
    readonly api?: { url: string; title?: string };
  };
  [k: string]: any;
};

export function getNewProducts({
  language,
  isChinaMirrorHost,
}: {
  language: 'zh' | 'en';
  isChinaMirrorHost: boolean;
}): Promise<ProductType[]> {
  // 如需要修改产品信息，请到 https://yuyan.antfin-inc.com/datavprod/antv-site-datas/schemas/products-info-h5data/deploys/stages 修改区块内容
  return fetch(
    'https://render.alipay.com/p/h5data/antv-site-datas_products-info-h5data.json',
  )
    .then((res) => res.json())
    .then(({ link }) => {
      return fetch(link)
        .then((data) => data.json())
        .then((products: ProductType[]) => {
          return products
            .filter((d) => d.lang === language)
            .map((d) => {
              const links: ProductType['links'] = d.links ? { ...d.links } : {};
              Object.keys(links).forEach((k: string) => {
                // @ts-ignore
                let actualUrl = links[k].url || '';

                if (isChinaMirrorHost) {
                  // g2plot.antv.vision => antv-g2plot.gitee.io
                  const match = actualUrl.match(
                    /([http|https]):\/\/(.*)\.antv\.vision/,
                  );
                  if (match && match[2]) {
                    actualUrl = actualUrl.replace(
                      `${match[2]}.antv.vision`,
                      `antv-${match[2]}.gitee.io`,
                    );
                  }
                }
                // @ts-ignore
                links[k].url = actualUrl;
              });
              return { ...d, links };
            });
        });
    });
}
