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
const { transformSync } = require('@babel/core');
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
    path.join(program.directory, 'examples'),
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
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const posts = result.data.allMarkdownRemark.edges;
  const allDemos = result.data.allFile.nodes
    .filter(node => /demo\/(.*)\.[t|j]sx?$/.test(node.relativePath))
    .map(item => {
      const source = fs.readFileSync(item.absolutePath, 'utf8');
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
      const { code } = transformSync(source, {
        filename: item.absolutePath,
        presets: [
          '@babel/preset-typescript',
          '@babel/preset-react',
          '@babel/preset-env',
        ],
        plugins: ['@babel/plugin-transform-modules-umd'],
      });
      const order = (meta.demos || []).findIndex(
        ({ filename }) => filename === path.basename(item.relativePath),
      );
      const demoInfo = (meta.demos || [])[order] || {};
      return {
        ...item,
        source,
        babeledSource: code,
        order: order || 0,
        filename: path.basename(item.relativePath),
        ...demoInfo,
      };
    });
  posts.forEach(({ node }, index) => {
    const { slug } = node.fields;
    const prev = index === 0 ? false : posts[index - 1].node;
    const next = index === posts.length - 1 ? false : posts[index + 1].node;
    const isExamplePage =
      slug.startsWith(`/zh/examples`) || slug.startsWith(`/en/examples`);
    const context = {
      prev,
      next,
    };
    if (isExamplePage) {
      let exampleRootSlug = slug;
      if (/\/examples\/.*\/API$/.test(slug)) {
        exampleRootSlug = exampleRootSlug.replace(/\/API$/, '');
      } else if (/\/examples\/.*\/design$/.test(slug)) {
        exampleRootSlug = exampleRootSlug.replace(/\/design$/, '');
      }
      const design = posts.find(({ node }) => {
        const { slug: postSlug } = node.fields;
        return postSlug === `${exampleRootSlug}/design`;
      });
      const API = posts.find(({ node }) => {
        const { slug: postSlug } = node.fields;
        return postSlug === `${exampleRootSlug}/API`;
      });
      const examples = allDemos
        .filter(item =>
          `${exampleRootSlug}/demo`.endsWith(path.dirname(item.relativePath)),
        )
        .sort((a, b) => a.order - b.order);
      context.exampleSections = {
        examples,
        design,
        API,
      };
    }
    createPage({
      path: slug, // required
      component: isExamplePage ? exampleTemplate : documentTemplate,
      context,
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
