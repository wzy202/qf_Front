import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './utils/axios';
import vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
