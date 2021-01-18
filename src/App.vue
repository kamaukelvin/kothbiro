<template>
  <v-app>


    <v-main class="bg">
     
      <router-view/>
     
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

 

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
a {  
  text-decoration: none;
  
}

</style>
