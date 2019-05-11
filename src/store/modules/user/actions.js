import USER from "@/graphql/user/User.gql";
import { defaultClient as apolloClient } from "@/plugins/vue-apollo";

export default {
  getUser: ({ commit }, payload) => {
    apolloClient
      .query({
        query: USER,
        variables: payload
      })
      .then(({ data }) => {
        commit('setUserData', data);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
