/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const fs = require('fs');
const mkdirp = require('mkdirp');
const { getSlugAndLang } = require('ptz-i18n');

const documentTemplate = require.resolve(`./site/templates/document.tsx`);
const exampleTemplate = require.resolve(`./site/templates/example.tsx`);

let locale = {};
try {
  locale = JSON.parse(
    fs.readFileSync(path.resolve(`site/locale.json`), `utf8`),
  );
} catch (e) {}

const resources = {
  en: {
    translation: {
      ...locale,
      ...require('./site/common.json'),
    },
  },
};

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, 'docs'),
    path.join(program.directory, 'site'),
    path.join(program.directory, 'site/images'),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

// Add custom url pathname for posts
exports.onCreateNode = ({ node, actions, getNode, store }) => {
  const { createNodeField } = actions;
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
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
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
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    const { slug } = node.fields;
    const prev = index === 0 ? false : posts[index - 1].node;
    const next = index === posts.length - 1 ? false : posts[index + 1].node;
    createPage({
      path: slug, // required
      component:
        slug.startsWith(`/zh/examples`) || slug.startsWith(`/en/examples`)
          ? exampleTemplate
          : documentTemplate,
      context: {
        prev,
        next,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig, stage, plugins }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }
  config.plugins = [
    ...config.plugins,
    plugins.define({
      I18NEXT_RESOURCES: JSON.stringify(resources),
    }),
  ];
};
