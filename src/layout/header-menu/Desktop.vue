<template>
  <header class="main-header">
    <nav class="main-header__nav main-nav">
      <ul class="main-nav__list ul">
        <li class="main-nav__item">
          <router-link
            to="/"
            class="main-nav__link main-logo"
            alt="enjoy streaming"
            title="enjoy streaming"
          >stream</router-link>
        </li>
        <li class="main-nav__item">
          <a href class="main-nav__link">Лучшие потоковые передачи</a>
        </li>
        <li class="main-nav__item">
          <a href class="main-nav__link">Игры</a>
        </li>
      </ul>

      <el-form class="main-nav__serch-form">
        <el-form-item class="main-nav__serch-form-item">
          <el-input type="search" autocomplete="off" prefix-icon="el-icon-search"></el-input>
        </el-form-item>
      </el-form>

      <el-button
        class="main-nav__auth-btn"
        type="primary"
        @click="open('userAuth')"
      >Log in / Sign up</el-button>
    </nav>

    <user-auth-popup :visible="isUserPopupVisible"></user-auth-popup>
  </header>
</template>
<script>
import UserAuthPopup from "@/components/user-login/UserAuthPopup";
export default {
  name: "Desktop",

  components: {
    UserAuthPopup
  },

  data() {
    return {
      showDialog: false
    };
  },

  computed: {
    isUserPopupVisible() {
      return this.$store.state.modals.userAuth;
    }
  },

  methods: {
    open(name) {
      this.$store.commit("dialogShow", { name, show: true });
    }
  }
};
</script>
<style lang="scss">
.main-header {
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: $sky-blue;
    box-shadow: 0 2px 4px 3px $sky-blue;

    @include adopt("sm-and-up") {
      @include blink;
    }
  }

  &__nav {
  }

  .main-nav {
    display: flex;
    align-items: center;
    padding: 20px 30px;
    background: $black;

    &__list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    &__item {
    }

    &__link {
      display: block;
      margin-right: 30px;
      font-family: $custom-font;

      color: $yellow;
      text-decoration: none;

      transition: $--all-transition;

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0px;
        margin-top: 10px;

        background: $yellow;

        transition: $--all-transition;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    &__serch-form {
      display: flex;
      align-items: center;

      &-item {
        margin-bottom: 0;

        input {
          opacity: 0.3;
        }
      }
    }

    &__auth-btn {
      // height: 40px;
      margin-left: auto;
    }
  }
}
</style>
