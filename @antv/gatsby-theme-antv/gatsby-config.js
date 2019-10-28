const path = require('path');

module.exports = ({
  pagesPath = './site/pages',
  GATrackingId,
  primaryColor = '#722ED1',
  pathPrefix,
}) => {
  const config = {
    siteMetadata: {
      title: `AntV`,
      description: `Ant Visualization solution home page`,
      githubUrl: 'https://github.com/antvis/gatsby-theme-antv',
      docs: [],
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `docs`,
          path: path.resolve('./docs'),
          ignore: [`**/\.*`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.resolve('./site/images'),
          ignore: [`**/\.*`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `examples`,
          path: path.resolve('./examples'),
          ignore: [`**/\.*`],
        },
      },
      {
        resolve: 'gatsby-plugin-i18n',
        options: {
          langKeyDefault: 'zh',
          useLangKeyLayout: false,
          pagesPaths: [`${__dirname}/site/pages`, path.resolve(pagesPath)],
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prettier`,
              options: {
                // Look for local .prettierrc file.
                // The same as `prettier.resolveConfig(process.cwd())`
                usePrettierrc: true,
                // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
                prettierOptions: {},
              },
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                inlineCodeMarker: '±',
              },
            },
            {
              resolve: 'gatsby-remark-external-links',
              options: {
                target: '_self',
                rel: 'nofollow',
              },
            },
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-reading-time`,
          ],
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-offline`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: primaryColor,
          theme_color: primaryColor,
          display: `minimal-ui`,
          icon: require.resolve(`./site/images/favicon.png`), // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-typescript`,
      {
        resolve: 'gatsby-plugin-less',
        options: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': primaryColor,
            'font-family': `Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`,
          },
        },
      },
      {
        resolve: 'gatsby-plugin-antd',
        options: {
          style: true,
        },
      },
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-nprogress`,
      `gatsby-plugin-remove-trailing-slashes`,
      // You can have multiple instances of this plugin
      // to create pages from React components in different directories.
      //
      // The following sets up the pattern of having multiple
      // "pages" directories in your project
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/site/pages`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.resolve(pagesPath),
        },
      },
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./site/layouts/layout.tsx`),
        },
      },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: primaryColor,
        },
      },
    ],
  };

  if ('GATSBY_PATH_PREFIX' in process.env) {
    console.log(
      `'GATSBY_PATH_PREFIX' in process.env: ${process.env.GATSBY_PATH_PREFIX}`,
    );
    console.log(
      `typeof process.env.GATSBY_PATH_PREFIX: ${typeof process.env
        .GATSBY_PATH_PREFIX}`,
    );
    if (
      process.env.GATSBY_PATH_PREFIX &&
      process.env.GATSBY_PATH_PREFIX !== '/'
    ) {
      config.pathPrefix = process.env.GATSBY_PATH_PREFIX;
    }
  } else {
    config.pathPrefix = pathPrefix;
  }

  if (GATrackingId) {
    config.plugins.push({
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GATrackingId,
      },
    });
  }

  return config;
};
