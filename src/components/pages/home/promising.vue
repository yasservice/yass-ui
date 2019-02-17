<template>
   <el-row class="home__promising promising" :gutter="gutter" tag="section">
    <el-col class="promising__col">
      <h2>Promising</h2>
    </el-col>
    <el-col class="promising__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="promising__link card-syle"></router-link>
    </el-col>
     <el-col class="promising__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="promising__link card-syle"></router-link>
    </el-col>
     <el-col class="promising__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="promising__link card-syle"></router-link>
    </el-col>
     <el-col class="promising__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="promising__link card-syle"></router-link>
    </el-col>
     <el-col class="promising__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="promising__link card-syle"></router-link>
    </el-col>
     <el-col class="promising__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="promising__link card-syle"></router-link>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Promising',

   computed: {
    gutter() {
      return this.$store.getters.getBlockSpace;
    },
  },
}
</script>
<style lang="scss" scoped>
$height: 400px;
.promising {
  margin-bottom: 40px;
  &__col {

  }

  &__link {
    display: block;
    height: $height;
  }
}
</style>
