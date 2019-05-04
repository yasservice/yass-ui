<template>
  <streams :items="streams" title="RecommendedStreams"></streams>
</template>

<script>
import Streams from "./Streams";

export default {
  name: "TopStreams",

  components: {
    Streams
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
  }
};
</script>
<style lang="scss" scoped>
</style>

