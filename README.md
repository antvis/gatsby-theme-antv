# Gatsby Theme for AntV ⚛

[![](https://flat.badgen.net/npm/v/@antv/gatsby-theme-antv?icon=npm)](https://www.npmjs.com/package/@antv/gatsby-theme-antv)
[![NPM downloads](http://img.shields.io/npm/dm/@antv/gatsby-theme-antv.svg?style=flat-square)](http://npmjs.com/@antv/gatsby-theme-antv)
![CI status](https://github.com/antvis/gatsby-theme-antv/workflows/Node%20CI/badge.svg)
[![Dependency Status](https://david-dm.org/antvis/gatsby-theme-antv.svg?style=flat-square&path=@antv/gatsby-theme-antv)](https://david-dm.org/antvis/gatsby-theme-antv?path=@antv/gatsby-theme-antv)
[![devDependencies Status](https://david-dm.org/antvis/gatsby-theme-antv/dev-status.svg?style=flat-square&path=@antv/gatsby-theme-antv)](https://david-dm.org/antvis/gatsby-theme-antv?type=dev&path=@antv/gatsby-theme-antv)
![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## How to use it for AntV

- ✨ AntV 站点 [接入方式](https://github.com/antvis/antvis.github.io/issues/18#issuecomment-548754442)
- 参考例子: https://github.com/antvis/gatsby-theme-antv/tree/master/example

## Usage

```bash
npm install gatsby @antv/gatsby-theme-antv react-i18next --save-dev
```

Add `gatsby-config.js`:

```js
// gatsby-config.js
const { repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: `@antv/gatsby-theme-antv`,
      options: {
        // pagesPath: './site/pages',
        GATrackingId: `UA-XXXXXXXXX-X`,
        primaryColor: '#722ED1',
        pathPrefix: '/g2',
      },
    },
  ],
  siteMetadata: {
    title: `AntV`,
    description: `Ant Visualization solution home page`,
    githubUrl: repository.url,
    navs: [], // 用于定义顶部菜单
    docs: [], // 用于定义文档页面的二级分类菜单
    examples: [], // 用于定义演示页面的二级菜单，属性见下方
  },
};
```

- `navs`: [props](https://github.com/antvis/gatsby-theme-antv/blob/72638a8be44f84b7afc6c2294fb7814eb13cff56/%40antv/gatsby-theme-antv/gatsby-node.js#L248)
- `docs`: [props](https://github.com/antvis/gatsby-theme-antv/blob/72638a8be44f84b7afc6c2294fb7814eb13cff56/%40antv/gatsby-theme-antv/gatsby-node.js#L235)
- `examples`: [props](https://github.com/antvis/gatsby-theme-antv/blob/72638a8be44f84b7afc6c2294fb7814eb13cff56/%40antv/gatsby-theme-antv/gatsby-node.js#L241)

## Components

- [Header Props](https://github.com/antvis/gatsby-theme-antv/blob/master/%40antv/gatsby-theme-antv/site/components/Header.tsx#L13-L39)
- [Footer Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/Footer.tsx#L149-L159)
- [SEO Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/Seo.tsx#L12-L17)
- [BannerPage Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/BannerPage.tsx#L27-L29)
- [AdvantagesPage Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/AdvantagesPage.tsx#L16-L19)
- [CompaniesPage Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/CompaniesPage.tsx#L11-L14)

```jsx
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Header from '@antv/gatsby-theme-antv/site/components/Header';
import Footer from '@antv/gatsby-theme-antv/site/components/Footer';
import BannerPage from '@antv/gatsby-theme-antv/site/components/BannerPage';
import AdvantagesPage from '@antv/gatsby-theme-antv/site/components/AdvantagesPage';
import CompaniesPage from '@antv/gatsby-theme-antv/site/components/CompaniesPage';

// @antv/gatsby-theme-antv/components/Header for commonjs version

const Layout = () => {
  const advantages = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
  ];
  const companies = [
    {
      index: 0,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 1,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  return (
    <>
      <SEO title="蚂蚁数据可视化" lang="zh" />
      <Header
        subTitle="子产品名"
        logo={{
          link: 'https://antv.alipay.com',
          img: <img src="url" />,
        }}
        githubUrl="https://github.com/antvis/g2"
        // docs={[]}
        showSearch={false}
        showGithubCorner={false}
        showLanguageSwitcher={false}
        onLanguageChange={language => {
          console.log(language);
        }}
        defaultLanguage="zh"
      />
      <Footer
      // columns={[]}
      // bottom={<div>powered by antv</div>}
      />

      <BannerPage
        bannerSVG={<svg></svg>} // 右侧 banner svg 内容
      />
      <AdvantagesPage
        title="优势页面名称" // 可不传
        advantages={advantages} // 必传
      />
      <CompaniesPage
        title="公司页面名称" // 必传
        companies={companies} // 必传
      />
    </>
  );
};
```

## Develop

```bash
yarn install
yarn start
```

Visit https://localhost:8000 to preview.

## Publish to npm

```bash
cd @antv/gatsby-theme-antv
npm publish
```

## Deploy

```bash
npm run deploy
```

> Set envoironment variable `GATSBY_PATH_PREFIX` to `/` in deploy service like netlify to preview pathPrefix site in root domain.

## Used libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [react-i18next](https://react.i18next.com/)

## Websites using it

- https://github.com/antvis/antvis.github.io
