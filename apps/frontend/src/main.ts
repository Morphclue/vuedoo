import './styles.scss';
import router from './router';

import { createApp } from 'vue';

import App from './app/App.vue';
import 'vuetify/styles'
import { vuetify } from './plugins/vuetify';

const app = createApp(App);
app.use(vuetify)
app.use(router);
app.mount('#root');
