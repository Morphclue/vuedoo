import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import {createVuetify} from 'vuetify';

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      vuedoo: {
        dark: true,
        colors: {
          primary: '#255F38',
          secondary: '#18230F',
          accent: '#1F7D53',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
    defaultTheme: 'vuedoo',
  },
});
