import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import { useTranslation } from 'react-i18next';
import ExternalLinkIcon from './ExternalLinkIcon';
import styles from './Header.module.less';

const getDocument = (navs: Nav[], slug = '') =>
  navs.find(doc => doc.slug === slug) || {
    title: {} as { [key: string]: string },
  };

export interface Nav {
  slug: string;
  order: number;
  title: {
    [key: string]: string;
  };
  target?: '_blank';
}

interface NavMenuItemsProps {
  navs: Nav[];
  path: string;
}

const capitalize = (s: string) => {
  if (typeof s !== 'string') {
    return '';
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const NavMenuItems: React.FC<NavMenuItemsProps> = ({ navs = [], path }) => {
  const { i18n } = useTranslation();
  return (
    <>
      {navs.map((nav: Nav) => {
        const href = nav.slug.startsWith('http')
          ? nav.slug
          : `/${i18n.language}/${nav.slug}`;
        const title = capitalize(
          getDocument(navs, nav.slug).title[i18n.language],
        );
        const className = classNames('header-menu-item-active', {
          [styles.activeItem]:
            path.startsWith(href) ||
            shallowequal(
              path.split('/').slice(0, 4),
              href.split('/').slice(0, 4),
            ),
        });
        return (
          <li key={title} className={className}>
            {nav.target === '_blank' || href.startsWith('http') ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {title}
                <ExternalLinkIcon />
              </a>
            ) : (
              <Link to={href}>{title}</Link>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavMenuItems;
