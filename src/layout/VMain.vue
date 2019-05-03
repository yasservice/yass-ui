<template>
  <div>
    <main-header></main-header> 
    <main class="main-layout">
        <transition name="fade"  mode="out-in">
          <router-view></router-view>
        </transition>
    </main>
  </div>
</template>

<script>
import MainHeader from "./VHeader";

export default {
  name: "MainLayout",

  components: {
    MainHeader,
  }
};
</script>

<style lang="scss" scoped>
.main-layout {
  padding: 75px 0 0 100px;
}
</style>
