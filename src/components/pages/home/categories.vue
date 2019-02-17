<template>
  <el-row class="home__categories categories" :gutter="gutter" tag="section">
    <el-col class="caregories__col">
      <h2>categories</h2>
    </el-col>
    <el-col class="categories__col" :xs="24" :sm="8"  :lg="4">
      <router-link :to="'home'" class="categories__link card-syle"></router-link>
    </el-col>
     <el-col class="categories__col" :xs="24" :sm="8"  :lg="4">
      <router-link :to="'home'" class="categories__link card-syle"></router-link>
    </el-col>
     <el-col class="categories__col" :xs="24" :sm="8"  :lg="4">
      <router-link :to="'home'" class="categories__link card-syle"></router-link>
    </el-col>
     <el-col class="categories__col" :xs="24" :sm="8"  :lg="4">
      <router-link :to="'home'" class="categories__link card-syle"></router-link>
    </el-col>
     <el-col class="categories__col" :xs="24" :sm="8"  :lg="4">
      <router-link :to="'home'" class="categories__link card-syle"></router-link>
    </el-col>
     <el-col class="categories__col" :xs="24" :sm="8"  :lg="4">
      <router-link :to="'home'" class="categories__link card-syle"></router-link>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Categories',

  computed: {
    gutter() {
      return this.$store.getters.getBlockSpace;
    },
  },
  
}
</script>
<style lang="scss" scoped>
$height: 200px;
.categories {
  margin-bottom: 40px;
  &__col {

  }

  &__link {
    display: block;
    height: 200px;
  }
}
  
</style>