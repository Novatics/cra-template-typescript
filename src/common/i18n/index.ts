import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from './translations/pt-BR.json';

const languages = {
  'pt-BR': {
    translation: translationPT
  }
};

type Language = keyof typeof languages;

i18n.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  whitelist: ['pt-BR'],
  load: 'currentOnly',
  resources: languages,
  debug: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
export type { Language };
