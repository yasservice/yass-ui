export default {
  dialogShow(state, { name, show }) {
    state.modals[name] = show;
  },

  pageScrolled(state, isScrolled) {
    state.isPageScrolled = isScrolled;
  }
};