<template>
  <router-link class="link-to-start-stream btn-reset btn-primary" :to="{path: '/'}">
    <span class="link-to-start-stream__icon">
      <i class="el-icon-video-play"></i>
    </span>
    <span class="link-to-start-stream__text">start stream</span>
  </router-link>
</template>
<script>
export default {
    name: "StartStream",
}
</script>

<style lang="scss" scoped>
.link-to-start-stream {
  padding: 8px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  &__icon {
    font-size: 18px;

    margin-right: 10px;
  }

  &__text {
    margin-bottom: -1px;
  }

}
</style>

