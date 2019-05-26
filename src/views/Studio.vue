<template>
  <div>
    <default-header :title="defaultHeader.title" :breadcrumbs="defaultHeader.breadcrumbs"></default-header>

    <el-tabs v-model="activeTabe" @tab-click="tabChange">
      <el-tab-pane label="Live" name="live">
        <studio-live></studio-live>
      </el-tab-pane>
      <el-tab-pane label="Analytics" name="analytics">Analytics</el-tab-pane>
      <el-tab-pane label="Videos" name="videos">Videos</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import DefaultHeader from "@/components/elements/DefaultHeader";
import StudioLive from "@/components/studio/StudioLive";

export default {
  name: "Studio",

  components: {
    DefaultHeader,
    StudioLive
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
      },

      activeTabe: "live"
    };
  },

  methods: {
    tabChange(tab, event) {}
  }
};
</script>
<style lang="scss" scoped>
</style>
