<template>
  <div class="default-header">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      v-for="(item, index) in breadcrumbs"
      :key="'default-header-breadcrumbs' + index"
    >
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ name: item.pathName }">{{ item.text }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="default-header__title-body">
      <h1 class="default-header__title">{{ title }}</h1>

      <start-stream></start-stream>

      <slot></slot>
    </div>
  </div>
</template>
<script>
import StartStream from "@/components/StartStream";
export default {
  name: "DefaultTemaplate",

  components: {
    StartStream
  },

  props: {
    breadcrumbs: {
      required: true,
      type: Array
    },

    title: {
      required: true,
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.default-header {
  margin-bottom: 30px;

  &__title-body {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__title {
    margin: 0;
    margin-right: 40px;
  }
}
</style>
