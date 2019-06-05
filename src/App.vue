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
  },

  methods: {
    handleScroll (event) {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const isScrolled = scrolled > 0;

      this.$store.dispatch('pageScrolled', isScrolled)
        .then(() => {
          // console.log('success');
        })
        .catch((e) => {
          console.error(e);
        })
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
@import "~element-ui/packages/theme-chalk/src/index";
#app {
  
}
</style>
