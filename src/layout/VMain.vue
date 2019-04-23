<template>
  <div class="main-layout">
    <main-header></main-header>
      <transition>
        <router-view></router-view>
      </transition>
    <main-footer></main-footer>
  </div>
</template>
<script>
import MainHeader from "./VHeader";
import MainFooter from "./VFooter";

export default {
  name: "MainLayout",

  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style lang="scss">
</style>
