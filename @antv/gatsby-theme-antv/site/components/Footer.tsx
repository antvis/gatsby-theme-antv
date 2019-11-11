import React from 'react';
import { default as RCFooter, FooterProps as RcFooterProps } from 'rc-footer';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import { getProducts } from './getProducts';
import styles from './Footer.module.less';
import 'rc-footer/assets/index.less';

interface FooterProps extends RcFooterProps {
  rootDomain?: string;
  language?: string;
}

const Footer: React.FC<FooterProps> = ({
  columns,
  bottom,
  theme = 'dark',
  language,
  rootDomain = '',
}) => {
  const { t, i18n } = useTranslation();
  const lang = language || i18n.language;
  const products = getProducts({
    t,
    language: lang,
    rootDomain,
  });

  const more = {
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
  };

  const defaultColumns = products
    .filter(product => product.category !== 'ecology')
    .map(product => ({
      title: (
        <span>
          {product.title}
          <span className={styles.description}>{product.slogan}</span>
        </span>
      ),
      items: product.links,
    }));

  return (
    <RCFooter
      maxColumnsPerRow={4}
      theme={theme}
      columns={columns || [...defaultColumns, more]}
      className={styles.footer}
      bottom={
        bottom || (
          <div className={styles.bottom}>
            <div>
              <a href="https://weibo.com/antv2017" target="_blank">
                <Icon type="weibo" />
              </a>
              <a href="https://zhuanlan.zhihu.com/aiux-antv" target="_blank">
                <Icon type="zhihu" />
              </a>
              <a href="https://github.com/antvis" target="_blank">
                <Icon type="github" />
              </a>
              <a href={`${rootDomain}/about`}>{t('关于我们')}</a>
              <a href="https://antv-2018.alipay.com" target="_blank">
                {t('返回旧版')}
              </a>
            </div>
            <div>
              © {new Date().getFullYear()} Made with ❤ by{' '}
              <a href="https://xtech.antfin.com/">XTech</a>
            </div>
          </div>
        )
      }
    />
  );
};

export default Footer;
