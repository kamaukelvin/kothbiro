<template>
  <v-container>
    <h2 class="year">Synopsis</h2>
    <p>
      Auma be uwinja, koth biro kel uru dhok e dala (Do you hear me, Auma. Bring
      home the cattle for the rains are coming) are the words of Ayub Ogada and
      Mbarak Achieng’s 1980’s hit song Koth Biro that gained prominence locally
      and abroad.
    </p>
    <p>
      The song’s title would later find solace in unfamiliar fields of soccer
      although with the help of weather patterns. What started as matches
      between young schoolboys, playing for different clubs in the mid 1970s in
      Ziwani estate, later became the biggest offseason tournament in Nairobi
      held mostly during the short rains season in December.
    </p>
    <p>
      There were cases of national team players sneaking out of camp just for a
      chance to play for their clubs in Koth Biro, a tournament that also
      provided an avenue for young boys to display their talents.
    </p>
    <img src="/../" alt="">
      <v-fab-transition>
              <v-btn
                dark
                fixed
                bottom
                right
                fab
                 class="v-floatbtn"
                 @click.prevent="playSound('/audio/anthem.mpeg')"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-fab-transition>
  </v-container>
</template>

<script>
export default {
  name: "Roots",
    methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
}}
</script>

<style scoped>
  .v-floatbtn {
    position:fixed;
    right:0;
    bottom:0;
    margin: 0 0 16px 16px;
  }</style>
