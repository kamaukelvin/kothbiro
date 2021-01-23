<template>
<div>



  <div v-for="(item ) in groups"
          :key="item.key">
      <h2>{{item.data.teams}}</h2>
    <v-simple-table dark      >
   
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           #
          </th>
          <th class="text-left" >
           Team
          </th>
          <th class="text-left">
            P
          </th>
          <th class="text-left">
            W
          </th>
          <th class="text-left">
            D
          </th>
          <th class="text-left">
            L
          </th>
          <th class="text-left">
            GD
          </th>
          <th class="text-left">
            PTS
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item) in item.data.teams"
          :key="item.team"
        >
          <td> {{ Object.entries(item.general)[0][1] }}</td>
          <td @click="navigate(item.name)">{{ item.name }}</td>
          <td>{{ Object.entries(item.general)[0][1].Played}}</td>
          <td>{{  Object.entries(item.general)[0][1].Win }}</td>
          <td>{{ Object.entries(item.general)[0][1].Draw }}</td>
          <td>{{ Object.entries(item.general)[0][1].Lost }}</td>
          <td>{{ Object.entries(item.general)[0][1].Goaldifference }}</td>
          <td>{{Object.entries(item.general)[0][1].Points}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

</div>

</div>
</template>

<script>

export default {
    name: "Standings",
    props:["groups"],
       data () {
      return {
     
    
      }
    },
    methods:{
      list_groups(items){
         let _groups= []
      items.forEach(item=>{
       let key = item.key;
       let data = item.val()
 _groups.push({
   key,
   data
 })
 console.log("the groups",_groups)
 this.groups=_groups

    })},
     
      navigate(team){
        this.$router.push({ path: `/details/${team}` }) 
      }
    
    },
    
  

}
</script>

<style>
.theme--dark.v-data-table{
  background-color: transparent !important
}
</style>