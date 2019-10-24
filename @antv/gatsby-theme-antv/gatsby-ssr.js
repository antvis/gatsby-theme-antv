/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const i18n = require('./site/i18n').default;
const { renderToString } = require('react-dom/server');
const Backend = require('i18next-sync-fs-backend');

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.use(Backend).init({
    initImmediate: false,
    debug: true,
    backend: {
      loadPath: `site/locales/{{lng}}.json`,
    },
  });
  i18n.reloadResources(['en', 'zh']).then(() => {
    replaceBodyHTMLString(renderToString(bodyComponent));
  });
};
