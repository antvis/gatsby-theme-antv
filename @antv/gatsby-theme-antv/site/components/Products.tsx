import React from 'react';
import classNames from 'classnames';
import Product from './Product';
import styles from './Product.module.less';

const Products: React.FC<{ style?: React.CSSProperties; show: boolean }> = ({
  style,
  show,
}) => (
  <div
    className={classNames(styles.products, {
      [styles.show]: !!show,
    })}
    style={style}
  >
    <h3>基础产品</h3>
    <ul>
      <Product
        name="G2"
        url="/g2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
    </ul>
    <h3>扩展产品</h3>
    <ul>
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
    </ul>
    <h3>生态</h3>
    <ul>
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
      <Product
        name="G2"
        description="一套基于可视化编码的图形语法"
        icon="https://gw.alipayobjects.com/zos/antfincdn/mpz%24sFOwuD/1852987f-0412-44e5-9d0d-75b06f392778.png"
        links={[
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
          {
            name: '关于',
            link: '',
          },
        ]}
      />
    </ul>
  </div>
);

export default Products;
