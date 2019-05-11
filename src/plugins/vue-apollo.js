import Vue from 'vue'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const defaultClient = new ApolloClient( {
  uri: 'http://127.0.0.1:8000/graphql',
});

export const apolloProvider = new VueApollo({ defaultClient });