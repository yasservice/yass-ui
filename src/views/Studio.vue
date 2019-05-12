<template>
  <div>
    <default-header :title="defaultHeader.title" :breadcrumbs="defaultHeader.breadcrumbs"></default-header>

    <live-video></live-video>
  </div>
</template>
<script>
import DefaultHeader from "@/components/elements/DefaultHeader";
import LiveVideo from "@/components/studio/LiveVideo";

export default {
  name: "Studio",

  components: {
    DefaultHeader,
    LiveVideo
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
