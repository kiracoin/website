import '@/styles/configure.scss'
import '@/styles/fonts.scss'
import Vue from 'vue'
import App from './App'
import router from './router'
import SmoothScroll from 'vue-smoothscroll'

Vue.use(SmoothScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
