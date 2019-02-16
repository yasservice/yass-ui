<template>
  <div class="main-header">
    <nav class="main-header__nav main-nav">
     <ul class="main-nav__list ul">
       <li class="main-nav__item">
         <a href="" class="main-nav__item">Logo</a>
        </li>
        <li class="main-nav__item">
          <a href="" class="main-nav__link">Лучшие потоковые передачи</a>
        </li>
        <li class="main-nav__item">
          <a href="" class="main-nav__link">Игры</a>
        </li>
     </ul>

      <el-form class="main-nav__serch-form">
        <el-form-item>
          <el-input type="search" autocomplete="off"  prefix-icon="el-icon-search"></el-input>
        </el-form-item>
      </el-form>
      
      <el-button class="main__nav-auth-btn" type="primary"  @click="open('userAuth')">Log in / Sign up</el-button>    
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
    padding: 20px 30px;

    &__list {
      display: flex;
    }

    &__item {

      &__link {
       
        text-decoration: none;

        &:hover {
          
        }
      }
    }

    
  }
}

</style>
