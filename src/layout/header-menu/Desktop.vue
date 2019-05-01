<template>
  <header class="main-header">
    <nav class="main-header__nav main-nav">

      <!-- <el-button
        class="main-nav__auth-btn"
        type="primary"
        @click="open('userAuth')"
      >Log in / Sign up</el-button> -->
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
<style lang="scss" scope>
.main-header {
 
}
</style>
