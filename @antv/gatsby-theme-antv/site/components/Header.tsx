import { navigate } from 'gatsby';
import React from 'react';
import GithubCorner from 'react-github-corner';
import { useTranslation } from 'react-i18next';
import { Popover, Select } from 'antd';
import Search from './Search';
import Products from './Products';
import DocsMenuItems from './DocsMenuItems';
import styles from './Header.module.less';

const { Option } = Select;

export interface Doc {
  slug: string;
  order: number;
  title: {
    [key: string]: string;
  };
  redirect?: string;
}

interface HeaderProps {
  pathPrefix?: string;
  path?: string;
  /** 子标题 */
  subTitle?: string;
  /** 文档和演示的菜单数据 */
  docs?: Doc[];
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
}

const Header: React.FC<HeaderProps> = ({
  subTitle = '',
  pathPrefix = '',
  path = '',
  docs = [],
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
}) => {
  const { t, i18n } = useTranslation();
  const lang =
    typeof defaultLanguage !== 'undefined'
      ? defaultLanguage
      : i18n.language || '';
  const LogoLink = (link || '').startsWith('http') ? 'a' : Link;
  return (
    <header className={styles.header}>
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
                Link,
                {
                  [Link === 'a' ? 'href' : 'to']: `/${lang}`,
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
          {docs && docs.length ? (
            <DocsMenuItems docs={docs} path={path} />
          ) : null}
          <li>
            <Popover
              title={null}
              content={<Products />}
              placement="bottomRight"
              arrowPointAtCenter
            >
              <a>{t('所有产品')}</a>
            </Popover>
          </li>
          <li>
            <Popover
              title={null}
              content={<Products />}
              placement="bottomRight"
              arrowPointAtCenter
            >
              <a>{t('生态')}</a>
            </Popover>
          </li>
        </ul>
        {showLanguageSwitcher && (
          <Select
            size="small"
            style={{ width: 92, fontSize: 12 }}
            dropdownMatchSelectWidth={false}
            value={lang}
            onChange={(value: string) => {
              if (onLanguageChange) {
                return onLanguageChange(value);
              }
              if (path.endsWith(`/${lang}`)) {
                return navigate(`/${value}`);
              }
              navigate(
                path.replace(pathPrefix, '').replace(`/${lang}/`, `/${value}/`),
              );
            }}
          >
            <Option value="zh">🇨🇳 中文</Option>
            <Option value="en">🇺🇸 English</Option>
          </Select>
        )}
        {showGithubCorner && <GithubCorner href={githubUrl} size={64} />}
      </nav>
    </header>
  );
};

export default Header;
