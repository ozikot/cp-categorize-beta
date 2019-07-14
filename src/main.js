import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueScrollTo from "vue-scrollto";


Vue.use(Vuetify)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
