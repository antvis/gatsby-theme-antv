import React, { useState, useEffect } from 'react';
import { withPrefix } from 'gatsby';
import { default as RCFooter, FooterProps as RcFooterProps } from 'rc-footer';
import { useTranslation } from 'react-i18next';
import {
  GithubOutlined,
  WeiboOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import classnames from 'classnames';
import omit from 'omit.js';
import { getProducts } from './getProducts';
import { useChinaMirrorHost } from '../hooks';
import styles from './Footer.module.less';
import 'rc-footer/assets/index.less';

export const OLD_SITE_DOMAIN = 'https://antv-2018.alipay.com';

interface FooterProps extends RcFooterProps {
  rootDomain?: string;
  language?: string;
  githubUrl?: string;
  location: Location;
}

const Footer: React.FC<FooterProps> = ({
  columns,
  bottom,
  theme = 'dark',
  language,
  rootDomain = '',
  location,
  ...restProps
}) => {
  const [withMenu, setWithMenu] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const lang = language || i18n.language;
  const [isChinaMirrorHost] = useChinaMirrorHost();
  const products = getProducts({
    t,
    language: lang,
    rootDomain,
    isChinaMirrorHost,
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
    .filter((product) => product.category !== 'ecology')
    .map((product) => ({
      title: (
        <span>
          {product.title}
          <span className={styles.description}>{product.slogan}</span>
        </span>
      ),
      items: product.links,
    }));

  useEffect(() => {
    // 有 menu 的模版 footer 表现不同，通过 location 判断加载的模版
    const pathPrefix = withPrefix('/').replace(/\/$/, '');
    const path = location.pathname.replace(pathPrefix, '');
    const isExamplePage =
      path.startsWith(`/zh/examples`) || path.startsWith(`/en/examples`);
    const isDocsPage =
      path.startsWith(`/zh/docs`) || path.startsWith(`/en/docs`);
    // examples 页面里目前只有 gallery 是有 footer 的，
    // 且 gallery 会出现 `location.key = 'initial'` 逻辑，所以先统一处理为需要 menu
    if (isExamplePage) {
      setWithMenu(true);
    } else if (isDocsPage) {
      // 文档页为 404 时 footer 没有 menu
      setWithMenu(!((location as any).key === 'initial'));
    } else {
      setWithMenu(false);
    }
  }, [location]);

  const getColums = () => {
    if (products.length % 2 !== 0) {
      return [...defaultColumns];
    }
    return [...defaultColumns];
  };

  return (
    <RCFooter
      maxColumnsPerRow={5}
      theme={theme}
      columns={columns || getColums()}
      className={classnames(styles.footer, {
        [styles.withMenu]: withMenu,
      })}
      bottom={
        bottom || (
          <>
            <div className={styles.more}>
              <span className={styles.title}>{more.title}</span>
              {more.items.map((item: any) => (
                <div key={item.title} style={{ marginRight: 16 }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                    {item.title}
                  </a>
                  {item.description && <span>{`-  ${item.description}`}</span>}
                </div>
              ))}
            </div>
            <div className={styles.bottom}>
              <div>
                <a
                  href="https://weibo.com/antv2017"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WeiboOutlined />
                </a>
                <a
                  href="https://zhuanlan.zhihu.com/aiux-antv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ZhihuOutlined />
                </a>
                <a
                  href="https://github.com/antvis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined />
                </a>
                <a href={`${rootDomain}/${lang}/about`}>{t('关于我们')}</a>
                <a
                  href={OLD_SITE_DOMAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('返回旧版')}
                </a>
              </div>
              <div>
                © {new Date().getFullYear()} Made with ❤ by{' '}
                <a href="https://xtech.antfin.com/">XTech</a>
              </div>
            </div>
          </>
        )
      }
      {...omit(restProps, ['githubUrl'])}
    />
  );
};

export default Footer;
