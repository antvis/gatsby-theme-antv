const { version, repository, homepage } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        GATrackingId: `UA-148148901-11`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true,
      },
    },
  ],
  siteMetadata: {
    title: 'AntV test site',
    description: 'Ant Visualization solution home page',
    siteUrl: homepage,
    githubUrl: repository.url,
    showChartResize: true,
    showAPIDoc: true,
    themeSwitcher: 'g2plot',
    galleryMenuCloseAll: true,
    navs: [
      {
        slug: 'docs/specification/getting-started',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
      },
      {
        slug: 'docs/api',
        title: {
          zh: 'API 文档示例',
          en: 'API docs',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '图表示例',
          en: 'Examples',
        },
      },
      {
        slug: 'independent',
        title: {
          zh: '独立',
          en: 'MyApp',
        },
        // target: '_blank',
      },
    ],
    docs: [
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1',
        },
        order: 4,
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level',
        },
        order: 2,
      },
      {
        slug: 'api/antv',
        title: {
          zh: '测试 G2',
          en: 'test G2',
        },
        order: 0,
      },
      {
        slug: 'api/g2plot',
        title: {
          zh: 'G2Plot',
          en: 'G2Plot',
        },
        order: 1,
      },
    ],
    examples: [
      {
        slug: 'category',
        icon: 'pie',
        title: {
          zh: '饼图分类',
          en: 'Category',
        },
      },
    ],
    versions: {
      [version]: 'https://ant.design',
      '2.x': 'https://2x.ant.design',
      '1.x': 'https://1x.ant.design',
    },
    playground: {
      container: '<div id="container" class="ok" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
      dependencies: {
        '@antv/l7': 'beta',
      },
      htmlCodeTemplate: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
  </head>
  <body>
    <div id="container" />
    <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-3.5.1/dist/g2.min.js"></script>
    <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.10.1/dist/data-set.min.js"></script>
    <script>
{{code}}
    </script>
  </body>
</html>`,
    },
    mdPlayground: {
      // markdown 文档中的 playground 若干设置
      splitPaneMainSize: '50%',
    },
    redirects: [],
  },
};
