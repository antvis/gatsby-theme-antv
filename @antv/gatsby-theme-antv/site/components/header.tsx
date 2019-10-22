import { Link, navigate } from 'gatsby';
import React from 'react';
import GithubCorner from 'react-github-corner';
import { useTranslation } from 'react-i18next';
import { Popover, Select } from 'antd';
import Search from './search';
import Products from './products';
import DocsMenuItems from './DocsMenuItems';
import styles from './header.module.less';

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
  siteTitle?: string;
  pathPrefix: string;
  path: string;
  docs: Doc[];
}

const Header: React.FC<HeaderProps> = ({
  siteTitle = '',
  pathPrefix = '/',
  path,
  docs = [],
}) => {
  const { t, i18n } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>
          <a href="/">
            <img
              src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg"
              alt="AntV"
            />
          </a>
        </h1>
        {pathPrefix !== '/' && (
          <>
            <span className={styles.divider} />
            <h2 className={styles.subProduceName}>
              <Link to={`/${i18n.language}`}>{siteTitle}</Link>
            </h2>
          </>
        )}
        <Search />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <DocsMenuItems docs={docs} path={path} />
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
        <Select
          size="small"
          style={{ width: 92, fontSize: 12 }}
          dropdownMatchSelectWidth={false}
          value={i18n.language}
          onChange={(value: string) => {
            navigate(
              path
                .replace(pathPrefix, '')
                .replace(`/${i18n.language}/`, `/${value}/`),
            );
          }}
        >
          <Option value="en">🇺🇸 English</Option>
          <Option value="zh">🇨🇳 中文</Option>
        </Select>
        <GithubCorner href="https://github.com/antvis" size={64} />
      </nav>
    </header>
  );
};

export default Header;
