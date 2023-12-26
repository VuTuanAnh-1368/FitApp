import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';

const resources = {
  EN: {
    translation: require('./en.json')
  },
  VN: {
    translation: require('./vi.json')
  },
};


i18n.use(initReactI18next).init({
  resources,
  lng: 'EN', // Default language
  fallbackLng: 'EN', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;