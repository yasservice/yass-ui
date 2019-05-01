<template>
  <button class="user-icon btn-reset">
    <div class="user-icon__img"></div>

    <span class="user-icon__status"></span>
  </button>
</template>

<script>
export default {
  name: "UserIcon"
};
</script>

<style lang="scss" scoped>
  .user-icon {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }

</style>

