// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueImg from 'v-img'
import InfiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './router'
import axios from './axios'
import './assets/css/base.css'

Vue.config.productionTip = true

Vue.use(VueImg)
Vue.use(InfiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
