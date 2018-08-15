import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://gank.io/api/'
Vue.prototype.$axios = axios
export default ({})
