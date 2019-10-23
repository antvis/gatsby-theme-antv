/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const { renderToString } = require('react-dom/server');
const i18n = require('i18next').default;
const { initReactI18next } = require('react-i18next');
const Backend = require('i18next-sync-fs-backend');

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .init({
      initImmediate: false,
      debug: true,
      backend: {
        loadPath: `site/locales/{{lng}}.json`,
      },
    });
  i18n.loadLanguages(['zh', 'en'], () => {
    replaceBodyHTMLString(renderToString(bodyComponent));
  });
};
