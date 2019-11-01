# Gatsby Theme for AntV 📈

[![](https://flat.badgen.net/npm/v/@antv/gatsby-theme-antv?icon=npm)](https://www.npmjs.com/package/@antv/gatsby-theme-antv)
[![NPM downloads](http://img.shields.io/npm/dm/@antv/gatsby-theme-antv.svg?style=flat-square)](http://npmjs.com/@antv/gatsby-theme-antv)
![CI status](https://github.com/antvis/gatsby-theme-antv/workflows/Node%20CI/badge.svg)
[![Dependency Status](https://david-dm.org/antvis/gatsby-theme-antv.svg?style=flat-square&path=@antv/gatsby-theme-antv)](https://david-dm.org/antvis/gatsby-theme-antv?path=@antv/gatsby-theme-antv)
[![devDependencies Status](https://david-dm.org/antvis/gatsby-theme-antv/dev-status.svg?style=flat-square&path=@antv/gatsby-theme-antv)](https://david-dm.org/antvis/gatsby-theme-antv?type=dev&path=@antv/gatsby-theme-antv)
![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)


## Usage

✨ AntV 站点[接入方式](https://github.com/antvis/antvis.github.io/issues/18#issuecomment-548754442)

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
    docs: [
      {
        slug: 'specification',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
        order: 0,
        redirect: 'getting-started',
      },
    ],
  },
};
```

Sample repository: https://github.com/antvis/antvis.github.io

## Components

```jsx
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Header from '@antv/gatsby-theme-antv/site/components/Header';
import Footer from '@antv/gatsby-theme-antv/site/components/Footer';

// @antv/gatsby-theme-antv/components/Header for commonjs version

const Layout = () => {
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
