import { Link, navigate } from 'gatsby';
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
  /** 文档菜单数据 */
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
  logo?: React.ReactNode;
  /** github 仓库地址 */
  githubUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  subTitle = '',
  pathPrefix = '',
  path = '',
  docs = [],
  showSearch = true,
  showGithubCorner = true,
  showLanguageSwitcher = true,
  logo,
  onLanguageChange,
  githubUrl = 'https://github.com/antvis',
}) => {
  const { t, i18n } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>
          <a href={`/${i18n.language}`}>
            {typeof logo === 'undefined' ? (
              <img
                src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg"
                alt="AntV"
              />
            ) : (
              logo
            )}
          </a>
        </h1>
        {subTitle && (
          <>
            <span className={styles.divider} />
            <h2 className={styles.subProduceName}>
              <Link to={`/${i18n.language}` || '/'}>{subTitle}</Link>
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
            value={i18n.language}
            onChange={(value: string) => {
              if (onLanguageChange) {
                return onLanguageChange(value);
              }
              if (path.endsWith(`/${i18n.language}`)) {
                return navigate(`/${value}`);
              }
              navigate(
                path
                  .replace(pathPrefix, '')
                  .replace(`/${i18n.language}/`, `/${value}/`),
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
