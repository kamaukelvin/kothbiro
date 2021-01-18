<template>
  <div>
            <v-card
    class="mx-auto games-card"
    max-width="400"
    tile
  >
   <v-list-item two-line>
      <v-list-item-content >

        <v-list-item-subtitle>Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">2</span></v-list-item-subtitle>
      
      </v-list-item-content>
    </v-list-item>
      </v-card>
  </div>
</template>

<script>
export default {
    name: 'Matches'

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
</style>