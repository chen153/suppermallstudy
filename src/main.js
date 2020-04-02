import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/lib/lib-swiper.js'
import './assets/common/normalize.css'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
