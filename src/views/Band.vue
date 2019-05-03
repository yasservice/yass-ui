<template>
  <div class="band-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>My Band</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="band-page__title-wrap">
      <h1 class="band-page__title page-title">My Band</h1>

      <router-link class="link-to-start-stream btn-reset btn-primary" :to="{path: '/'}">
        <span class="link-to-start-stream__icon">
          <i class="el-icon-video-play"></i>
        </span>
        <span class="link-to-start-stream__text">start stream</span>
      </router-link>
    </div>

    <categories></categories>
  </div>
</template>

<script>
import Categories from '@/components/categories/Categories';

export default {
  name: 'Band',

  components: {
    Categories,
  }
}
</script>

<style lang="scss" scoped>
.band-page {

  &__title {
    margin-right: 40px;

    &-wrap {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}

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
