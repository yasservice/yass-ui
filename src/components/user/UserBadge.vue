<template>
  <button class="user-badge btn-reset">
        <span class="user-badge__icon">
          <font-awesome-icon :icon="faBell" aria-label="true"></font-awesome-icon>
        </span>

        <span class="user-badge__count">
        </span>
    </button>
</template>

<script>
import { faBell } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "UserPopover",

  components: {
    faBell,
  },

  data() {
    return {
      data: "",
      faBell
    };
  }
};
</script>

<style lang="scss" scoped>
  .user-badge {
    position: relative;
    color: $icon;

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

    transition: all 0.1s linear;
  }
</style>
