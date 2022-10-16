// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
Vue.prototype.$store = store

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import axios from 'axios'

Object.defineProperty(Vue.prototype, '$axios', {value: axios});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //使用vuex
  store: store,
  router,
  components: {App},
  template: '<App/>'
})
