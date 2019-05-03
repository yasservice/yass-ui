<template>
  <div>
    <el-popover placement="bottom" :width="155" trigger="click" popper-class="user-popover">
      <div class="user-popover__body">
        <ul class="user-popover__list ul">
          <li
            class="user-popover__item"
            v-for="(item, index) in list"
            :key="'user-popover' + index"
          >
            <router-link
              v-if="item.link"
              :to="{ path: item.link }"
              class="user-popover__link link link--hover"
            >{{ item.text }}</router-link>

            <!-- <button v-else class="user-popover__link link link--hover btn-reset">{{ item.text }}</button> -->

            <change-language v-else></change-language>
          </li>
        </ul>
      </div>

      <button slot="reference" class="user-wrap btn-reset" @click="isUserClicked = !isUserClicked">
        <div class="user-avatar"></div>

        <div class="user-login">ePadamans</div>

        <span class="user-popover-icon">
          <i class="el-icon-arrow-down icon-default"
            :class="{'icon-rotate-180': isUserClicked}"
          ></i>
        </span>
      </button>
    </el-popover>
  </div>
</template>

<script>
import ChangeLanguage from "../ChangeLanguage";

export default {
  name: "UserPopover",

  components: {
    ChangeLanguage,
  },

  data() {
    return {
      list: [
        {
          link: "/",
          text: "Channel"
        },
        {
          text: "language",
        },
        {
          text: "Settings",
          link: "/account"
        },
        {
          link: "/",
          text: "Log Out"
        }
      ],

      isUserClicked: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.user-popover {
  background: $bg--darker;

  &__link {
    display: inline-block;
    width: 100%;
    padding: 8px;
    border-radius: $--border-radius-base;

    text-align: left;
  }

}
  .user {
    &-wrap {
      width: 160px;
      height: 30px;
      display: flex;
      align-items: center;

      background: $bg-darkest;
      border-radius: $--border-radius-base;
      border: 1px dotted transparent;

      transition: 0.1s all linear;

      &:hover,
      &:focus {
        border-color: $bg--darker;
      }
    }

    &-avatar {
      width: 30px;
      height: 30px;

      border-radius: 50%;

      background: url($assets+"Avatar.png") no-repeat center center;
    }

    &-login {
      margin-left: 10px;

      color: $white;
    }

    &-popover-icon {
      margin-left: auto;

      i {
        transition: 0.2s ease-in-out all;
      }
    }
  }
</style>
