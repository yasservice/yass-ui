import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element'
import { apolloProvider } from './plugins/vue-apollo'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './plugins/i18n'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
