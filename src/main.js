import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import VuePageTransition from 'vue-page-transition'
import axios from "axios"

import Paginate from 'vuejs-paginate'
Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(Vuelidate)
Vue.use(VuePageTransition)
Vue.use(require('vue-moment'))

Vue.component('paginate', Paginate)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}
