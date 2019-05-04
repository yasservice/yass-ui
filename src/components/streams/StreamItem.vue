<template>
  <router-link :to="{ path: item.link }" :alt="item.alt" :title="item.alt" class="stream-item">
    <div class="stream-item__video">
      <img :src="require(`@/assets/${item.videoImg}`)" :alt="item.channel">
    </div>

    <div class="stream-item__info">
      <div class="stream-item__avatar">
        <img :src="require(`@/assets/${item.img}`)" :alt="item.channel">
      </div>

      <p class="stream-item__titles">
        <span class="stream-item__title">{{ item.title }}</span>

        <span class="stream-item__additional-info">
          <span class="stream-item__channel">{{ item.channel }}</span>
          <span>|</span>
          <span class="stream-item__category">{{ item.category }}</span>
        </span>
      </p>
    </div>

    <p class="stream-item__type stream-item__type--views" v-if="!item.video && !item.clip">
      <span class="stream-item__type-icon stream-item__type--views-icon">
        <font-awesome-icon :icon="faCircle" aria-label="true"></font-awesome-icon>
      </span>
      {{ item.views }}
    </p>

    <p class="stream-item__type stream-item__type--video" v-else-if="item.video && !item.clip">
      <span class="stream-item__type-icon">
        <font-awesome-icon :icon="faPlayCircle" aria-label="true"></font-awesome-icon>
      </span>
      {{ item.video }}
    </p>

    <p class="stream-item__type stream-item__type--clip" v-else>
      <span class="stream-item__type-icon">
        <font-awesome-icon :icon="faVideo" aria-label="true"></font-awesome-icon>
      </span>
      {{ item.clip }}
    </p>
  </router-link>
</template>
<script>
import {
  faAd,
  faVideo,
  faCircle,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "StreamItem",

  components: {
    faVideo,
    faCircle,
    faPlayCircle
  },

  props: {
    item: {
      type: Object,
      required: true
    },
  },

  data() {
    return {
      faVideo,
      faCircle,
      faPlayCircle
    };
  },

  methods: {
    setBgImage: src => {
      return `background: url("<% @/assets/img/categories/ %>1.jpg") no-repeat center center`;
    }
  }
};
</script>
<style lang="scss" scoped>
.stream-item {
  position: relative;

  display: flex;
  flex-direction: column;

  border-radius: $--border-radius-base;

  text-decoration: none;
  color: $white;

  background: $bg--dark;

  transition: background-color ease-in-out 0.2s;

  &:hover,
  &:focus {
    background-color: $bg-darkest;
  }

  &__video {
    // min-height: 170px;

    img {
      width: 100%;
      height: auto;

      border-top-left-radius: $--border-radius-base;
      border-top-right-radius: $--border-radius-base;
    }
  }

  &__info {
    padding: 15px 10px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__avatar {
    margin: 0;
    margin-right: 20px;

    width: 40px;
    height: 40px;
    border-radius: 50%;

    background-repeat: no-repeat;
    background-position: center center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  &__titles {
    margin: 0;
  }

  &__title {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }

  &__additional-info {
    display: inline-flex;

    font-size: 13px;
    line-height: 18px;
    color: $info;
  }

  &__channel {
    margin-right: 8px;
  }

  &__category {
    margin-left: 8px;
  }

  &__type {
    position: absolute;
    top: 8px;
    right: 8px;

    display: inline-flex;
    align-items: center;
    padding: 4px;
    margin: 0;

    border-radius: $--border-radius-base;
    background: rgba(0, 0, 0, 0.5);

    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    color: $white;

    &-icon {
      margin-right: 5px;
    }

    &--views {
      &-icon {
        color: $--color-danger;
        font-size: 10px;
      }
    }
  }
}
</style>
