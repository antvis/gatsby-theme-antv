module.exports = {
  plugins: [
    {
      resolve: '@antv/gatsby-theme-antv',
      options: {
        pathPrefix: '/gatsby-theme-antv',
      },
    },
  ],
  siteMetadata: {
    title: 'AntV test site',
    description: 'Ant Visualization solution home page',
    siteUrl: 'https://test.antv.vision/gatsby-theme-antv',
    githubUrl: 'https://github.com/antvis/antvis.github.io',
    navs: [
      {
        slug: 'docs/specification/getting-started',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
      },
      {
        slug: 'docs/other',
        title: {
          zh: '其他文档',
          en: 'other',
        },
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
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
        order: 3,
      },
      {
        slug: 'specification/category/three',
        title: {
          zh: '第三层',
          en: 'three level',
        },
        order: 1,
      },
      {
        slug: 'other/category',
        title: {
          zh: '分类二',
          en: 'category2',
        },
        order: 4,
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
    playground: {
      container: '<div id="container" class="ok" />',
      playgroundDidMount: 'console.log("playgroundDidMount");',
      playgroundWillUnmount: 'console.log("playgroundWillUnmount");',
    },
    redirects: [
      {
        from: '/zh-cn/index\\.html',
      },
      {
        from: '/zh-cn/(g2|g6|f2|l7)/[0-9]\\.x',
      },
      {
        from: '/zh-cn/vis/index\\.html',
      },
    ],
  },
};
