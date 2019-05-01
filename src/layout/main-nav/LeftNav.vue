<template>
  <nav class="main-nav__left">
    <div class="main-nav__left-body">
      <button class="main-nav__left-menu-toggle menu-toggle btn-reset">
         <font-awesome-icon :icon="faBars" aria-label="true"></font-awesome-icon>
      </button>

      <router-link :to="{ path: '/' }" class="main-nav__left-link-to-friends link-to-friends">
        <font-awesome-icon :icon="faUsers" aria-label="true"></font-awesome-icon>

        <span class="link-to-friends__count">{{ onlineFriends }}</span>
      </router-link>

      <ul class="main-nav__left-stream-list ul">
        <li v-for="(item, index) in streams" :key="'user-stream' + index">
          <user-icon :stream="item"></user-icon>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { faUsers, faBars } from "@fortawesome/free-solid-svg-icons";
import UserIcon from "@/components/user/UserIcon";
import Menu from "./Menu";

export default {
  name: "LeftNav",

  components: {
    faUsers,
    faBars,
    Menu,
    UserIcon
  },

  data() {
    return {
      data: "",
      faUsers,
      faBars,

      onlineFriends: 4,

      streams: [
        {
          status: "streaming",
          link: "/",
          img: "",
          title: "sfass stream online"
        },
        {
          status: "streaming",
          link: "/",
          img: "",
          title: "sfass stream online"
        },
        {
          status: "online",
          link: "/",
          img: "",
          title: "sfass stream online"
        },
        {
          status: "offline",
          link: "/",
          img: "",
          title: "sfass stream online"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.main-nav {
  &__left {

    &-body{
      width: 80px;

      background: $bg--most-darkest;
      border-right: 1px solid $border-color;
    }

    &-menu-toggle {
      width: 100%;
      padding: 15px;
    }

    &-link-to-friends {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      padding: 15px;
      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
    }

    &-stream-list {
      padding: 15px;
    }
  }
}

.menu-toggle {
  font-size: 20px;

  transition: color linear 0.1s;

  &:hover {
    color: $white;
  }
}

.link-to-friends {
  color: $icon;

  transition: color linear 0.1s;

  &:hover,
  &:focus {
    color: $white;
  }

  &__count{
    margin-left: 2px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px;

    border-radius: $--border-radius-base;
    background: #030A14;

    font-size: 10px;
    line-height: 13px;
  }
}
</style>
