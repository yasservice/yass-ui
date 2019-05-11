import CREATE_USER from '@/graphql/user/CreateUser.gql'
import gql from 'graphql-tag';

export default {
    signupUser: ({ commit }, payload) => {
     apollo.mutations(
       {
           mutations: gql`
            CREATE_USER
           `
       }
     )
    }
}