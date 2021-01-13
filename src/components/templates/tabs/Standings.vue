<template>
    <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           #
          </th>
          <th class="text-left">
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
          v-for="item in teams"
          :key="item.team"
        >
          <td>{{ index }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.played}}</td>
          <td>{{ item.wins }}</td>
          <td>{{ item.draws }}</td>
          <td>{{ item.loss }}</td>
          <td>{{ item.games_played }}</td>
          <td>{{ item.points }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
    name: "Standings",
       data () {
      return {
        teams: [
          {
            team: 'Digo United',
            played: 5,
            wins: 3,
            draws: 0,
            loss:1,
            games_played:3,
            points: 9
          },
        ],
      }
    }

}
</script>

<style>

</style>