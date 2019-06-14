<template>
  <section class="stream-categories">
    <div class="stream-categories__title-body">
      <h2 class="stream-categories__title">CURRENT STREAMING CATEGORIES</h2>

      <router-link :to="{path: 'categories'}" class="stream-categories__link link-primary">
        <span>see all</span>

        <span class="link-primary__icon">
          <i class="el-icon-arrow-right"></i>
        </span>
      </router-link>
    </div>

    <!-- <el-row class="stream-categories__row" :gutter="gutter">
      <el-col class="stream-categories__col"
              v-for="(item, index) in categories"
              :key="'category item' + index" 
              :xs="8"
              :sm="8"
              :md="6"
              :lg="4"
              :xl="3">
        <category-item :item="item">
        </category-item>
      </el-col>
    </el-row>-->

    <div class="stream-categories__row">
      <div
        class="stream-categories__col"
        v-for="(item, index) in categories"
        :key="'category item' + index"
      >
        <category-item :item="item"></category-item>
      </div>
    </div>
  </section>
</template>
<script>
import CategoryItem from "./CategoryItem";

export default {
  name: "Categories",

  components: {
    CategoryItem
  },

  data() {
    return {
      categories: [
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200",
          link: "/"
        }
      ]
    };
  },

  computed: {
    gutter() {
      return this.$store.getters.getBlockSpace;
    }
  }
};
</script>

<style lang="scss" scoped>
.stream-categories {
  margin: 0 -20px;
  padding: $block-space;
  // height: 390px;
  overflow: hidden;

  border: 1px solid $border-color;

  background: $bg--most-darkest;

  &__title {
    margin-right: auto;

    font-size: 16px;
    line-height: 1.5;
    color: $white;

    &-body {
      display: flex;
      align-items: center;
    }
  }

  &__link {
    color: $primary--light;
  }

  &__row {
    display: flex;
    flex-wrap: nowrap;
    margin-left: -1rem;
    margin-right: -1rem;

    &:nth-child(8) {
      @include adopt("lg-and-down") {
        display: none;
      }
    }
  }

  &__col {
    flex: 1 0 auto;
    max-width: 50%;
    width: 12rem;
    padding: 0 1rem;

    &:nth-child(8) {
      @include adopt("lg-and-down") {
        display: none;
      }
    }

    &:nth-child(7) {
      @include adopt("lg-and-down") {
        display: none;
      }
    }

    &:nth-child(6) {
      @include adopt("md-and-down") {
        display: none;
      }
    }

    &:nth-child(5) {
      @include adopt("md-and-down") {
        display: none;
      }
    }

    &:nth-child(4) {
      @include adopt("sm-and-down") {
        display: none;
      }
    }

    &:nth-child(3) {
      @include adopt("sm-and-down") {
        display: none;
      }
    }
  }
}
</style>