<template>
  <router-link class="user-stream-info" :to="{ path: sreamInfo.link }">
    <div class="user-stream-info__body">
      <user-icon :stream="sreamInfo"></user-icon>

      <div class="user-stream-info__additional-body">
        <p
          class="user-stream-info__additional user-stream-info__stream-name"
           :class="{'user-stream-info__stream-name--offline': sreamInfo.status === 'offline'}"
        >{{ sreamInfo.channelName }}</p>

        <p
          class="user-stream-info__additional user-stream-info__channel-name"
          :class="{'user-stream-info__channel-name--online': sreamInfo.status === 'online'}"
        >{{ sreamInfo.status === 'streaming' ? sreamInfo.streamName : sreamInfo.status }}</p>
      </div>
    </div>

    <p v-if="sreamInfo.status === 'streaming'" class="user-stream-info__views">
      <span class="user-stream-info__views--icon">
        <font-awesome-icon :icon="faCircle" aria-label="true"></font-awesome-icon>
      </span>
      {{ sreamInfo.views }}
    </p>
  </router-link>
</template>
<script>
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import UserIcon from "./UserIcon";

export default {
  name: "UserChannelInfo",

  components: {
    UserIcon
  },

  props: {
    sreamInfo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      faCircle
    };
  }
};
</script>

<style lang="scss" scoped>
.user-stream-info {
  width: 300px;
  padding-right: 10px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  background: transparent;
  border-radius: $--border-radius-base;
  
  text-decoration: none;

  transition: 0.1s linear background-color;
  
  &:hover,
  &:focus {
    background: $bg--most-darkest;
  }

  &__body {
    display: flex;
    align-items: center;
  }

  &__additional {
    padding: 0;
    margin: 0;

    margin-left: 15px;
  }

  &__stream-name {
    font-size: 16px;
    line-height: 20px;
    color: $white;

    &--offline {
      color: $info;
    }
  }

  &__channel-name {
    font-size: 14px;
    line-height: 16px;
    color: $info;

     &--online {
      color: $status--online;
    }
  }

  &__views {
    margin-left: auto;
    display: flex;
    align-items: center;

    color: $white;

    &--icon {
      font-size: 12px;

      margin-right: 10px;
      color: $--color-danger;
    }
  }
}
</style>
