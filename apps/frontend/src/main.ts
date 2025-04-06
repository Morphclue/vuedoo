import './styles.scss';

import { createApp } from 'vue';

import App from './app/App.vue';
import 'vuetify/styles'
import { vuetify } from './plugins/vuetify';
import router from './router';

const app = createApp(App);
app.use(vuetify)
app.use(router);
app.mount('#root');
