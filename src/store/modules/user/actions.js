import { defaultClient as apolloClient } from "@/plugins/vue-apollo";

/**
 * import queries
 */
import USER from "@/graphql/user/User.gql";
import CREATE_USER from "@/graphql/user/CreateUser.gql";

export default {
  getUser: ({ commit }, payload) => {
    apolloClient
      .query({
        query: USER,
        variables: payload
      })
      .then(({ data }) => {
        commit('setUserData', data.user);
      })
      .catch(err => {
        console.error(err);
      });
  },

  /**
   * create new user
   */
  signupUser: ({ commit }, payload) => {
    console.log(payload, CREATE_USER);
    apolloClient
      .mutate({
        mutation: CREATE_USER,
        variables: payload,
      })
      .then(({ data }) => {
        commit('setUserData', data);
      })
      .catch(err => {
        console.error(err);
      })
  },
};
