<template>
  <nav class="top-menu">
    <ul class="top-menu__list ul">
      <li class="top-menu__item" v-for="(item, index) in menuItems" :key="'top-menu' + index">
        <router-link
          class="top-menu__link"
          :to="{ path: item.link }"
          :title="item.text"
          :class="{ 'top-menu__link--active': item.isActive,
                    'top-menu__link--hover': !item.isActive }"
        >
          <span class="top-menu__link-icon">
            <font-awesome-icon :icon="item.icon" aria-label="true"></font-awesome-icon>
          </span>

          <!-- <span class="top-menu__link-text">{{ item.text }}</span> -->
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  faPuzzlePiece,
  faTv,
  faUsers,
  faCrown,
  faBroadcastTower,
  faNewspaper,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "TopMenu",

  data() {
    return {
      menuItems: [
        {
          link: "band",
          icon: faPuzzlePiece,
          text: "band"
        },
        {
          link: "streams",
          icon: faTv,
          text: "streams"
        },
        {
          link: "friends",
          icon: faUsers,
          text: "friends"
        },
        {
          link: "categories",
          icon: faCrown,
          text: "categories"
        },
        {
          link: "studio",
          icon: faBroadcastTower,
          text: "studio"
        },
        {
          link: "news",
          icon: faNewspaper,
          text: "news"
        },
        {
          link: "faq",
          icon: faQuestionCircle,
          text: "faq"
        }
      ]
    };
  },

  mounted() {},

  watch: {
    // '$route': {
    //   deep: true,
    //   immediate: true,
    //   handler: function(refreshPage) {
    //     console.log('deep');
    //   }
    // },

    $route(to, from) {
      this.onUrlChange();
    }
  },

  mounted() {
    this.onUrlChange();
  },

  computed: {
  },

  methods: {
    onUrlChange() {
      const menu = this.menuItems.reduce((acc, item) => {
        const url = window.location.href;

        if (url.includes(item.link)) {
          item.isActive = true;
        } else if (item.isActive) {
          item.isActive = false;
        }

        return [...acc, ...[item]];
      }, []);

      this.menuItems = menu;
    }
  }
};
</script>

<style lang="scss" scoped>
.top-menu {
  &__list {
    display: flex;
    justify-content: center;
    padding: 2px 0;

    border-radius: $--border-radius-base;
    background-color: $bg-darkest;

    transition: all 0.2s ease-in;

    // width: 200px;
  }

  &__link {
    position: relative;
    text-decoration: none;
    padding: 0 10px;
    // margin: 0 20px;
    display: inline-flex;
    // width: 30px;
    // overflow: hidden;

    color: $icon;

    // transition: all 0.2s ease-in;

    &--active {
      color: $primary;
      &:hover {
        cursor: default;
      }
    }

    &--hover {
      &:hover,
      &:focus {
        color: $primary--light;
      }
    }

    &-text {
      // position: absolute;
      // opacity: 0;

      // color: $white;

      // width: 0px;
      // opacity: 0;

      // transition: all 0.5s linear;
    }

    &-icon {
      // margin-right: 5px;
    }

    &:hover,
    &:focus {
      // position: relative;
      // opacity: 1;

      // width: 100%;
    }

    &:hover &-text,
    &:focus &-text {
      // width: 100%;
      // opacity: 1;
    }
  }
}
</style>