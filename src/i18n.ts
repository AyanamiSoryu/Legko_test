import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// import { getLocales } from 'react-native-localize';
import en from './locales/en.json';
import ru from './locales/ru.json';

const fallbackLng = 'ru';
// const deviceLanguage = getLocales()[0]?.languageCode || fallbackLng;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    ru: { translation: ru },
    en: { translation: en }
  },
  lng: fallbackLng,
  fallbackLng,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
