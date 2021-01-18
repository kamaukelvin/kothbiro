<template>
  <div>
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
          <Matches />
        </v-card-text>
      </v-tab-item>
      <v-tab-item>
        <v-card-text>
          <Players />
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Nav from "../../components/templates/nav";
import Matches from '../../components/templates/tabs/Matches'
import Players from '../../components/templates/tabs/Players'
export default {
  components: {
    Nav,
    Matches,
    Players
  },
  data() {
    return {
      tab: null,
      items: ["Matches", "Players"],
    };
  },
};
</script>

<style></style>
