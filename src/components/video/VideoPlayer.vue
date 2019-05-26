<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>
<script>
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      { ...{ responsive: true, fluid: true }, ...this.options },
      function onPlayerReady() {
        console.log("onPlayerReady", this);
      }
    );
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
<style lang="scss">
  @import '~video.js/src/css/video-js';
  @import '~@/scss/common/videojs';
</style>


