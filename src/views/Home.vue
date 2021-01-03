<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="passing props this is a prop of a component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
