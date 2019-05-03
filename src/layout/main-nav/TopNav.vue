<template>
  <nav class="main-nav__top">
    <search-input class="main-nav__search">
    </search-input>

    <user-badge class="main-nav__alert"></user-badge>  

    <user-popover class="main-nav__userpopover"></user-popover>
  </nav>
</template>
<script>
import UserPopover from "@/components/user/UserPopover";
import UserBadge from "@/components/user/UserBadge";
import SearchInput from "@/components/SearchInput";

export default {
  name: "TopNav",

  components: {
    UserPopover,
    UserBadge,
    SearchInput,
  },

  data() {
    return {
      searchValue: "",
      alertCount: 2,
    };
  }
};
</script>
<style lang="scss" scoped>
  .main-nav {
    &__top {
      position: fixed;
      left: 80px;
      top: 0px;

      width: calc(100% - 80px);
      padding: 10px 25px;
      height: 55px;
      display: flex;
      align-items: center;

      border-bottom: 1px solid $border-color;
      background: transparent;
    }

    &__search {
      width: 340px;
    }

    &__alert {
      margin-left: auto;
      margin-right: 20px;
      padding: 0 20px;
      height: calc(100% + 20px);

      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
    } 
  }
</style>
