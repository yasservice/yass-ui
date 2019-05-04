<template>
  <streams :items="streams" title="RecommendedStreams"></streams>
</template>

<script>
import Streams from "./Streams";
export default {
  name: "StreamClips",

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
          clip: "0:55"
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
          clip: "0:55"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

