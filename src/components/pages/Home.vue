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
import MainSlider from '@/components/elements/main-slider';
import Categories from '@/components/pages/home/categories';
import Promising from '@/components/pages/home/promising';
import BestStreams from '@/components/pages/home/best-streams';

export default {
  name: 'home',
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
