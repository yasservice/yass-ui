import Vue from 'vue';
import Vuex from 'vuex';

import { defaultClient as apolloClient } from "../plugins/vue-apollo";
import gql from 'graphql-tag';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

/* user store
---------------*/
import user from '@/store/modules/user/user';

/* auth store
---------------*/
import auth from '@/store/modules/auth/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    auth
  },

  state,
  actions,
  mutations,
  getters,
})