import { navigate } from 'gatsby';
import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import Search from './Search';
import Products from './Products';
import NavMenuItems, { Nav } from './NavMenuItems';
import styles from './Header.module.less';

interface HeaderProps {
  pathPrefix?: string;
  path?: string;
  /** 子标题 */
  subTitle?: React.ReactNode;
  /** 子标题的链接 */
  subTitleHref?: string;
  /** 文档和演示的菜单数据 */
  navs?: Nav[];
  /** 是否显示搜索框 */
  showSearch?: boolean;
  /** 是否显示搜索框 */
  showGithubCorner?: boolean;
  /** 是否显示切换语言选项 */
  showLanguageSwitcher?: boolean;
  /** 切换语言的回调 */
  onLanguageChange?: (language: string) => void;
  /** 自定义 logo */
  logo?: {
    img?: React.ReactNode;
    link?: string;
  };
  /** github 仓库地址 */
  githubUrl?: string;
  /** 默认语言 */
  defaultLanguage?: 'zh' | 'en';
  /** 自定义 Link */
  Link?: React.ComponentType<any>;
  /** 底色是否透明 */
  transparent?: Boolean;
  /** AntV root 域名，直接用主题的可不传 */
  rootDomain?: string;
}

const Header: React.FC<HeaderProps> = ({
  subTitle = '',
  subTitleHref,
  pathPrefix = '',
  path = '',
  navs = [],
  showSearch = true,
  showGithubCorner = true,
  showLanguageSwitcher = true,
  logo: { img, link } = {
    img: (
      <img
        src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg"
        alt="AntV"
        width="94"
      />
    ),
    link: '',
  },
  onLanguageChange,
  githubUrl = 'https://github.com/antvis',
  defaultLanguage,
  Link = 'a',
  transparent,
  rootDomain = '',
}) => {
  const { t, i18n } = useTranslation();
  const lang =
    typeof defaultLanguage !== 'undefined'
      ? defaultLanguage
      : i18n.language || '';
  const LogoLink = (link || '').startsWith('http') ? 'a' : Link;
  const SubTitleLink = (subTitleHref || '').startsWith('http') ? 'a' : Link;
  const [productMenuVisible, setProductMenuVisible] = useState(true);
  const onProductMouseEnter = () => {
    setProductMenuVisible(true);
  };
  const onProductMouseLeave = () => {
    // setProductMenuVisible(false);
  };
  return (
    <header
      className={classNames(styles.header, {
        [styles.transparent]: !!transparent && !productMenuVisible,
      })}
    >
      <div className={styles.left}>
        <h1>
          {React.createElement(
            LogoLink,
            {
              [LogoLink === 'a' ? 'href' : 'to']: link || `/${lang}`,
            },
            img,
          )}
        </h1>
        {subTitle && (
          <>
            <span className={styles.divider} />
            <h2 className={styles.subProduceName}>
              {React.createElement(
                SubTitleLink,
                {
                  [SubTitleLink === 'a' ? 'href' : 'to']:
                    typeof subTitleHref === 'undefined'
                      ? `/${lang}`
                      : subTitleHref,
                },
                subTitle,
              )}
            </h2>
          </>
        )}
        {showSearch && <Search />}
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {navs && navs.length ? (
            <NavMenuItems navs={navs} path={path} />
          ) : null}
          <li
            onMouseEnter={onProductMouseEnter}
            onMouseLeave={onProductMouseLeave}
          >
            <a>
              {t('所有产品')}
              <Icon
                type="caret-down"
                className={classNames(styles.arrow, {
                  [styles.open]: productMenuVisible,
                })}
              />
            </a>
            <Products show={productMenuVisible} rootDomain={rootDomain} />
          </li>
          {showLanguageSwitcher && (
            <li>
              <a
                onClick={e => {
                  e.preventDefault();
                  const value = lang === 'en' ? 'zh' : 'en';
                  i18n.changeLanguage(value);
                  if (onLanguageChange) {
                    return onLanguageChange(value);
                  }
                  if (path.endsWith(`/${lang}`)) {
                    return navigate(`/${value}`);
                  }
                  navigate(
                    path
                      .replace(pathPrefix, '')
                      .replace(`/${lang}/`, `/${value}/`),
                  );
                }}
              >
                {t('English')}
              </a>
            </li>
          )}
          {showGithubCorner && (
            <li className={styles.githubCorner}>
              <a href={githubUrl} target="_blank">
                <Icon type="github" />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
