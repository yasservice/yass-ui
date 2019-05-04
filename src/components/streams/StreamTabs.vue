<template>
  <div>
    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="Top Streams" name="Top">
        <top-streams></top-streams>
      </el-tab-pane>

      <el-tab-pane label="Recommended Streams" name="Recommended">
        <recommended-streams></recommended-streams>
      </el-tab-pane>

      <el-tab-pane label="Last Video" name="Video">
        <stream-videos></stream-videos>
      </el-tab-pane>

      <el-tab-pane label="Last Clips" name="Clips">
        <stream-clips></stream-clips>
      </el-tab-pane>
    </el-tabs>
    <!-- <stream-filter></stream-filter> -->
  </div>
</template>

<script>
import StreamClips from "./StreamClips";
import StreamVideos from "./StreamVideos";
import TopStreams from "./TopStreams";
import RecommendedStreams from "./RecommendedStreams";

import StreamFilter from "./StreamFilter";

export default {
  name: "StreamTabs",

  components: {
    StreamClips,
    StreamVideos,
    TopStreams,
    RecommendedStreams,
    StreamFilter
  },

  data() {
    return {
      activeTab: "Top"
    };
  },

  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

