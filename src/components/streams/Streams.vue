<template>
  <section class="streams">
    <h2 class="streams__title hide-element">{{ title }}</h2>

    <el-row class="stream__row" :gutter="gutter">
      <el-col class="stream__col"
              v-for="(item, index) in items"
              :key="'category item' + index" 
              :xs="24"
              :sm="12"
              :md="8"
              :lg="6"
              :xl="4">
        <stream-item :item="item" isClip>
        </stream-item>
      </el-col>
    </el-row>
  </section>
</template>
<script>
import StreamItem from "./StreamItem";

export default {
  name: "Categories",

  components: {
    StreamItem
  },

  props: {
    items: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      required: true,
    }
  },

   data() {
    return {
      streams: [
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft"
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
.streams {
  padding-top: $block-space;
 
  &__row {
  }

  &__col {
  }
}
</style>