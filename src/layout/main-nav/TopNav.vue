<template>
  <nav class="main-nav__top">
    <el-input class="main-nav__search" placeholder="Поиск" suffix-icon="el-icon-search" v-model="searchValue"></el-input>

    <div class="main-nav__alert alert">
        <font-awesome-icon :icon="faBell" aria-label="true" class="alert__icon icon-default"></font-awesome-icon>

        <span class="alert-count">
          2
        </span>
    </div>

    <user-popover class="main-nav__userpopover"></user-popover>
  </nav>
</template>
<script>
import { faBell } from "@fortawesome/free-solid-svg-icons";
import UserPopover from "@/components/user/UserPopover";

export default {
  name: "TopNav",

  components: {
    faBell,
    UserPopover
  },

  data() {
    return {
      searchValue: "",
      faBell,

      alertCount: 2,
    };
  }
};
</script>
<style lang="scss" scoped>
  .main-nav {
    &__top {
      flex-basis: 100%;
      padding: 10px 25px;
      height: 50px;
      display: flex;
      align-items: center;

      border-bottom: 1px solid $border-color;
      background: transparent;
    }

    &__search {
      width: 340px;

      input {
        background: rgba(255, 255, 255, 0.03);
      }

      span {
        color: $primary;
      }
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
