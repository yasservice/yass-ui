<template>
  <router-link class="user-icon btn-reset" :to="{ path: stream.link }" :title="title">
    <div class="user-icon__img"></div>

    <span class="user-icon__status"
          :class="{
            'user-icon__status--online': stream.status === 'online',
            'user-icon__status--offline': stream.status === 'offline',
            'user-icon__status--streaming': stream.status === 'streaming'
          }">
    </span>
  </router-link>
</template>

<script>
export default {
  name: "UserIcon",

  props: {
    link: String,
    streaming: {
      type: Boolean,
      default: false,
    },
    online: {
      type: Boolean,
      default: false
    },
    offline: {
      type: Boolean,
      default: false
    },
    img: String,
    title: String,

    stream: {
      type: Object,
    }
  },

  methods: {

    setBgImage: (src) => {
      return `background: url("<% @/assets/ %>user.jpg") no-repeat center center`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .user-icon {
    width: 50px;
    height: 50px;

    border-radius: 50%;

    &__img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: url($assets + 'user.jpg') no-repeat center center;
    }
  }
</style>

