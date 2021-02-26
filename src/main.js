import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import iView from 'iview';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';

import formCreate from '@form-create/iview4';

Vue.use(iView);
Vue.use(formCreate);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
