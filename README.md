<div align="center">

<img width="1295" alt="图片" src="https://user-images.githubusercontent.com/507615/69481549-49b39d00-0e4d-11ea-87fd-1e7741f4bdf1.png">

# Gatsby Theme for AntV ⚛

✨ Polished Gatsby theme for documentation site.

[![](https://flat.badgen.net/npm/v/@antv/gatsby-theme-antv?icon=npm)](https://www.npmjs.com/package/@antv/gatsby-theme-antv)
[![NPM downloads](http://img.shields.io/npm/dm/@antv/gatsby-theme-antv.svg?style=flat-square)](http://npmjs.com/@antv/gatsby-theme-antv)
![CI status](https://github.com/antvis/gatsby-theme-antv/workflows/Node%20CI/badge.svg)

[![Dependency Status](https://david-dm.org/antvis/gatsby-theme-antv.svg?style=flat-square&path=@antv/gatsby-theme-antv)](https://david-dm.org/antvis/gatsby-theme-antv?path=@antv/gatsby-theme-antv)
[![devDependencies Status](https://david-dm.org/antvis/gatsby-theme-antv/dev-status.svg?style=flat-square&path=@antv/gatsby-theme-antv)](https://david-dm.org/antvis/gatsby-theme-antv?type=dev&path=@antv/gatsby-theme-antv)
![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

</div>

## Features

- ⚛ Prerendered static site
- 🌎 Internationalization support by i18next
- 📝 Markdown-based documentation and menus
- 🎬 Examples with live playground
- 🏗 Unified Theme and Layout
- 🆙 Easy customized header nav
- 🧩 Built-in home page components

## Websites using it

- ✨ https://antv.vision
- ✨ https://g2plot.antv.vision
- ✨ https://g2.antv.vision
- ✨ https://g6.antv.vision
- ✨ https://x6.antv.vision
- ✨ https://f2.antv.vision
- ✨ https://l7.antv.vision
- ✨ https://graphin.antv.vision
- ✨ https://g.antv.vision
- ✨ https://gwebgpu.antv.vision

## Usage

Create a Gatsby site from [gatsby-starter-theme-antv](https://github.com/antvis/gatsby-starter-theme-antv).

```bash
$ yarn global add gatsby-cli // or npm install gatsby-cli -g
$ gatsby new mysite https://github.com/antvis/gatsby-starter-theme-antv
```

Start developing.

```bash
$ cd mysite
$ yarn start
```

> ✨ AntV 站点 [接入方式](https://github.com/antvis/antvis.github.io/issues/18#issuecomment-548754442) 和 [额外功能](https://github.com/antvis/antvis.github.io/issues/18#issuecomment-568692771)

### `gatsby-config.js`

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
        pathPrefix: '/g2',
        // antd 主题：https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        theme: {
          'primary-color': '#873bf4',
        },
        pwa: true, // 是否开启 gatsby-plugin-offline
        cname: true, // 是否自动从 siteUrl 中提取 CNAME 文件
        codeSplit: true, // 是否开启 gatsby 按路由的代码分割，默认为 false
      },
    },
  ],
  siteMetadata: {
    title: `AntV`,
    description: `Ant Visualization solution home page`,
    githubUrl: repository.url,
    logoUrl: '', // 自定义 logo
    navs: [], // 用于定义顶部菜单
    docs: [], // 用于定义文档页面的二级分类菜单
    examples: [], // 用于定义演示页面的二级菜单，属性见下方
    isAntVSite: false, //是否是AntV官网，header样式footer和图表详情页均为定制
    galleryMenuCloseAll: false, // 是否默认收起 gallery 页面所有 menu
    showSearch: true, // 是否展示搜索框
    showChinaMirror: true, // 是否展示国内镜像链接
    showLanguageSwitcher: true, // 用于定义是否展示语言切换
    showAntVProductsCard: true, // 是否展示 AntV 系列产品的卡片链接
    showGithubCorner: true, // 是否展示角落的 GitHub 图标
    showChartResize: true, // 是否在demo页展示图表视图切换
    themeSwitcher: 'g2', // 是否在demo页展示主题切换, 取值为'g2' | 'g2plot' 如果不设置则不展示主题切换工具
    showAPIDoc: true, // 是否在demo页展示API文档
    mdPlayground: {
      // markdown 文档中的 playground 若干设置
      splitPaneMainSize: '62%',
    },
    playground: {
      container: '<canvas id="container" />', // 定义演示的渲染节点，默认 <div id="container" />
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
      devDependencies: {
        // 如果 example 是 ts 文件，需要加上 ts 依赖，才能在 codesandbox 正确运行
        typescript: 'latest',
      },
    },
    versions: [
      {
        '1.x': 'https://1x.ant.design',
        '2.x': 'https://2x.ant.design',
        '3.x': 'https://ant.design',
        '4.x': 'https://next.ant.design',
      },
    ],
    redirects: [
      {
        from: /\/old-url/,
        to: '/new-url', // 不指定 to 时直接跳转到 https://antv-2018.alipay.com/***
      },
    ],
    announcement: {
      zh: '站内公告，用于展示一些更新信息，如：文档更新、版本发布等',
      en: 'The announcement in the website, used to display some updated information, such as document update, version release and etc',
    },
  },
};
```

- `navs`: [props](https://github.com/antvis/gatsby-theme-antv/blob/aa8cdd7e24e965174cbe7173a841fd7d23537e52/%40antv/gatsby-theme-antv/gatsby-node.js#L242-L264)
- `docs`: [props](https://github.com/antvis/gatsby-theme-antv/blob/aa8cdd7e24e965174cbe7173a841fd7d23537e52/%40antv/gatsby-theme-antv/gatsby-node.js#L242-L264)
- `examples`: [props](https://github.com/antvis/gatsby-theme-antv/blob/aa8cdd7e24e965174cbe7173a841fd7d23537e52/%40antv/gatsby-theme-antv/gatsby-node.js#L242-L264)

### Components

- [Header Props](https://github.com/antvis/gatsby-theme-antv/blob/master/%40antv/gatsby-theme-antv/site/components/Header.tsx#L13-L39)
- [Footer Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/Footer.tsx#L149-L159)
- [SEO Props](https://github.com/antvis/gatsby-theme-antv/blob/046a9c4e32eea50b49347b114714425a9f99b4b7/%40antv/gatsby-theme-antv/site/components/Seo.tsx#L12-L17)
- [Banner Props](https://github.com/antvis/gatsby-theme-antv/blob/c6178d1baeebce4ef4e31773a6b533020b662b27/%40antv/gatsby-theme-antv/site/components/Banner.tsx#L8-L31)
- [Features Props](https://github.com/antvis/gatsby-theme-antv/blob/c6178d1baeebce4ef4e31773a6b533020b662b27/%40antv/gatsby-theme-antv/site/components/Features.tsx#L7-L17)
- [Cases Props](https://github.com/antvis/gatsby-theme-antv/blob/c6178d1baeebce4ef4e31773a6b533020b662b27/%40antv/gatsby-theme-antv/site/components/Cases.tsx#L14-L25)
- [Companies Props](https://github.com/antvis/gatsby-theme-antv/blob/c6178d1baeebce4ef4e31773a6b533020b662b27/%40antv/gatsby-theme-antv/site/components/Companies.tsx#L6-L16)

```jsx
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Header from '@antv/gatsby-theme-antv/site/components/Header';
import Footer from '@antv/gatsby-theme-antv/site/components/Footer';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Applications from '@antv/gatsby-theme-antv/site/components/Applications';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';

// @antv/gatsby-theme-antv/components/Header for commonjs version

const Layout = () => {
  const features = [
    {
      icon: 'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
      title: 'xxxxx',
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
  ];
  const cases = [
    {
      logo: 'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*2Ij9T76DyCcAAAAAAAAAAABkARQnAQ',
      title: '灯塔专业版',
      description:
        '深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金深入金融的基金',
      link: '#',
      image:
        'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*oCd7Sq3N-QEAAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  const companies = [
    {
      name: '公司1',
      image:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: '公司2',
      image:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    // ...
  ];
  const notifications = [
    {
      type: '测试',
      title: 'G6 3.2 全新上线！',
      date: '2019.12.04',
      link: '#',
    },
  ];

  const downloadButton = {
    text: '下载使用',
    link: 'https://antv.alipay.com/zh-cn/index.html',
  };

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
        onLanguageChange={(language) => {
          console.log(language);
        }}
        defaultLanguage="zh"
      />
      <Footer
      // columns={[]}
      // bottom={<div>powered by antv</div>}
      />

      <Banner
        coverImage={<svg></svg>} // 右侧 banner svg 内容
        title="主页标题"
        description="主页描述内容描述内容描述内容描述内容"
        buttonText="按钮文字"
        buttonHref={'#按钮链接路径'}
        notifications={notifications} // 可传 1-2 个内容，若不传则显示 2 个默认通知
        style={{}}
        className="Banner 的 className"
        video="视频按钮点开后视频的链接，不传则不会出现视频按钮"
        githubStarLink="Github Star 链接，不传则不会出现 GitHub Start 按钮"
        downloadButton={downloadButton} // 不传则不会出现下载按钮
      />
      <Features
        title="优势页面名称" // 可不传
        features={features} // 必传
        style={{}}
        className="Features 的 className"
      />
      <Cases cases={cases} style={{}} className="Cases 的 className" />
      <Companies
        title="公司页面名称" // 必传
        companies={companies} // 必传
        style={{}}
        className="Companies 的 className"
      />
    </>
  );
};
```

### Custom Tag in Markdown

We support three type of custom tags in markdown

- **tag**

```md
<tag color="green" text="分类图例">分类图例</tag>
```

See [antd Tag components](https://ant.design/components/tag/) for more usage.

- **swatch**

```md
<swatch colors="#F4664A,#30BF78,#FAAD14" colorNames="Red,Green,Yellow"></swatch>
```

swatch props:

| name       | description | isRequired | type     | default  |
| ---------- | ----------- | ---------- | -------- | -------- |
| title      | -           | true       | string   | -        |
| darkmode   | -           | false      | boolean  | -        |
| colors     | -           | false      | string   | -        |
| colornames | -           | false      | string   | -        |
| grid       | -           | false      | 'sudoku' | 'sudoku' |

- **playground**

Insert demos to markdown document as code playground.

将 demo 以代码预览效果插入到 markdown 文档中。

![](https://gw.alipayobjects.com/mdn/rms_d3dd43/afts/img/A*aXkmTKkZ404AAAAAAAAAAAAAARQnAQ)

```md
<playground path='category/basic/demo/ts-demo.ts' rid='container'></playground>
```

playground props:

| name   | description                                              | isRequired | type   | default     |
| ------ | -------------------------------------------------------- | ---------- | ------ | ----------- |
| path   | demo relative path                                       | true       | string | -           |
| height | height of code playground                                | false      | number | 400         |
| rid    | specify the container ID when more than one demo in docs | false      | string | 'container' |

## Develop

```bash
yarn install
yarn start
```

Visit https://localhost:8000 to preview.

## Publish to npm

⚠️ If it is your first time for GitHub release, please read the following steps, otherwise, you can skip directly to the third step.

1. Generate a [personal access token](https://github.com/settings/tokens):
   (release-it only needs "repo" access; no "admin" or other scopes).

![generate token](https://gw.alipayobjects.com/zos/antfincdn/or185CJhTK/20200814154850.jpg)

Click the button 'Generate token', then your token would be generated. Copy this token as soon as you get it since you won’t be able to see it again after refreshing the web page!

2. Make sure the token is available as an environment variable.

Example:

```bash
export GITHUB_TOKEN="YOUR TOKEN"
```

In macOS or Linux, this can be added to e.g. ~/.profile or ~/.zshrc, so it's available everytime the shell is used.

More details for the GitHub releases preperation: [GitHub Releases](https://github.com/release-it/release-it/blob/master/docs/github-releases.md)

3. Run the following commands in your terminal.

```bash
cd @antv/gatsby-theme-antv
npm run release
```

## Deploy

```bash
npm run deploy
```

> Set envoironment variable `GATSBY_PATH_PREFIX` to `/` in deploy service like netlify to preview pathPrefix site in root domain.

## Add Dependency

```bash
cd @antv/gatsby-theme-antv
yarn add shallowequal
```

or

```bash
yarn workspace @antv/gatsby-theme-antv add shallowequal
```

## Q&A

### How to customise layout footer?

```js
// gatsby-browser.js
exports.wrapPageElement = ({ element, props }) => {
  return React.cloneElement(element, {
    ...props,
    ...element.props,
    // https://github.com/react-component/footer#api
    footerProps: {
      bottom: 'xxx',
    },
  });
};
```

### How to embed other markdown document in a markdown document

```markdown
`markdown:docs/common/data-mapping.zh.md`
```

_docs/common/data-mapping.zh.md_ is the path relative to the current project. It supports multiple levels of nested.

## Related libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Ant Design](https://github.com/ant-design/ant-design)
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/?=highlight#line-highlighting)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [react-i18next](https://react.i18next.com/)
