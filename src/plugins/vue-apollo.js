import Vue from 'vue'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

export const defaultClient = new ApolloClient( {
  uri: process.env.VUE_APP_API_HOST,
  fetchOptions: {
    // mode: 'no-cors',
  }
});

export const apolloProvider = new VueApollo({ defaultClient });