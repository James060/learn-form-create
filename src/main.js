import Vue from 'vue';
import App from './App.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import formCreate from '@form-create/iview4';

Vue.use(iView);
Vue.use(formCreate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
