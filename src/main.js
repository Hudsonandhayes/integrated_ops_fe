import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)


// axios
import axios from './axios.js'

import moment from 'moment';

// Filters
import filters from './filters';


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')


// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {

  // Do something with request error
  return Promise.reject(error)
})


axios.interceptors.response.use(null, (error) => {

  if (error) {

    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      return router.push('/pages/login')
    }

  }
})

Vue.prototype.$http = axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


Vue.config.productionTip = false

Vue.use(moment);
Vue.use(filters);

new Vue({  
  store,
  beforeCreate() {
		this.$store.dispatch('initialise_store');
	},
  router,
  render: h => h(App)
}).$mount('#app')
