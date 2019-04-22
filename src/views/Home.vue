<template>
  <div class="home">
    <main-slider></main-slider>
    <div class="home-content-body layout">
      <categories></categories>
      <promising></promising>
      <best-streams></best-streams>
    </div>
  </div>
</template>

<script>
import MainSlider from '@/components/main-slider';
import Categories from './home/categories';
import Promising from './home/promising';
import BestStreams from './home/best-streams';

export default {
  name: 'Home',
  components: {
    MainSlider,
    Categories,
    Promising,
    BestStreams,
  }
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 40px 0;
  }
</style>
