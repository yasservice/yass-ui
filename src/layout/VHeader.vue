<template>
  <header class="main-header">
    <!-- <desktop></desktop> -->

    <top-nav></top-nav>
  </header>
</template>

<script>
  import TopNav from "./main-nav/TopNav";

  export default {
    name: "MainHeader",

    components: {
      TopNav
    },

    computed: {},

    methods: {}
  };
</script>

<style lang="scss">
  .main-header {
  }
</style>
