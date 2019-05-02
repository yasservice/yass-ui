<template>
  <nav class="main-nav__menu menu">
    <ul class="main-nav__menu-list menu__list ul">
      <li class="menu__item">
        <button class="menu__close-btn btn-reset">
          <span class="link menu__close-btn-text">Menu</span>
          <i class="el-icon-caret-left"></i>
        </button>    
      </li>
      <li class="menu__item" v-for="(item, index) in menu" :key="'menu-item' + index">
        <router-link 
          class="menu__link link"
          :to="{ name: item.link }">
            {{ item.text }}
          </router-link>
      </li>
    </ul>
   
  </nav>
</template>
<script>
import UserPopover from "@/components/user/UserPopover";


export default {
  name: "MainMenu",

  components: {
    UserPopover,
  },

  data() {
    return {
      menu: [
        {
          link: '/',
          text: 'My Band',
        },
        {
          link: '/',
          text: 'Streams',
        },
        {
          link: '/',
          text: 'Community',
        },
        {
          link: '/',
          text: 'Events',
        },
        {
          link: '/',
          text: 'Channel',
        },
        {
          link: '/',
          text: 'News',
        },
        {
          link: '/',
          text: 'Help',
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
  .main-nav {
    &__menu{
      width: 200px;
      border-left: 1px solid $border-color;
      border-right: 1px solid $border-color;
    }
  }

  .menu {
    width: 200px;
    background: $bg--dark;

    &__list {
      width: 100%;
    }

    &__item {
      width: 100%;
    }

    &__close-btn {
      width: 100%;
      display: inline-flex;
      padding: 20px;

      background: $bg-darkest;

      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
      color: $info;

      &-text {
        margin-right: auto;
      }

      transition: 0.1s linear all;

      &:hover,
      &:focus {
        color: $white;
      }
    }

    &__link {
      width: 100%;
      display: inline-flex;
      padding: 20px;

      border-left: 2px solid transparent;
      
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;

      transition: 0.1s linear all;

      &:hover,
      &:focus {
        border-left-color: $primary;
        color: $white;
        background: $bg-darkest;
      }
    }
  }
</style>
