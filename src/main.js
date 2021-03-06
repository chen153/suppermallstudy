import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
Vue.use(ElementUi)
// import './assets/lib/lib-swiper.js'
import './assets/common/normalize.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
