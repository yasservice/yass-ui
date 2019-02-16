export default {
  dialogShow(state, { name, show }) {
    state.modals[name] = show;
  },
};