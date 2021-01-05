import Vue from 'vue'
import App from './App.vue'
import router from './router'


//style
import './assets/style/style.scss'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BNavbar } from 'bootstrap-vue'
import { BCarousel } from 'bootstrap-vue'



Vue.component('b-carousel', BCarousel)
Vue.component('b-navbar', BNavbar)


Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
