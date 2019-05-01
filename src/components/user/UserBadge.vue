<template>
  <button class="user-badge btn-reset">
        <span class="user-badge__icon">
          <i class="el-icon-bell"></i>
        </span>

        <span class="user-badge__count">
          2
        </span>
    </button>
</template>

<script>
export default {
  name: "UserPopover",

  data() {
    return {
      data: ""
    };
  }
};
</script>

<style lang="scss" scoped>
  .user-badge {
    position: relative;

    &:hover,
    &:focus {
      color: $white;
    }

    &__icon {
      font-size: 25px;
    }
    
    &__count {
      position: absolute;
      top: 8px;
      right: 20px;

      display: inline-flex;
      width: 15px;
      height: 15px;
      justify-content: center;
      align-items: center;

      border-radius: 50%;
      background: $primary;

      font-weight: 500;
      font-size: 9px;
      line-height: 9px;
      color: $white;
    }
  }
</style>
