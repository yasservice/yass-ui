<template>
  <div>
    <video-player :options="videoOptions"></video-player>
  </div>
</template>
<script>
import VideoPlayer from "@/components/video/VideoPlayer";

export default {
  name: "Stream",

  components: {
    VideoPlayer
  },

  data() {
    return {
      videoOptions: {
        // autoplay: true,
        controls: true,
        poster: require(`@/assets/liveStream.jpg`),

        sources: [
          {
            src: "https://vjs.zencdn.net/v/oceans.mp4",
            type: "video/mp4"
          }
        ]
      }
    };
  }
};
</script>
