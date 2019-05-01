<template>
  <nav class="main-nav__left">
   
  </nav>
</template>
<script>
import UserPopover from "@/components/user/UserPopover";


export default {
  name: "TopNav",

  components: {
    UserPopover,
  },

  data() {
    return {
      data: ''
    };
  }
};
</script>
<style lang="scss" scoped>
  .main-nav {
    &__left{
      
    }
  }
</style>
