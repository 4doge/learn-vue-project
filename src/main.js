import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router.js';
import VTooltip from 'v-tooltip';
import Copy from 'v-copy';

Vue.config.productionTip = false;

Vue.use(VTooltip);
Vue.use(Copy);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
