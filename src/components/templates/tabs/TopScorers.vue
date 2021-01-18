<template>
    <v-simple-table dark>
      <h2>ALL TIME</h2>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           #
          </th>
          <th class="text-left" >
           Player
          </th>
       
          <th class="text-left">
          
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in top"
          :key="item.name"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}
            <p class="team">{{item.team}}</p>
          </td>
          <td>{{ item.points }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
    name: "TopScorers",
       data () {
      return {
        top: [
          {
            name: 'John Odhiambo',
            team: 'Kayole University',
            points: 5
          },
          {
            name: 'Peter Kangethe',
            team:'Digo United',
            points: 3
          },
          {
            name: 'John Omutele',
            team: 'Dallas FC',
            points: 2
          },
       
        ],
      }
    }

}
</script>

<style>
.theme--dark.v-data-table{
  background-color: transparent !important
}
.team{
  font-weight: 200 !important
}
</style>