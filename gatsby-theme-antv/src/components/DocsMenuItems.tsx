import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { Doc } from './header';
import styles from './header.module.less';

const getDocument = (docs: Doc[], slug: string = '') =>
  docs.find(doc => doc.slug === slug) || {
    title: {} as { [key: string]: string },
  };

interface DocsMenuItemsProps {
  docs: Doc[];
  currentLangKey?: string;
}

const DocsMenuItemsProps: React.FC<DocsMenuItemsProps> = ({
  docs = [],
  currentLangKey = '',
}) => {
  return (
    <>
      {docs
        .filter((doc: Doc) => (doc.slug || '').split('/').length === 1)
        .map((doc: Doc) => {
          const slugPrefix = (doc.slug || '').split('/')[0];
          return (
            <li key={doc.slug}>
              <Link
                to={`/${currentLangKey}/docs/${doc.slug}/${doc.redirect || ''}`}
                className={classNames({
                  [styles.active]: location.pathname.startsWith(
                    `/${currentLangKey}/docs/${doc.slug}`,
                  ),
                })}
              >
                {getDocument(docs, slugPrefix).title[currentLangKey]}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default DocsMenuItemsProps;
