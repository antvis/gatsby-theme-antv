import React from 'react';
import Footer from 'rc-footer';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.less';
import 'rc-footer/assets/index.less';

export default ({
  columns = undefined,
  bottom = (
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://xtech.antfin.com/">AFX</a>
    </div>
  ),
  theme = 'dark' as 'dark',
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const defaultColumns = [
    {
      title: (
        <span>
          G2<span className={styles.description}>{t('可视化图形语法')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: `/g2/${lang}`,
        },
        {
          title: t('图表示例'),
          url: `/g2/${lang}/examples`,
        },
        {
          title: t('使用文档'),
          url: `/g2/${lang}/docs/manual`,
        },
      ],
    },
    {
      title: (
        <span>
          G6<span className={styles.description}>{t('图可视化引擎')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: `/g6/${lang}`,
        },
        {
          title: t('图表示例'),
          url: `/g6/${lang}/examples`,
        },
        {
          title: t('使用文档'),
          url: `/g6/${lang}/docs/manual`,
        },
      ],
    },
    {
      title: (
        <span>
          F2<span className={styles.description}>{t('移动可视化方案')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: `/f2/${lang}`,
        },
        {
          title: t('图表示例'),
          url: `/f2/${lang}/examples`,
        },
        {
          title: t('使用文档'),
          url: `/f2/${lang}/docs/manual`,
        },
      ],
    },
    {
      title: (
        <span>
          L7<span className={styles.description}>{t('地理空间可视化')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: '/l7',
        },
        {
          title: t('图表示例'),
          url: `/l7/${lang}/examples`,
        },
        {
          title: t('使用文档'),
          url: `/l7/${lang}/docs/manual`,
        },
      ],
    },
    {
      title: (
        <span>
          G2Plot<span className={styles.description}>{t('可视化图表库')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: `/g2plot/${lang}`,
        },
        {
          title: t('图表示例'),
          url: `/g2plot/${lang}/examples`,
        },
        {
          title: t('使用文档'),
          url: `/g2plot/${lang}/docs/manual`,
        },
      ],
    },
    {
      title: (
        <span>
          Graphin<span className={styles.description}>{t('图分析框架')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: `/graphin/${lang}`,
        },
        {
          title: t('图表示例'),
          url: `/graphin/${lang}/examples`,
        },
        {
          title: t('使用文档'),
          url: `/graphin/${lang}/docs/manual`,
        },
      ],
    },
    {
      title: (
        <span>
          ChartCube
          <span className={styles.description}>{t('图表生成工具')}</span>
        </span>
      ),
      items: [
        {
          title: t('产品首页'),
          url: `https://chartcube.alipay.com`,
          openExternal: true,
        },
        {
          title: t('生成图表'),
          url: `https://chartcube.alipay.com`,
          openExternal: true,
        },
      ],
    },
    {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="more products"
        />
      ),
      title: t('更多产品'),
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="Ant Design"
            />
          ),
          title: 'Ant Design',
          url: 'https://ant.design',
          description: t('企业级 UI 设计语言'),
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: t('语雀'),
          url: 'https://yuque.com',
          description: t('知识创作与分享工具'),
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yunfengdie"
            />
          ),
          title: t('云凤蝶'),
          url: 'https://yunfengdie.com',
          description: t('中台建站平台'),
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png"
              alt="Egg"
            />
          ),
          title: 'Egg',
          url: 'https://eggjs.org',
          description: t('企业级 Node 开发框架'),
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
              alt="kitchen"
            />
          ),
          title: 'Kitchen',
          description: t('Sketch 工具集'),
          url: 'https://kitchen.alipay.com',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
              alt="xtech"
            />
          ),
          title: t('蚂蚁体验科技'),
          url: 'https://xtech.antfin.com/',
          openExternal: true,
        },
      ],
    },
  ];
  return (
    <Footer
      maxColumnsPerRow={4}
      theme={theme}
      columns={columns || defaultColumns}
      bottom={bottom}
      className={styles.footer}
    />
  );
};
