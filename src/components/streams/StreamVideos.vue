<template>
  <streams :items="streams" title="RecommendedStreams"></streams>
</template>

<script>
import Streams from "./Streams";
export default {
  name: "StreamVideos",

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
          category: "Minecraft",
          video: "4:22:30",
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft",
          video: "4:22:30",
        },
        {
          link: "/",
          img: "img/categories/1.jpg",
          videoImg: "img/streams/1.jpg",
          views: "200",
          title: "BEST MINECRAFT ADVENTURE",
          alt: "",
          channel: "DicklessJohn",
          category: "Minecraft",
          video: "4:22:30",
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

