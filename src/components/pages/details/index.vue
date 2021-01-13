<template>
  <div>
    <Nav />

    <v-tabs v-model="tab" background-color="transparent" color="white" grow>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab color="white" v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-text><Roots/></v-text>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Nav from "../../templates/nav";
import Roots from '../../templates/tabs/Roots'
// import Standings from '../../templates/tabs/Standings'
export default {
  components: {
    Nav,
 Roots,
    // Standings
  },
  data() {
    return {
      tab: null,
      items: ["Roots", "Standings", "Knockout", "Gallery"],
      contents:[
          {text:  <Roots/>,
      }]
    
      
    };
  },
};
</script>

<style>
.v-tabs {
margin:10px 0
}
.v-tab {
  text-transform: none !important;
  color: white !important;
}

.theme--light.v-tabs-items {
  background-color: transparent !important;
  color: white !important;
  padding-top:20px
}
.v-slide-group__next, .v-slide-group__prev{
    flex:0 !important;
    min-width:0 !important
}
</style>
