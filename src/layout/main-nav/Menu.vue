<template>
  <nav class="main-nav__menu menu">
    <ul class="main-nav__menu-list menu__list ul">
      <li class="menu__item">
        <span>Menu</span>
        <button class="btn-reset">
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
  name: "Menu",

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
    &__left{
      width: 200px;
    }
  }

  .menu {
    &__list {
      width: 100%;
    }

    &__item {
      width: 100%;
    }

    &__link {
      width: 100%;
      display: inline-flex;
      padding: 15px 20px;

      border-left: 2px solid transparent;
      
      font-weight: 500;
      font-size: 13px;
      line-height: 15px;
    }
  }
</style>
