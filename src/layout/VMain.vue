<template>
  <div>
    <main-header></main-header> 
   <!--  <main class="main-layout layout">
        <transition name="fade">
          <router-view></router-view>
        </transition>
    </main> -->
    <!-- <main-footer></main-footer> -->
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
