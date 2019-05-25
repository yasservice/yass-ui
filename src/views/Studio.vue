<template>
  <div>
    <default-header :title="defaultHeader.title" :breadcrumbs="defaultHeader.breadcrumbs"></default-header>

    <!-- <live-video></live-video> -->
    <!-- <chat></chat> -->
    <!-- <stream-action></stream-action> -->
    <stream-status></stream-status>
  </div>
</template>
<script>
import DefaultHeader from "@/components/elements/DefaultHeader";
import LiveVideo from "@/components/studio/LiveVideo";
import Chat from "@/components/chat/Chat";
import StreamAction from "@/components/studio/StreamAction";
import StreamStatus from "@/components/studio/StreamStatus";

export default {
  name: "Studio",

  components: {
    DefaultHeader,
    LiveVideo,
    Chat,
    StreamAction,
    StreamStatus
  },

  data() {
    return {
      defaultHeader: {
        breadcrumbs: [
          {
            text: "Studio",
            pathName: ""
          }
        ],

        title: "Studio"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
