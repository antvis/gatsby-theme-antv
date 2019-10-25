import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Doc } from './Header';
import styles from './Header.module.less';

const getDocument = (docs: Doc[], slug: string = '') =>
  docs.find(doc => doc.slug === slug) || {
    title: {} as { [key: string]: string },
  };

interface DocsMenuItemsProps {
  docs: Doc[];
  path: string;
}

const DocsMenuItemsProps: React.FC<DocsMenuItemsProps> = ({
  docs = [],
  path,
}) => {
  const { i18n } = useTranslation();
  return (
    <>
      {docs
        .filter((doc: Doc) => (doc.slug || '').split('/').length === 1)
        .map((doc: Doc) => {
          const slugPrefix = (doc.slug || '').split('/')[0];
          return (
            <li key={doc.slug}>
              <Link
                to={`/${i18n.language}/docs/${doc.slug}/${doc.redirect || ''}`}
                className={classNames({
                  [styles.active]: path.startsWith(
                    `/${i18n.language}/docs/${doc.slug}`,
                  ),
                })}
              >
                {getDocument(docs, slugPrefix).title[i18n.language]}
              </Link>
            </li>
          );
        })}
    </>
  );
};

export default DocsMenuItemsProps;
