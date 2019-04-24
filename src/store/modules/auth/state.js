export default {
  token: localStorage.getItem('user-token') || '', 
  status: '',
  hasLoadOnce: false,
};