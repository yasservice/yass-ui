<template>
  <el-input class="search-input" placeholder="Поиск" suffix-icon="el-icon-search" v-model="searchValue"></el-input>
</template>

<script>
export default {
  name: "SearchInput",

  data() {
    return {
      searchValue: ""
    };
  }
};
</script>

<style lang="scss">
.search-input {
  .el-input__inner {
    height: 30px;
    background: $bg-brighter;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: $white;

    &::placeholder {
      color: $info--light;
    }
  }

  .el-input__icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: $primary;
  }
}

</style>
