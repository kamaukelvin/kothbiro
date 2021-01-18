<template>
<div>
   <v-subheader class="subheader">Round of 16(1/8)</v-subheader>
      <v-card
    class="mx-auto games-card"
    max-width="400"
    tile
       v-for="(item, index) in games"
       :key="index"
  >
 
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle @click="navigate(item.home)">{{item.home}}<span class="float-right">{{item.home_score}}</span></v-list-item-subtitle>
        <v-list-item-subtitle @click="navigate(item.away)">{{item.away}}<span class="float-right">{{item.away_score}}</span></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
   <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-subtitle @click="navigate(item.away)">{{item.away}}<span class="float-right">{{item.home_score}}</span></v-list-item-subtitle>
        <v-list-item-subtitle @click="navigate(item.home)">{{item.home}}<span class="float-right">{{item.away_score}}</span></v-list-item-subtitle>
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
 data () {
      return {
        games: [
          {
            home: 'Digo United',
            away: 'Dallas All Stars',
            home_score: 3,
            away_score: 0,
            date:'11/1/2021',
            time:'10.00 am',
          },
          {
            home: 'Digo United',
            away: 'Dallas All Stars',
            home_score: 3,
            away_score: 0,
            date:'11/1/2021',
            time:'10.00 am',
          },
          ]
      }},
    methods:{
      navigate(team){
        this.$router.push({ path: `/details/${team}` }) 
      }
   
    }

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
.subheader{
  color: #989898;
}
</style>