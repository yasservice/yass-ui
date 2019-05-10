<template>
    <div class="auth-wrap">
        <button class="btn-reset auth-btn" @click="showModal('userAuth')">
            Sign Up or Sing In
        </button>

        <user-auth-popup></user-auth-popup>
    </div>
</template>

<script>
import UserAuthPopup from '@/components/user/UserAuthPopup';

export default {
    name: 'AuthUser',

    components: {
        UserAuthPopup,
    },

    data() {
        return {
            showPopup: false
        }
    },

    methods: {
        showModal(name) {
            this.$store.commit("dialogShow", { name, show: true });
        }
    }


}
</script>

<style lang="scss" scoped>
.auth-btn {
    background: $bg-darkest;
    color: $white;
    padding: 5px 10px;
    border-radius: $--border-radius-base;
}
    
</style>

