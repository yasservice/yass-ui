<template>
  <el-row type="flex" justify="space-between" align="middle" class="main-footer">
    <el-col :xs="24" :sm="4">
      Logo
    </el-col>
    <el-col :xs="24" :sm="8">
      sdf
    </el-col>
    <el-col :xs="24" :sm="4">
      © all rights reserved
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'MainFooter',

};
</script>
<style lang="scss">
.main-footer {
  padding: 20px 30px;
  box-shadow: 0 0 5px -1px rgba(0,0,0,.2);

}

</style>
