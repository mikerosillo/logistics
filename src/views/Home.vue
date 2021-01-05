<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld />
    <WhatWeDo />
    <Parallax />
    <Strongest />
    <Carousel />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import Parallax from '@/components/Parallax.vue'
import Strongest from '@/components/Strongest.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    WhatWeDo,
    Parallax,
    Strongest,
    Carousel
  }
}
</script>
