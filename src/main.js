import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import { createProvider } from './plugins/vue-apollo'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './i18n'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  i18n,
  render: h => h(App)
}).$mount('#app')
