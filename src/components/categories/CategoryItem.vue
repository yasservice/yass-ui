<template>
  <router-link
    :to="{ path: item.link }"
    class="category-item"
    :title="item.title"
    :alt="item.title"
  >
    <div class="category-item__img-body">
      <img :src="require(`@/assets/${item.img}`)" :alt="item.title" class="category-item__img">
    </div>

    <p class="category-item__info">
      <span class="category-item__info-title">{{ item.title }}</span>

      <span class="category-item__info-view">
        <span class="category-item__info-view-icon">
          <font-awesome-icon :icon="faEye" aria-label="true"></font-awesome-icon>
        </span>
        <span>{{ item.view }}</span>
      </span>
    </p>
  </router-link>
</template>
<script>
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "CategoryItem",

  components: {
    faEye
  },

  data() {
    return {
      faEye
    };
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.category-item {
  display: flex;
  flex-direction: column;

  background: transparent;
  text-decoration: none;

  &__img-body {
    border-radius: $--border-radius-base;
  }

  &__img {
    width: 100%;
    height: auto;

    border-radius: $--border-radius-base;
  }

  &__info {
    margin: 0;
    margin-top: 10px;
    padding: 8px 10px;
    display: inline-flex;
    justify-content: space-between;

    border-radius: $--border-radius-base;
    background-color: $bg--light-alpha;

    color: $white;

    transition: background-color 0.1s linear;

    &-title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &-view {
      &-icon {
        color: $primary--light;
        margin-right: 5px;

        transition: color 0.1s linear;
      }
    }
  }

  &:hover &__info,
  &:focus &__info {
    background-color: $bg-brighter;

    &-view-icon {
      color: $primary;
    }
  }
}
</style>