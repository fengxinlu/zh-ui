import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ZhButton from '@/zh-button'
import ZhText from '@/zh-text'

Vue.config.productionTip = false
Vue.use(ZhButton)
Vue.use(ZhText)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
