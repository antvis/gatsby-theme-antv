import React from 'react';
import styles from './Product.module.less';

interface ProductProps {
  name?: string;
  icon?: string;
  description?: string;
  url?: string;
  links?: Array<{
    title: React.ReactNode;
    url?: string;
    icon?: React.ReactNode;
    openExternal?: boolean;
  }>;
  style?: React.CSSProperties;
}

const Product: React.FC<ProductProps> = ({
  name,
  icon,
  url = '',
  description,
  links = [],
  style,
}) => (
  <li className={styles.product} style={style}>
    <a href={url} target={url.startsWith('http') ? '_blank' : '_self'}>
      <img alt={name} src={icon} />
    </a>
    <div className={styles.productContent}>
      <a href={url} target={url.startsWith('http') ? '_blank' : '_self'}>
        <h4>{name}</h4>
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
