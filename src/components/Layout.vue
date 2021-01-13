<template >
<div class="bg">
  <v-container>
<!-- <Landing/> -->
<Details/>
  </v-container>
  </div>
</template>

<script>
// import Landing from '../components/pages/landing'
import Details from '../components/pages/details'
  export default {
    name: 'Layout',
        components: {
        // Landing,
        Details
  },
  }
</script>
<style >
.bg{
  background: #121421;
  height:100%;
  overflow: hidden;
  
}
.year {
    text-transform: uppercase;
    color: #ffff;
    opacity: 0.37;
    font-size: 16px;

}
</style>
