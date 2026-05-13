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
        hero: {
          title_1: 'Empezá tu día',
          title_2: 'con',
          highlight_1: 'paz',
          title_3: 'y',
          highlight_2: 'propósito',
          sub: 'Fe • Propósito • Transformación',
          start: 'Empezar gratis',
          how_it_works: 'Ver cómo funciona',
          people_count: '+10.000 personas',
          people_transformed: 'ya transformaron su rutina espiritual',
          description:
            'Recibí devocionales diarios, guías de oración y fortalecé tu relación con Dios cada día.',
        },
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
        hero: {
          title_1: 'Start your day',
          title_2: 'with',
          highlight_1: 'peace',
          title_3: 'and',
          highlight_2: 'purpose',
          sub: 'Feeling • Purpose • Transformation',
          start: 'Start for free',
          how_it_works: 'How it works',
          people_count: '+10.000 people',
          people_transformed: 'have transformed their spiritual routine',
          description:
            'Receive daily devotionals, prayer guides and strengthen your relationship with God every day.',
        },
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
