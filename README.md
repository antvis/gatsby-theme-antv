# Gatsby Theme for AntV 📈

[![](https://flat.badgen.net/npm/v/@antv/gatsby-theme-antv?icon=npm)](https://www.npmjs.com/package/@antv/gatsby-theme-antv)
[![NPM downloads](http://img.shields.io/npm/dm/@antv/gatsby-theme-antv.svg?style=flat-square)](http://npmjs.com/@antv/gatsby-theme-antv)
![CI status](https://github.com/antvis/gatsby-theme-antv/workflows/Node%20CI/badge.svg)
[![Dependency Status](https://david-dm.org/antvis/gatsby-theme-antv.svg?style=flat-square)](https://david-dm.org/antvis/gatsby-theme-antv)
[![devDependencies Status](https://david-dm.org/antvis/gatsby-theme-antv/dev-status.svg)](https://david-dm.org/antvis/gatsby-theme-antv?type=dev)
![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Usage

```bash
npm install gatsby @antv/gatsby-theme-antv i18next react-i18next --save-dev
```

Add `gatsby-config.js` and `gatsby-browser.js`:

```js
// gatsby-config.js
const { homepage, repository } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: `@antv/gatsby-theme-antv`,
      options: {
        pagesPath: './site/pages',
        GATrackingId: `UA-XXXXXXXXX-X`,
        primaryColor: '#722ED1',
      },
    },
  ],
  siteMetadata: {
    title: `AntV`,
    description: `Ant Visualization solution home page`,
    siteUrl: homepage,
    githubUrl: repository.url,
    languages: {
      langs: ['en', 'zh'],
      defaultLangKey: 'zh',
    },
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

```jsx
// gatsby-browser.js
import i18n from 'i18next';
import locale from './site/locale.json';

i18n.addResources('en', 'translation', locale.en.translation);
```

Sample repository: https://github.com/antvis/antvis.github.io

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

Not ready.

## Used libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [react-i18next](https://react.i18next.com/)

## Websites using it

- https://github.com/antvis/antvis.github.io
