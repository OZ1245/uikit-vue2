import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Plugins
import VueHighlightJS from 'vue-highlight.js'
// import 'vue-highlight.js/lib/allLanguages'
import htmlLang from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/atom-one-light.css'
Vue.use(VueHighlightJS, {
  languages: {
    htmlLang
  }
})

import CldNotice from '@/components/CldNotice/main.js'
Vue.prototype.$CldNotice = CldNotice

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
