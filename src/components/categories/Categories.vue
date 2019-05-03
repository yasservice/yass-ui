<template>
  <section class="stream-categories">
    <div class="stream-categories__title-body">
      <h2 class="stream-categories__title">CURRENT STREAMING CATEGORIES</h2>

      <router-link :to="{path: '/'}" class="link-primary">
        <span>
          see all
        </span>

         <span class="link-primary__icon">
          <i class="el-icon-arrow-right"></i>
        </span>
      </router-link>
    </div>
    
    <el-row class="stream-categories__row" :gutter="gutter">
      <el-col class="stream-categories__col"
              v-for="(item, index) in categories"
              :key="'category item' + index" 
              :md="6"
              :lg="4"
              :xl="3">
        <category-item :item="item">
        </category-item>
      </el-col>
    </el-row>
  
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
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.jpg",
          view: "200"
        },
     
      ]
    };
  },

  computed: {
      gutter() {
          return this.$store.getters.getBlockSpace;
      },
  }
};
</script>

<style lang="scss" scoped>
.stream-categories {
  margin-left: -20px;

  background: $bg--most-darkest;
  padding: $block-space;

  border: 1px solid $border-color;

  &__title {
    margin-right: auto;

    font-size: 16px;
    line-height: 1.5;
    color: $info;

    &-body {
      display: flex;
      align-items: center;
    }
  }
}
</style>