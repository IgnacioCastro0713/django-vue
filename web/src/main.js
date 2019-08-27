import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

Vue.prototype.$api_url = 'http://127.0.0.1:8000/api/v1.0/';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
