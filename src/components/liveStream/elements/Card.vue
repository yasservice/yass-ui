<template>
  <div class="live-stream-card">
    <div class="live-stream-card__img-body">
      <img :src="require(`@/assets/${cardInfo.img}`)" alt class="live-stream-card__img">
    </div>
    <div class="live-stream-card__content">
      <h3 class="live-stream-card__title">{{ cardInfo.title }}</h3>
      <p class="live-stream-card__category">Category: <router-link :to="{path: '/'}" class="live-stream-card__category-text">{{ cardInfo.category }}</router-link></p>
      <ul class="live-stream-card__hashtag-list ul">
        <li
          class="live-stream-card__hashtag-item"
          v-for="(item, index) in cardInfo.hashtags"
          :key="'live streams hash tag ' + index"
        >
          <router-link
            class="live-stream-card__hashtag-link hashtag"
            :to="{ path: item.path }"
          >{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",

  props: {
    cardInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.live-stream-card {
  display: inline-flex;
  align-items: center;

  &__img {
    &-body {
      margin-right: 15px;
    }

    max-width: 80px;
    max-height: 90px;
  }

  &__content {
  }

  &__title {
    margin: 0;
  }

  &__category {
    margin: 5px 0;
    color: $white;

    &-text {
        color: $primary--light;
    }
  }

  &__hashtag {
    &-list {
      display: flex;
    }

    &-link {
      margin-right: 5px;
    }
  }
}
</style>
