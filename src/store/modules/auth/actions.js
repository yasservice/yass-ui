import { AUTH_REQUEST, AUTH_LOGOUT } from './index';

export default {
  // [AUTH_REQUEST]: ({commit, dispatch}, user) => {
  //   return new Promise((resolve, reject) => {
  //     console.log('call AUTH_REQUEST');
  //     commit(AUTH_REQUEST)
  //     apiCall({url: '/', data: user, method: 'POST'})
  //     .then(resp => {
  //       localStorage.setItem('user-token', resp.token)
  //       // Here set the header of your ajax library to the token value.
  //       // example with axios
  //       // axios.defaults.headers.common['Authorization'] = resp.token
  //       commit(AUTH_SUCCESS, resp)
  //       dispatch(USER_REQUEST)
  //       resolve(resp)
  //     })
  //     .catch(err => {
  //       commit(AUTH_ERROR, err)
  //       localStorage.removeItem('user-token')
  //       reject(err)
  //     })
  //   })
  // },

  // [AUTH_LOGOUT]: ({commit, dispatch}) => {
  //   return new Promise((resolve, reject) => {
  //     commit(AUTH_LOGOUT)
  //     localStorage.removeItem('user-token')
  //     resolve()
  //   })
  // }
};