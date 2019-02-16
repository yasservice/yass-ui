<template>
  <div class="main-layout">
    <main-header></main-header>

    <main-footer></main-footer>
  </div>
</template>
<script>
import MainHeader from './v-header';
import MainFooter from './v-footer';

export default {
  name: 'MainLayout',

  components: {
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss">
  
</style>
