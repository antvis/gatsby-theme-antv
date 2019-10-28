module.exports = {
  plugins: [
    {
      resolve: `@antv/gatsby-theme-antv`,
      options: {
        pathPrefix: '/gatsby-theme-antv',
      },
    },
  ],
  siteMetadata: {
    title: `AntV test site`,
    description: `Ant Visualization solution home page`,
    githubUrl: 'https://github.com/antvis/antvis.github.io',
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
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1',
        },
        order: 1,
      },
      {
        slug: 'other',
        title: {
          zh: '其他文档',
          en: 'other',
        },
        order: 0,
        redirect: 'getting-started',
      },
      {
        slug: 'other/category',
        title: {
          zh: '分类二',
          en: 'category2',
        },
        order: 2,
      },
      {
        slug: 'examples',
        title: {
          zh: '图表演示',
          en: 'Examples',
        },
        order: 100,
        redirect: 'basic',
      },
    ],
  },
};
