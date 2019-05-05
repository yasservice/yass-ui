<template>
  <nav class="main-nav__left">
    <div class="main-nav__left-body" :class="{'main-nav__left-body--fixed': toggleMenu}">
      <button
        class="main-nav__left-menu-toggle menu-toggle btn-reset"
        @click="toggleMenu = !toggleMenu"
      >
        <font-awesome-icon :icon="faBars" aria-label="true" v-show="!toggleMenu"></font-awesome-icon>
        <font-awesome-icon :icon="faWindowClose" aria-label="true" v-show="toggleMenu"></font-awesome-icon>
      </button>

      <router-link
        :to="{ path: '/' }"
        class="main-nav__left-link-to-friends link-to-friends"
        title="link to friens"
      >
        <font-awesome-icon :icon="faUsers" aria-label="true"></font-awesome-icon>

        <span class="link-to-friends__count">{{ onlineFriends }}</span>
      </router-link>

      <ul class="main-nav__left-stream-list ul">
        <li v-for="(item, index) in streams.slice(0, 5)" :key="'user-stream' + index">
          <user-stream-info :sreamInfo="item" class="main-nav__left-stream-link"></user-stream-info>
        </li>
      </ul>

      <router-link
        :to="{ path: '/' }"
        class="main-nav__left-link-to-hot-streams link-to-hot-streams"
        title="hot streams"
      >
        <font-awesome-icon :icon="faFire" aria-label="true"></font-awesome-icon>
      </router-link>

      <!--       <ul class="main-nav__left-stream-list ul">
        <li v-for="(item, index) in streams.slice(5)" :key="'user-stream' + index">
          <user-icon :stream="item" class="main-nav__left-stream-link"></user-icon>
        </li>
      </ul>-->

      <router-link
        :to="{ path: '/' }"
        class="main-nav__left-user-settings user-settings-link"
        title="user settings"
      >
        <font-awesome-icon :icon="faCog" aria-label="true"></font-awesome-icon>
      </router-link>
    </div>

    <!-- <transition name="menu-animation">
      <main-menu class="main-nav__left-menu" v-show="toggleMenu"></main-menu>
    </transition>-->

    <!-- <div  class="main-nav__left-menu-mask" v-show="toggleMenu" @click="toggleMenu = false"></div> -->
  </nav>
</template>
<script>
import {
  faUsers,
  faBars,
  faFire,
  faCog,
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";
import UserStreamInfo from "@/components/user/UserStreamInfo";
import MainMenu from "./MainMenu";

export default {
  name: "LeftNav",

  components: {
    faUsers,
    faBars,
    faFire,
    faCog,
    MainMenu,
    UserStreamInfo,
    faWindowClose
  },

  data() {
    return {
      data: "",
      faUsers,
      faBars,
      faFire,
      faCog,
      faWindowClose,

      onlineFriends: 4,

      toggleMenu: false,

      streams: [
        {
          status: "streaming",
          link: "/",
          img: "",
          title: "sfass stream online",
          streamName: "dfafdfas",
          channelName: "sdfsadf",
          views: 200
        },
        {
          status: "streaming",
          link: "/",
          img: "",
          title: "sfass stream online",
          streamName: "dfafdfas",
          channelName: "sdfsadf",
          views: 200
        },
        {
          status: "online",
          link: "/",
          img: "",
          title: "sfass stream online",
          streamName: "dfafdfas",
          channelName: "sdfsadf",
          views: 200
        },
        {
          status: "offline",
          link: "/",
          img: "",
          title: "sfass stream online",
          streamName: "dfafdfas",
          channelName: "sdfsadf",
          views: 200
        },
        {
          status: "offline",
          link: "/",
          img: "",
          title: "sfass stream online",
          streamName: "dfafdfas",
          channelName: "sdfsadf",
          views: 200
        },
        {
          status: "offline",
          link: "/",
          img: "",
          title: "sfass stream online",
          streamName: "dfafdfas",
          channelName: "sdfsadf",
          views: 200
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.main-nav {
  &__left {
    z-index: 3010;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    border-right: 1px solid $border-color;

    &-menu {
      z-index: 3009;
      position: fixed;
      left: 80px;
      top: 0;
      height: 100vh;

      &-mask {
        z-index: 3008;
        position: fixed;
        left: 80px;
        top: 0;

        width: 100%;
        height: 100%;

        background-color: $bg-darkest;
      }
    }

    &-body {
      width: 80px;
      height: 100%;
      overflow: hidden;

      background: $bg--dark;

      &--fixed {
        width: 330px;
        background: $bg-darkest;
      }

      &:hover {
        width: 330px;
        background: $bg-darkest;
      }
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
    }

    &-stream-link {
      margin: 15px;
    }

    &-link-to-hot-streams {
      width: 100%;
      display: block;
      text-align: center;
      padding: 7px 0;

      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
    }

    &-user-settings {
      position: absolute;
      bottom: 10px;
      left: 0;

      width: 100%;
      display: block;
      text-align: center;
    }
  }
}

.menu-toggle {
  font-size: 20px;
  color: $icon;

  transition: color linear 0.1s;

  &:hover {
    color: $white;
  }
}

.link-to-friends {
  color: $icon;

  transition: color linear 0.1s;
  text-decoration: none;

  &:hover,
  &:focus {
    color: $white;
  }

  &__count {
    margin-left: 2px;
    padding: 2px;
    width: 15px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border-radius: $--border-radius-base;
    background: #030a14;

    font-size: 12px;
    line-height: 15px;
  }
}

.link-to-hot-streams {
  text-align: center;
  color: $icon;

  transition: 0.1s color linear;

  &:hover,
  &:focus {
    color: $white;
  }
}

.user-settings-link {
  font-size: 20px;
  text-align: center;
  color: $icon;

  transition: 0.1s color linear;

  &:hover,
  &:focus {
    color: $white;
  }
}
</style>
