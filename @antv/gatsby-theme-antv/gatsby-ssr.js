/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import i18n from 'i18next';
import Backend from 'i18next-sync-fs-backend';

i18n.use(Backend).init({
  initImmediate: false,
  backend: {
    loadPath: 'site/locales/{{lng}}.json',
  },
});
