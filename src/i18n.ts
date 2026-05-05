import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        navbar: {
          title: 'Luz Diaria',
          home: 'Inicio',
          devocionals: 'Devocionales',
          community: 'Comunidad',
          start: 'Empezar',
          about: 'Acerca de',
        },
        hero_title: 'Empezá tu día con paz y propósito',
        hero_sub: 'Recibí devocionales diarios y fortalecé tu fe',
        start: 'Empezar',
      },
    },
    en: {
      translation: {
        navbar: {
          title: 'Daylight',
          home: 'Home',
          devocionals: 'Devocionals',
          community: 'Community',
          start: 'Start',
          about: 'About',
        },
        hero_title: 'Start your day with peace and purpose',
        hero_sub: 'Receive daily devotionals and strengthen your faith',
        start: 'Get Started',
      },
    },
  },
  lng: 'es',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
