import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.less';

const getDocument = (navs: Nav[], slug: string = '') =>
  navs.find(doc => doc.slug === slug) || {
    title: {} as { [key: string]: string },
  };

export interface Nav {
  slug: string;
  order: number;
  title: {
    [key: string]: string;
  };
  redirect?: string;
  target?: '_blank';
}

interface NavMenuItemsProps {
  navs: Nav[];
  path: string;
}

const NavMenuItems: React.FC<NavMenuItemsProps> = ({ navs = [], path }) => {
  const { i18n } = useTranslation();
  return (
    <>
      {navs.map((nav: Nav, i) => {
        const prefix = `/${i18n.language}/${nav.slug}`;
        const href = `${prefix}${nav.redirect ? `/${nav.redirect}` : ''}`;
        const className = classNames({
          [styles.activeItem]: path.startsWith(prefix),
        });
        return (
          <li key={i} className={className}>
            {nav.target === '_blank' ? (
              <a href={href} target="_blank">
                {getDocument(navs, nav.slug).title[i18n.language]}
              </a>
            ) : (
              <Link to={href}>
                {getDocument(navs, nav.slug).title[i18n.language]}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavMenuItems;
