<template>
  <div class="container">
    <VueSlickCarousel v-bind="settings">
      <div class="container"><div class="jumbotron">1</div></div>
      <div class="container"><div class="jumbotron">2</div></div>
      <div class="container"><div class="jumbotron">3</div></div>
      <div class="container"><div class="jumbotron">4</div></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'Carousel',
    components: { VueSlickCarousel },
    data() {
        return {
            settings:{
              "dots": true,
              "arrows": false,
              "fade": true,
              "infinite": true,
              "speed": 500,
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
        }
    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
