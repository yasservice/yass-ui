<template>
  <div id="app">
   <transition name="fade"  mode="out-in">
          <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainLayout from '@/layout/VMain';

export default {
  name: 'app',
  components: {
    MainLayout
  }
}
</script>

<style>
#app {
  
}
</style>
