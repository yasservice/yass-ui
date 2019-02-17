<template>
   <el-carousel :interval="4000" type="card" height="400px" id='mainCourusel' @change='slideChange'>
    <el-carousel-item v-for="item in 6" :key="item">
      <!-- <iframe src="https://www.youtube.com/embed/BunFEsmat1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: 'MainSlider',

  methods: {
    slideChange(prevIndex, activeIndex) { 
      this.$el.childNodes[1].childNodes.forEach((element, index) => {
        if (index === prevIndex) {
          console.log(prevIndex);
        }
      });;
    }
  }
}
</script>

<style lang="scss">
  #mainCourusel {
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;  
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
  }
</style>
<style lang="sass" scoped>


</style>
