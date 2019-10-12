const path = require('path');

module.exports = ({
  pagesPath = './site/pages',
  GATrackingId = `UA-148148901-1`,
  primaryColor = '#722ED1',
}) => {
  return {
    siteMetadata: {
      title: `AntV`,
      siteUrl: `https://antvis.github.io`,
      description: `Ant Visualization solution home page`,
      languages: {
        langs: ['en', 'zh'],
        defaultLangKey: 'zh',
      },
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
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
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
          },
        },
      },
      {
        resolve: 'gatsby-plugin-antd',
        options: {
          style: true,
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: GATrackingId,
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
          component: require.resolve(`./site/components/layout.tsx`),
        },
      },
    ],
  };
};
