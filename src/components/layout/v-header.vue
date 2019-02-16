<template>
  <div class="main-header">
    <nav class="main-header__nav main-nav">
     <ul class="main-nav__list ul">
       <li class="main-nav__item">
         <a href="" class="main-nav__link">Logo</a>
        </li>
        <li class="main-nav__item">
          <a href="" class="main-nav__link">Лучшие потоковые передачи</a>
        </li>
        <li class="main-nav__item">
          <a href="" class="main-nav__link">Игры</a>
        </li>
     </ul>

      <el-form class="main-nav__serch-form">
        <el-form-item class="main-nav__serch-form-item">
          <el-input type="search" autocomplete="off"  prefix-icon="el-icon-search"></el-input>
        </el-form-item>
      </el-form>
      
      <el-button class="main-nav__auth-btn" type="primary"  @click="open('userAuth')">Log in / Sign up</el-button>    
    </nav>


    <user-auth-popup :visible="isUserPopupVisible"></user-auth-popup>
  </div>
</template>
<script>

import UserAuthPopup from '../elements/user-login/user-auth-popup';
export default {
  name: 'MainHeader',

  components: {
    UserAuthPopup,
  },

  data() {
    return {
      showDialog: false,
    }
  },

  computed: {
    isUserPopupVisible() {
      return this.$store.state.modals.userAuth;
    }
  },

  methods: {
    open(name) {
      this.$store.commit('dialogShow', { name , show: true });
    }
  }
};
</script>
<style lang="scss">
.main-header {
  &__nav {

  }

  .main-nav {
    display: flex;
    align-items: center;
    padding: 20px 30px;
    box-shadow: 0 0 5px -1px rgba(0,0,0,.2);

    &__list {
      display: flex;
      align-items: center
    }

    &__item {

    }

    &__link {
      display: block;
      margin-right:30px;

      color: $--link-color;
      text-decoration: none;

      transition: $--all-transition;

      &:hover {
        color: $--link-hover-color;
      }
    }

    &__serch-form {
      display: flex;
      align-items: center;

      &-item {
        margin-bottom: 0;
      }
    }

    &__auth-btn {
      height: 40px;
      margin-left: auto;
    }

    
  }
}

</style>
