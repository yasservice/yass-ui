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
import MainSlider from '@/components/MainSlider';
import Categories from './home/Categories';
import Promising from './home/Promising';
import BestStreams from './home/BestStreams';

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
