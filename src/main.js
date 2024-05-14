import { createVuestic } from 'vuestic-ui';
import config from '../vuestic.config.js';
import './assets/global.css';
import 'vuestic-ui/css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

createApp(App)
  .use(createVuestic({ config }))
  .use(createPinia())
  .use(router)
  .mount('#app');
