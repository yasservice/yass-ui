<template>
  <header class="main-header">
    <top-nav></top-nav>
    <left-nav></left-nav>
  </header>
</template>

<script>
  import TopNav from "./main-nav/TopNav";
  import LeftNav from "./main-nav/LeftNav.vue"

  export default {
    name: "MainHeader",

    components: {
      TopNav,
      LeftNav
    },

    computed: {},

    methods: {}
  };
</script>

<style lang="scss">
  .main-header {
  }
</style>
