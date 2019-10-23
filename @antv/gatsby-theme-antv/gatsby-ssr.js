/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const { renderToString } = require('react-dom/server');
const i18n = require('i18next').default;
const { initReactI18next } = require('react-i18next');
const Backend = require('i18next-sync-fs-backend');
const { getCurrentLangKey } = require('ptz-i18n');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init();

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  pathname,
}) => {
  // const currentLangKey = getCurrentLangKey(['zh', 'en'], 'zh', pathname);
  i18n.use(Backend).init({
    initImmediate: false,
    lng: currentLangKey,
    backend: {
      loadPath: 'site/locales/{{lng}}.json',
    },
  });
  // load the common namespace
  i18n.loadLanguages(['zh', 'en'], () => {
    replaceBodyHTMLString(renderToString(bodyComponent));
  });
};
