<template>
  <router-link class="user-icon"
              :class="{'user-icon--offline': stream.status === 'offline'}"
              :to="{ path: stream.link }" 
              :title="stream.title">
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
    position: relative;

    width: 50px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 3px;

    border-radius: 50%;
    border: 2px solid $icon;

    opacity: 0.7;

    &--offline::before { 
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        border-radius: 50%;

        background: rgba(0, 0, 0, 0.8);
    }

    &__img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: url($assets + 'user.jpg') no-repeat center center;
    }

    &__status {
      position: absolute;
      bottom: 0;
      right: 5px;

      width: 10px;
      height: 10px;
      display: block;

      border: 2px solid $status-border;

      &--online {
        background-color: $status--online;
        border-radius: 2px;
      }

      &--offline {
        background-color: $status--offline;
        border-radius: 2px;

        & ~ .user-icon__img {
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background: $bg-brighter;
          }
        }
      }

      &--streaming {
        background-color: $status--streaming;
        border-radius: 50%;
      }
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
</style>

