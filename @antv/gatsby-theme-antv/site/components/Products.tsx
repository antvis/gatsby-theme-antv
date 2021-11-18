import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import { CATEGORIES, getNewProducts, ProductType } from './getProducts';
import { useChinaMirrorHost } from '../hooks';
import styles from './Product.module.less';

interface ProductsProps {
  show: boolean;
  rootDomain: string;
  language?: 'zh' | 'en';
  className?: string;
}

const Products: React.FC<ProductsProps> = ({ show, language, className }) => {
  const { t, i18n } = useTranslation();
  const [isChinaMirrorHost] = useChinaMirrorHost();
  const [products, setProducts] = React.useState<ProductType[]>([]);

  const lang = i18n.language === 'zh' ? 'zh' : 'en';
  React.useEffect(() => {
    getNewProducts({
      language: lang,
      isChinaMirrorHost,
    }).then((data) => {
      setProducts(data);
    });
  }, [lang, isChinaMirrorHost]);

  return (
    <>
      <div
        className={classNames(styles.products, className, {
          [styles.show]: !!show,
        })}
      >
        <div className={styles.container}>
          {CATEGORIES.map(({ name, type }, idx) => {
            return (
              <React.Fragment key={idx}>
                <h3>{t(name)}</h3>
                <ul>
                  {products
                    .filter((item) => item.category === type)
                    .map((product) => (
                      <Product
                        key={product.title}
                        name={product.title}
                        slogan={product.slogan || ''}
                        description={product.description}
                        url={product.links?.home?.url}
                        icon={product.icon as string}
                        links={product.links}
                        language={language || i18n.language}
                      />
                    ))}
                </ul>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className={styles.mask} />
    </>
  );
};

export default Products;
