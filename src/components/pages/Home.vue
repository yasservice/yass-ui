<template>
  <div class="home">
    <main-slider></main-slider>
    <div class="home-content-body layout">
      <categories></categories>
    </div>
  </div>
</template>

<script>
import MainSlider from '@/components/elements/main-slider';
import Categories from '@/components/pages/home/categories';

export default {
  name: 'home',
  components: {
    MainSlider,
    Categories,
  }
}
</script>

<style lang="scss" scoped>
  .home-content-body {

  }
</style>
