<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/layout/v-header';

export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style>
#app {
  
}
</style>
