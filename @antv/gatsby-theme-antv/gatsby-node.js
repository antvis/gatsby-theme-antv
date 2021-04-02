/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const slash = require('slash');
const fs = require('fs');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const { isEqual } = require('lodash');
const { getSlugAndLang } = require('ptz-i18n');
const { transform } = require('@babel/standalone');

const documentTemplate = require.resolve(`./site/templates/document.tsx`);
const exampleTemplate = require.resolve(`./site/templates/example.tsx`);
const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`);

function getLocaleResources() {
  let locale = {};
  try {
    locale = JSON.parse(
      fs.readFileSync(path.resolve(`site/locale.json`), `utf8`),
    );
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  const resources = {
    en: {
      translation: {
        ...locale,
        ...require('./site/common.json'), // eslint-disable-line global-require
      },
    },
  };

  return resources;
}

function getPostOrder(post, siteMetadata, type) {
  const {
    fields: { slug },
    frontmatter: { order },
  } = post.node;
  let result;
  const categories = siteMetadata[type] || [];
  if (type === 'examples') {
    const categoryOrder =
      categories.findIndex((item) => item.slug === slug.split('/')[3]) + 1;
    result = (order || 0) + categoryOrder * 100;
    return result;
  }
  let categoryOrder = 0;
  categories.forEach((item) => {
    if (slug.includes(item.slug)) {
      categoryOrder += item.order * (0.1 ** item.slug.split('/').length - 2);
    }
  });
  result = (order || 0) + categoryOrder;
  return result;
}

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, 'docs'),
    path.join(program.directory, 'site'),
    path.join(program.directory, 'examples'),
    path.join(program.directory, 'examples', 'data'),
    path.join(program.directory, 'site', 'images'),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

// Add custom url pathname for posts
exports.onCreateNode = ({
  node,
  actions,
  store,
  createNodeId,
  createContentDigest,
}) => {
  const { createNodeField, createNode } = actions;
  const { program } = store.getState();
  if (node.internal.type === `File`) {
    createNodeField({
      node,
    });
  } else if (node.internal.type === `MarkdownRemark`) {
    const { slug, langKey } = getSlugAndLang(
      {
        langKeyForNull: 'any',
        langKeyDefault: 'none',
        useLangKeyLayout: false,
        pagesPaths: [program.directory],
        prefixDefault: true,
      },
      node.fileAbsolutePath,
    );
    if (!slug) {
      return;
    }
    createNodeField({
      node,
      name: `slug`,
      value: (langKey === 'none' ? `/zh${slug}` : slug).replace(/\/$/, ''),
    });
    createNodeField({
      node,
      name: `langKey`,
      value: langKey,
    });
  }

  const resources = getLocaleResources();
  createNode({
    id: createNodeId(`locales`),
    parent: null,
    children: [],
    internal: {
      type: `Locales`,
      mediaType: `application/json`,
      content: JSON.stringify(resources || {}),
      contentDigest: createContentDigest(resources),
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter, store }) => {
  const { createPage, deletePage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              order
            }
            html
          }
        }
      }
      allFile(limit: 1000) {
        nodes {
          relativePath
          absolutePath
        }
      }
      site {
        siteMetadata {
          docs {
            slug
            order
          }
          examples {
            slug
          }
          navs {
            slug
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const createdPages = [];

  const {
    site: { siteMetadata },
    allMarkdownRemark,
    allFile,
  } = result.data;

  const posts = allMarkdownRemark.edges.filter((item) => !!item);
  const allDemos = allFile.nodes
    .filter((node) => /demo\/(.*)\.[t|j]sx?$/.test(node.relativePath))
    .map((item) => {
      let meta;
      try {
        meta = JSON.parse(
          fs.readFileSync(
            path.join(path.dirname(item.absolutePath), 'meta.json'),
            'utf8',
          ) || '{}',
        );
      } catch (e) {
        meta = {};
      }
      const order = (meta.demos || []).findIndex(
        ({ filename }) => filename === path.basename(item.relativePath),
      );
      const demoInfo = (meta.demos || [])[order] || {};
      return {
        ...item,
        order: order || 0,
        filename: path.basename(item.relativePath),
        ...demoInfo,
      };
    });

  const allExamples = allDemos.map((item) => {
    const source = fs.readFileSync(item.absolutePath, 'utf8');
    const { code } = transform(source, {
      filename: item.absolutePath,
      presets: ['react', 'typescript', 'es2015', 'stage-3'],
      plugins: ['transform-modules-umd'],
      babelrc: false,
    });
    return {
      ...item,
      source,
      babeledSource: code,
    };
  });

  posts.forEach(({ node }) => {
    const { slug } = node.fields;
    const context = {};
    const isGalleryPage = slug.endsWith('/examples/gallery');
    const isExamplePage =
      slug.startsWith(`/zh/examples`) || slug.startsWith(`/en/examples`);
    const isDocsPage =
      slug.startsWith(`/zh/docs`) || slug.startsWith(`/en/docs`);

    if (isGalleryPage || isExamplePage) {
      // 找到所有的演示
      context.allDemos = allDemos.map((demo) => {
        const postsOfDemo = posts.filter((post) => {
          // 标记演示所属的文章用于分类
          const postSlug = post.node.fields.slug;
          if (
            !postSlug.startsWith(`/zh/examples`) &&
            !postSlug.startsWith(`/en/examples`)
          ) {
            return false;
          }
          if (postSlug.endsWith(`/API`) || postSlug.endsWith(`/design`)) {
            return false;
          }
          return demo.absolutePath
            .split('/demo/')[0]
            .endsWith(postSlug.replace(/^\/(zh|en)\//, ''));
        });

        const postFrontmatter = {};
        postsOfDemo.forEach((post) => {
          if (post.node.fields.slug.startsWith(`/zh/examples`)) {
            postFrontmatter.zh = {
              ...post.node.frontmatter,
              order: getPostOrder(post, siteMetadata, 'examples'),
            };
          } else if (post.node.fields.slug.startsWith(`/en/examples`)) {
            postFrontmatter.en = {
              ...post.node.frontmatter,
              order: getPostOrder(post, siteMetadata, 'examples'),
            };
          }
        });
        return { ...demo, postFrontmatter };
      });
    }

    if (isGalleryPage) {
      context.description = node.html;
    } else if (isExamplePage) {
      let exampleRootSlug = slug;
      if (/\/examples\/.*\/API$/.test(slug)) {
        exampleRootSlug = exampleRootSlug.replace(/\/API$/, '');
      } else if (/\/examples\/.*\/design$/.test(slug)) {
        exampleRootSlug = exampleRootSlug.replace(/\/design$/, '');
      }
      const design = posts.find((post) => {
        const { slug: postSlug } = post.node.fields;
        return postSlug === `${exampleRootSlug}/design`;
      });
      const API = posts.find((post) => {
        const { slug: postSlug } = post.node.fields;
        return postSlug === `${exampleRootSlug}/API`;
      });
      const examples = allExamples
        .filter((item) =>
          `${exampleRootSlug}/demo`.endsWith(
            slash(path.join('examples', path.dirname(item.relativePath))),
          ),
        )
        .sort((a, b) => a.order - b.order);
      context.exampleSections = {
        examples,
        design,
        API,
      };
      const descriptionPosts = posts.find((post) => {
        const { slug: postSlug } = post.node.fields;
        return postSlug === exampleRootSlug;
      });
      if (descriptionPosts) {
        context.description = descriptionPosts.node.html;
      }
    } else if (isDocsPage) {
      // 将 examples 传递给 document template
      context.examples = allExamples;
    }

    // 修复修改 example 代码不及时生效的问题
    const { pages } = store.getState();
    const oldPage = Array.from(pages)
      .map((item) => item[1])
      .find((p) => p.path === slug);
    if (oldPage && !isEqual(oldPage.context, context)) {
      deletePage(oldPage);
    }

    createPage({
      path: slug, // required
      component: isExamplePage ? exampleTemplate : documentTemplate,
      context,
    });

    createdPages.push(slug);
  });

  const { navs = [] } = siteMetadata;
  navs.forEach(({ slug }) => {
    if (!slug.startsWith(`examples`) && !slug.startsWith(`docs`)) {
      return;
    }
    if (!createdPages.includes(`/zh/${slug}`)) {
      createPage({
        path: `/zh/${slug}`, // required
        component: slug.startsWith(`examples`)
          ? exampleTemplate
          : documentTemplate,
      });
    }
    if (!createdPages.includes(`/en/${slug}`)) {
      createPage({
        path: `/en/${slug}`, // required
        component: slug.startsWith(`examples`)
          ? exampleTemplate
          : documentTemplate,
      });
    }
  });
};

exports.onCreateWebpackConfig = (
  { getConfig, stage, actions },
  { codeSplit },
) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }

  if (config.optimization && !codeSplit) {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    );
  }
  // Monaco React 版本自带异步加载，所以无需插件去做按需！
  // actions.setWebpackConfig({
  //   plugins: [
  //     // new MonacoWebpackPlugin({
  //     //   languages: ['javascript', 'json', 'typescript', 'html'],
  //     // }),
  //   ],
  // });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;

  createFieldExtension({
    name: `defaultString`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return '';
          }
          return source[info.fieldName];
        },
      };
    },
  });

  createTypes(`
    type SitePage implements Node @dontInfer {
      path: String!
    }
  `);
};

// 补充默认值
// https://stackoverflow.com/questions/50770217/how-to-give-gatsby-a-graphql-schema
// https://graphql.org/learn/schema/
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Contributor {
      author: String
      avatar: String
      github: String
    }
    type MarkdownRemarkFrontmatter {
      icon: String
      order: Int
      redirect_from: [String]
      contributors: [Contributor]
    }

    type MarkdownRemark {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `);

  createTypes(`
    type DocsearchOptions {
      apiKey: String
      indexName: String
    }

    type MDPlayGround {
      splitPaneMainSize: String
    }

    type PlayGround {
      container: String
      playgroundDidMount: String
      playgroundWillUnmount: String
      dependencies: Json
      htmlCodeTemplate: String
    }

    type SiteSiteMetadataTitle {
      zh: String
      en: String
    }

    type SiteSiteMetadataDocs {
      slug: String!
      title: SiteSiteMetadataTitle!
      order: Int
    }

    type SiteSiteMetadataExamples {
      slug: String!
      title: SiteSiteMetadataTitle!
      icon: String
      order: Int
    }

    type SiteSiteMetadataNavs {
      slug: String!
      title: SiteSiteMetadataTitle!
      target: String
    }

    type SiteSiteMetadataRedirects {
      from: String!
      to: String
    }

    type SiteSiteMetadata {
      title: String!
      description: String!
      githubUrl: String!
      siteUrl: String @defaultString
      logoUrl: String
      navs: [SiteSiteMetadataNavs]
      docs: [SiteSiteMetadataDocs]
      examples: [SiteSiteMetadataExamples]
      redirects: [SiteSiteMetadataRedirects]
      isAntvSite: Boolean
      galleryMenuCloseAll: Boolean
      showChartResize: Boolean
      themeSwitcher: String
      showAPIDoc: Boolean
      showChinaMirror: Boolean
      showGithubCorner: Boolean
      showLanguageSwitcher: Boolean
      showAntVProductsCard: Boolean
      showSearch: Boolean
      mdPlayground: MDPlayGround
      playground: PlayGround
      docsearchOptions: DocsearchOptions
      versions: Json
    }

    type Site implements Node {
      siteMetadata: SiteSiteMetadata
      pathPrefix: String
    }
  `);
};
