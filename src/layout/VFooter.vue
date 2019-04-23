<template>
  <div class="main-footer-wrap">
    <el-row type="flex" justify="space-between" align="middle" tag="footer" class="main-footer">
      <el-col :xs="24" :sm="4">Logo</el-col>
      <el-col :xs="24" :sm="8">sdf</el-col>
      <el-col :xs="24" :sm="4">© all rights reserved</el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "MainFooter"
};
</script>
<style lang="scss" scoped>
.main-footer {
  padding: 20px 30px;
  flex-wrap: wrap;

  &-wrap {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background: $red;
      box-shadow: $neon-shadow-red;

      @include adopt("sm-and-up") {
        @include blink;
      }
    }
  }
}
</style>
