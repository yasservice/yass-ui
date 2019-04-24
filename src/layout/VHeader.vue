<template>
  <header class="main-header">
    <desktop></desktop>
  </header>
</template>

<script>
  import Desktop from "./header-menu/Desktop";

  export default {
    name: "MainHeader",

    components: {
      Desktop
    },

    computed: {},

    methods: {}
  };
</script>

<style lang="scss">
  .main-header {
  }
</style>
