import i18n from 'i18next';
import fetch from 'isomorphic-fetch';
import Backend from 'i18next-fetch-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import defaultLocale from './common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    debug: true,
    resources: {
      en: {
        translation: defaultLocale,
      },
    },
    fallbackLng: 'zh',
    backend: {
      loadPath: '/locales/{{lng}}.json',
      fetch,
    },
    react: {
      useSuspense: false,
    },
  });

i18n.reloadResources(['en', 'zh']);

export default i18n;
