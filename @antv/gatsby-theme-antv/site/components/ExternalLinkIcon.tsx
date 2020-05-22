import React from 'react';
import ExternalLink from '../images/external-link.svg';
import styles from './ExternalLinkIcon.module.less';

const ExternalLinkIcon: React.FC = () => (
  <i className={styles.export}>
    <ExternalLink />
  </i>
);

export default ExternalLinkIcon;
