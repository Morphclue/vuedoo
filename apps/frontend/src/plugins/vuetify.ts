import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import {createVuetify} from 'vuetify';

export const vuetify = createVuetify({
  theme: {
    themes: {
      vuedoo: {
        dark: true,
        colors: {
          primary: '#255F38',
          secondary: '#18230F',
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
