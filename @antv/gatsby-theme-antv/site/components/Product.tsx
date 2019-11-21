import React from 'react';
import styles from './Product.module.less';

interface ProductProps {
  name?: string;
  icon?: string;
  slogan?: string;
  description?: string;
  url?: string;
  links?: Array<{
    title: React.ReactNode;
    url?: string;
    icon?: React.ReactNode;
    openExternal?: boolean;
  }>;
  style?: React.CSSProperties;
  language?: string;
}

const Product: React.FC<ProductProps> = ({
  name,
  icon,
  url = '',
  slogan,
  description,
  links = [],
  style,
  language,
}) => (
  <li className={styles.product} style={style}>
    <a href={url} target={url.startsWith('http') ? '_blank' : '_self'}>
      <img alt={name} src={icon} />
    </a>
    <div className={styles.productContent}>
      <a href={url} target={url.startsWith('http') ? '_blank' : '_self'}>
        <h4>
          {name}
          <span
            className={styles.productSlogan}
            style={{ opacity: language === 'en' ? 0.7 : '' }}
          >
            {slogan}
          </span>
        </h4>
      </a>
      <div className={styles.productDescription}>{description}</div>
      <div className={styles.productLinks}>
        {links.slice(0, 2).map(item => (
          <a
            href={item.url}
            target={(item.url || '').startsWith('http') ? '_blank' : '_self'}
            key={item.url}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  </li>
);

export default Product;
