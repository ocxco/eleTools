import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import api from '@/components/api'
console.log(api.post)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.api = Vue.prototype.$api = api
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App />'
}).$mount('#app')
