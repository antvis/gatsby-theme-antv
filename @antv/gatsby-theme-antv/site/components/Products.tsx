import React from 'react';
import classNames from 'classnames';
import Product from './Product';
import { useTranslation } from 'react-i18next';
import { getProducts } from './getProducts';
import styles from './Product.module.less';

interface ProductsProps {
  style?: React.CSSProperties;
  show: boolean;
  rootDomain: string;
}

const Products: React.FC<ProductsProps> = ({
  style,
  show,
  rootDomain = '',
}) => {
  const { t, i18n } = useTranslation();
  const data = getProducts({
    t,
    language: i18n.language,
    rootDomain,
  });
  return (
    <>
      <div
        className={classNames(styles.products, {
          [styles.show]: !!show,
        })}
        style={style}
      >
        <h3>{t('基础产品')}</h3>
        <ul>
          {data
            .filter(item => item.category === 'basic')
            .map(product => (
              <Product
                key={product.title}
                name={`${product.title} ${product.slogan || ''}`}
                description={product.description}
                url={(product.links || [])[0].url}
                icon={product.icon as string}
                links={product.links}
              />
            ))}
        </ul>
        <h3>{t('拓展产品')}</h3>
        <ul>
          {data
            .filter(item => item.category === 'extension')
            .map(product => (
              <Product
                key={product.title}
                name={`${product.title} ${product.slogan || ''}`}
                description={product.description}
                url={(product.links || [])[0].url}
                icon={product.icon as string}
                links={product.links}
              />
            ))}
        </ul>
        <h3>{t('生态')}</h3>
        <ul>
          {data
            .filter(item => item.category === 'ecology')
            .map(product => (
              <Product
                key={product.title}
                name={`${product.title} ${product.slogan || ''}`}
                description={product.description}
                url={(product.links || [])[0].url}
                icon={product.icon as string}
              />
            ))}
        </ul>
      </div>
      <div className={styles.mask} />
    </>
  );
};

export default Products;
