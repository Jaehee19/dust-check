// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import VueBlu from 'vue-blu'
import Storage from 'vue-ls'
import 'vue-blu/dist/css/vue-blu.min.css'

const options = {
  namespace: 'vuejs__',
  name: 'ls',
  storage: 'local'
}

Vue.use(Storage, options)
Vue.use(VueBlu)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
