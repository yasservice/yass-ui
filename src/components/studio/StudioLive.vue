<template>
  <el-row :gutter="gutter" class="studio-live" type="flex">
    <el-col :lg="12" :xl="9" class="studio-live__col">
      <live-video class="studio-live__item"></live-video>
    </el-col>
    <el-col :lg="12" :xl="5" class="studio-live__col">
      <chat class="studio-live__item"></chat>
    </el-col>
    <el-col :lg="12" :xl="5" class="studio-live__col">
      <stream-action class="studio-live__item"></stream-action>
    </el-col>
    <el-col :lg="12" :xl="5" class="studio-live__col">
      <stream-status class="studio-live__item"></stream-status>
      <stream-bitrate class="studio-live__item"></stream-bitrate>
      <stream-state class="studio-live__item"></stream-state>
    </el-col>
  </el-row>
</template>
<script>
import LiveVideo from "./live/LiveVideo";
import Chat from "@/components/chat/Chat";
import StreamAction from "./live/StreamAction";
import StreamStatus from "./live/StreamStatus";
import StreamState from "./live/StreamState";
import StreamBitrate from "./live/StreamBitrate";

export default {
  name: "StudioLive",

  components: {
    LiveVideo,
    Chat,
    StreamAction,
    StreamStatus,
    StreamState,
    StreamBitrate
  },

  data() {
    return {
      data: null
    };
  },

  computed: {
    gutter() {
      return this.$store.getters.getBlockSpace;
    }
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.studio-live {
  flex-wrap: wrap;
  &__col {
    flex: 1;

    &:last-child {
      .studio-live__item {
        height: auto;
        margin-bottom: $block-space;

        &:last-child {
            margin-bottom: 0px;
        }
      }
    }
  }

  &__item {
  }
}
</style>
