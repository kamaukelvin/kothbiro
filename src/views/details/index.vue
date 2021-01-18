<template>
  <div class="details">
    <Nav />

    <v-tabs   v-touch="{
        left: () => assignSwipeValue('Left'),
        right: () => assignSwipeValue('Right')
        }" v-model="tab" background-color="transparent" color="white" grow  slider-color=#4a80f0>

      <v-tab color="white" v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items :value="tab">
      <v-tab-item>
        <v-card-text>
          <Roots />
        </v-card-text>
      </v-tab-item>
      <v-tab-item>
        <v-card-text>
          <Standings />
        </v-card-text>
      </v-tab-item>
      <v-tab-item>
        <v-card-text>
          <Knockout />
        </v-card-text>
      </v-tab-item>
      <v-tab-item>
          <Gallery />
   
      </v-tab-item>
       <v-tab-item>
        <v-card-text>
          <TopScorers />
        </v-card-text>
          </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Nav from "../../components/templates/nav";
import Roots from "../../components/templates/tabs/Roots";
import Standings from "../../components/templates/tabs/Standings";
import Knockout from "../../components/templates/tabs/Knockout";
import Gallery from '../../components/templates/tabs/Gallery'
import TopScorers from '../../components/templates/tabs/TopScorers.vue';
export default {
  components: {
    Nav,
    Roots,
    Standings,
    Knockout,
    Gallery,
    TopScorers
  },
  data() {
    return {
      tab: null,
      items: ["Roots", "Standings", "Knockout", "Gallery", "Top Scorers"],
      // contents:[<Roots/>,<Standings/>, <Knockout/>]
    };
  },
 
};
</script>

<style>
.v-tabs {
  margin: 10px 0;
}
.v-tab {
  text-transform: none !important;
  color: white !important;
}

.theme--light.v-tabs-items {
  background-color: transparent !important;
  color: white !important;
}
.v-slide-group__next,
.v-slide-group__prev {
  flex: 0 !important;
  min-width: 0 !important;
}
  .details{
     font-family: "SF", Helvetica, Arial;
  }
</style>
