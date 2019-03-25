<template>
   <el-row class="home__best-streams best-streams" :gutter="gutter" tag="section">
    <el-col class="best-streams__col">
      <h2 class="section-title section-title--neon-yellow">Best streams</h2>
    </el-col>
    <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
     <el-col class="best-streams__col" :xs="24" :sm="8">
      <router-link :to="'home'" class="best-streams__link card-syle"></router-link>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'BestStreams',

   computed: {
    gutter() {
      return this.$store.getters.getBlockSpace;
    },
  },
}
</script>
<style lang="scss" scoped>
$height: 400px;
.best-streams {
  margin-bottom: 40px;
  &__col {

  }

  &__link {
    display: block;
    height: $height;
  }
}
</style>
