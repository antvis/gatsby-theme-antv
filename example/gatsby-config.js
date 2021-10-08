const { version, repository, homepage } = require('./package.json');

module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        GATrackingId: `UA-148148901-11`,
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
    showWxQrcode: true,
    wxQrcode:
      'https://gw.alipayobjects.com/zos/antfincdn/ZKlx96dsfs/qrcode_for_gh_f52d8b6aa591_258.jpg',
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
      {
        slug: 'scatter',
        icon: 'scatter',
        title: {
          zh: '散点图',
          en: 'Scatter',
        },
      },
      {
        slug: 'radar',
        icon: 'radar',
        title: {
          zh: '雷达图',
          en: 'Radar',
        },
      },
    ],
    versions: {
      [version]: 'https://ant.design',
      '2.x': 'https://2x.ant.design',
      '1.x': 'https://1x.ant.design',
    },
    ecosystems: [
      {
        name: {
          zh: '蚂蚁设计',
          en: 'Ant Design',
        },
        url: 'https://2x.ant.design',
      },
      {
        name: {
          zh: '图表加工厂',
          en: 'ChartCube',
        },
        url: 'https://chartcube.alipay.com/',
      },
    ],
    playground: {
      container: '<div id="container" class="ok" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
      dependencies: {
        '@antv/l7': 'beta',
      },
      devDependencies: {
        typescript: 'latest',
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
    // 更新公告
    announcement: {
      zh: '1. 文档更新啦！请前往 API 文档，查看图表组件说明。2. 欢迎大家体验周边生态 Theme-Set 和 vis-dashboard。',
      en: 'Docs updated! Please go to the page of API Docs see the details.',
    },
  },
};
