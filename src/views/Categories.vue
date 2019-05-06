<template>
  <section class="main-categories">
    <div class="main-categories__header">
      <h1>Categories</h1>

      <button class="btn-reset">
        <span class="">
            Filter
        </span>

        <span>
            <i class="el-icon-circle-plus"></i>
        </span>
      </button>
    </div>

    <div class="main-categories__body">
      <el-row class="main-categories__row" :gutter="gutter">
        <el-col
          class="main-categories__col"
          v-for="(item, index) in categories"
          :key="'category item' + index"
          :xs="8"
          :sm="8"
          :md="6"
          :lg="4"
          :xl="3"
        >
          <category-item :item="item"></category-item>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import CategoryItem from "@/components/categories/CategoryItem";

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
.main-categories {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    margin: 0 -20px;
    padding: 20px;
    background: $bg--most-darkest;
  }
}
</style>
