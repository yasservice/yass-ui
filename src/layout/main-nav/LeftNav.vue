<template>
  <nav class="main-nav__left">
    <div class="main-nav__left-body" :class="{'main-nav__left-body--fixed': toggleMenu}">
      <button
        class="main-nav__left-menu-toggle menu-toggle btn-reset"
        @click="toggleMenu = true"
        v-show="!toggleMenu"
      >
        <font-awesome-icon :icon="faBars" aria-label="true" v-show="!toggleMenu"></font-awesome-icon>
      </button>

      <div v-show="toggleMenu" class="main-nav__left-close-menu">
        <img :src="require(`@/assets/logo.png`)" alt="loggo stream" width="50" height="50" class="main-nav__left-close-menu-img">

        <h2 class="main-nav__left-close-menu-title">Stream</h2>

        <button  @click="toggleMenu = false" class="btn-reset main-nav__left-close-menu-close-btn">
            <font-awesome-icon :icon="faChevronLeft" aria-label="true" v-show="toggleMenu"></font-awesome-icon>
        </button>
      </div>

      <router-link
        :to="{ path: '/' }"
        class="main-nav__left-link-to-friends link-to-friends"
        title="link to friens"
      >
        <font-awesome-icon :icon="faUsers" aria-label="true"></font-awesome-icon>
        
        <span class="link-to-friends__text" v-show="toggleMenu">Followed Channels</span>
        
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

        <span class="link-to-hot-streams__text" v-show="toggleMenu">Most Viewing Now</span>
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
        <span v-show="toggleMenu" class="user-settings-link__text">Settings</span>
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
  faChevronLeft
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
    faChevronLeft
  },

  data() {
    return {
      data: "",
      faUsers,
      faBars,
      faFire,
      faCog,
      faChevronLeft,

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
    z-index: 210;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    border-right: 1px solid $border-color;

    &-menu {
      z-index: 209;
      position: fixed;
      left: 80px;
      top: 0;
      height: 100vh;

      &-mask {
        z-index: 208;
        position: fixed;
        left: 80px;
        top: 0;

        width: 100%;
        height: 100%;

        background-color: $bg-darkest;
      }
    }

    &-close-menu {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 15px;

      &-img {

      }

      &-title {
        color: $white;
        margin: 0 0 0 15px;
      }

      &-close-btn {
        height: 100%;
        margin-left: auto;
        
        font-size: 20px;
        color: $info;

        &:hover,
        &:focus {
          color: $white;
        }
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
        // width: 330px;
        // background: $bg-darkest;
      }
    }

    &-menu-toggle {
      width: 100%;
      padding: 15px;
    }

    &-link-to-friends {
      width: 100%;
      display: inline-flex;
      justify-content: flex-start;
      padding: 15px 25px;
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

      padding: 7px 35px;

      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
    }

    &-user-settings {
      position: absolute;
      bottom: 10px;
      left: 0;

      width: 100%;
      display: block;
      padding: 7px 31px;
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

  &__text {
    margin-right: auto;
    margin-left: 35px;
  }

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
  color: $icon;
  text-decoration: none;

  transition: 0.1s color linear;

  &__text {
    margin-left: 35px;
  }

  &:hover,
  &:focus {
    color: $white;
  }
}

.user-settings-link {
  font-size: 16px;
  text-decoration: none;
  color: $icon;

  transition: 0.1s color linear;

  &__text {
    margin-left: 35px;
  }

  &:hover,
  &:focus {
    color: $white;
  }
}
</style>
