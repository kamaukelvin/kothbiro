<template>
<div>
      <v-card
    class="mx-auto games-card"
    max-width="400"
    tile
  >
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">2</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">1</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-card>
      <v-card
    class="mx-auto games-card"
    max-width="400"
    tile
  >
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">2</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">1</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-card>
      <v-card
    class="mx-auto games-card"
    max-width="400"
    tile
  >
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">2</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">1</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
      </v-card>
    <v-bottom-navigation
    v-model="value"
  
    color="primary"
  >
        <v-btn>
      <span>1/8</span>
      
    </v-btn>

    <v-btn>
      <span>1/4</span>
    </v-btn>

    <v-btn>
      <span>Semis</span>
    </v-btn>

    <v-btn>
      <span>Finals</span>
    </v-btn>
    
  </v-bottom-navigation>
</div>
</template>

<script>
export default {
    name: "Knockout",
        data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },

}
</script>

<style scoped>
.theme--dark.v-bottom-navigation {
    background-color: transparent;
}
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
    color: white !important;
}
.v-item-group.v-bottom-navigation {
    box-shadow: none;
}
.theme--light.v-bottom-navigation {
    background-color: transparent;
}
.theme--light.v-list-item .v-list-item__subtitle, .theme--light.v-list-item .v-list-item__action-text {
    color: white;
}
.games-card{
    
background: rgba(255, 255, 255, 0.1) !important;
border-radius: 5px !important;
margin-bottom:10px
}
.v-item-group.v-bottom-navigation[data-v-d4c39656] {
    box-shadow: none;
    position: fixed;
    bottom: -10px;
}
.v-item-group.v-bottom-navigation .v-btn {
    background-color: #1C2031;
    border-radius: 5px;
    margin-right: 7px;
    height:40px;
    border-bottom: 2px solid #4a80f0;
    /* box-shadow: 0px 4px 10px rgba(74, 128, 240, 0.3); */
}
.v-item-group.v-bottom-navigation .v-btn.v-btn--active {
    background-color: #4a80f0;
    color: white
}
</style>