<template>
  <section class="main-categories">
    <default-header :title="defaultHeader.title" :breadcrumbs="defaultHeader.breadcrumbs">
      <button class="btn-reset" style="margin-left: auto">
        <span class>Filter</span>

        <span>
          <i class="el-icon-circle-plus"></i>
        </span>
      </button>
    </default-header>

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
          :xl="3  "
        >
          <category-item-page :item="item"></category-item-page>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import CategoryItemPage from "@/components/categories/CategoryItemPage";
import StartStream from "@/components/StartStream";
import DefaultHeader from "@/components/elements/DefaultHeader";

export default {
  name: "Categories",

  components: {
    CategoryItemPage,
    StartStream,
    DefaultHeader
  },

  data() {
    return {
      categories: [
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        },
        {
          title: "Dota 2",
          img: "img/categories/1.png",
          view: "200",
          link: "/"
        }
      ],

      defaultHeader: {
        breadcrumbs: [
          {
            text: "Band",
            pathName: ""
          }
        ],

        title: "Band"
      }
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
    align-items: center;
  }

  &__title {
    margin-right: 20px;
  }

  &__body {
    margin: 15px 0;
  }
}
</style>
