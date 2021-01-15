<template>
  <v-app>


    <v-main>
      <Layout/>
    </v-main>
  </v-app>
</template>

<script>
import Layout from './components/Layout';

export default {
  name: 'App',

  components: {
    Layout,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: "SF";
  src: local("SF"),
   url(./fonts/SF/SFProText-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Ubuntu";
  src: local("Ubuntu"),
   url(./fonts/Ubuntu/Ubuntu-Bold.ttf) format("truetype");
}

</style>
