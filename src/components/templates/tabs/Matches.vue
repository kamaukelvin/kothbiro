<template>
  <div>

      <div  v-for="(item ) in fixtures"
          :key="item.key"><h1>{{item.data}}</h1></div>
            <v-card
    class="mx-auto games-card"
    max-width="400"
    tile
     v-for="(item ) in fixtures"
          :key="item.key"
  >


   <v-list-item two-line>
    
      <v-list-item-content class="row">
<div class="col-4 time">
 <v-list-item-subtitle class="greyed">25|03|20</v-list-item-subtitle>
        <v-list-item-subtitle class="greyed">10:00 AM</v-list-item-subtitle>
</div>
<div class="col-8">
   <v-list-item-subtitle @click="navigate('team')">Digo United<span class="float-right">2</span></v-list-item-subtitle>
        <v-list-item-subtitle>Dallas All Stars<span class="float-right">2</span></v-list-item-subtitle>
      
</div>
       
 

       
      </v-list-item-content>
    </v-list-item>
      </v-card>
  </div>
</template>

<script>
import FirebaseService from '../../../services/FirebaseService'
export default {
    name: 'Matches',
     data() {
    return {
      fixtures:[]
    };
  },
    
      methods:{
      navigate(team){
        this.$router.push({ path: `/match/${team}` }) 
      },
        get_fixtures(items){
         let _fixtures= []
      items.forEach(item=>{
       let key = item.key;
       let data = item.val()
       console.log("THE DATA", data)
 _fixtures.push({
   key,
   data:data.fixtures
 })
 
 this.fixtures=_fixtures
 console.log("the fixtures 1",this.fixtures)
   
     })}},
     mounted(){
      FirebaseService.getAll().on("value", this.get_fixtures);
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
.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle {
    line-height: 1.5;
}
.time{
border-right: 2px solid #000;
}
.greyed{
  color: #838383 !important;
}

</style>