import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones
import translationsEn from './en.json';
import translationsEs from './es.json';

// Configura i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationsEn,
    },
    es: {
      translation: translationsEs,
    },
  },
  lng: 'en', // Establece el idioma por defecto
  fallbackLng: 'en', // Establece el idioma de respaldo
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
