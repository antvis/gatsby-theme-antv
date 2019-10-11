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
  location?: Location;
  currentLangKey?: string;
  docs: Doc[];
}

const Header: React.FC<HeaderProps> = ({
  siteTitle = '',
  location = { pathname: '' },
  currentLangKey = '',
  docs = [],
}) => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>
          <Link to="/">
            <img
              src="https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg"
              alt={siteTitle}
            />
          </Link>
        </h1>
        <span className={styles.divider} />
        <Search />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <DocsMenuItems docs={docs} currentLangKey={currentLangKey} />
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
          style={{ width: 90, fontSize: 12 }}
          dropdownMatchSelectWidth={false}
          value={currentLangKey}
          onChange={(value: string) => {
            navigate(
              location.pathname.replace(`/${currentLangKey}/`, `/${value}/`),
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
