<template>
<div>
 <Nav/>
  <v-container class="mt-5">
   
    <!-- <div class="title mb-5">
      <v-title>Match Info</v-title>
    </div> -->
    <div class="p-relative">
    <v-row >
      <v-col cols="6" class="home">
        <div class="contents">
          <p class="team">Dallas All Stars</p>
          <p class="score">2</p>
        </div>
      </v-col>
      <v-col cols="6" class="away">
        <div class="contents">
          <p class="team">Dallas All Stars</p>
          <p class="score">0</p>
        </div>
      </v-col>
    </v-row>
      <v-img class="vector" src="/img/vector-team.png"> </v-img>
    </div>
    <div class="highlights">
      <p>Highlights </p>

       <v-timeline>
    <v-timeline-item
      v-for="(event, i) in events"
      :key="i"
      small
      fill-dot
      color="#00FF85"
    >
      <template v-slot:opposite>
        <span
         class="minutes"
          v-text="`${event.minute}`"
        ></span>
      </template>
      <div class="py-4">
        <div class="event">
         {{event.player}}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
    </div>
  </v-container>
  </div>
</template>

<script>
import Nav from '../../components/templates/nav'
export default {
  name: 'MatchInfo',
  components: {
    Nav
  },
     data: () => ({
      events: [
        {
          player: 'Nyari Leo',
          minute: '19',
        },
    
        {
          player: 'Otieno Dennis',
          minute: '27',
        },
        {
          player: 'Karis',
          minute: '29',
        },
    
      ],
    })
};
</script>

<style lang="css" scoped>
.home {
  background-color: #3AB648;
}
.away{
    background-color: #3252E6;
}
.p-relative{
  position: relative;
}

.contents {
  text-align: center;
}

.team {
  font-size: 14px;
  font-weight: 700;
  color: #fff
}

.score {
  font-size: 24px;
  font-weight: 900;
  color:#FF9D00;
  margin:0
}

.highlights {
  margin-top: 30px;
  text-align: center;
  font-weight: 100;
 
}
.highlights p{
  color: #fff
}
.vector{
  position: absolute;
  bottom:-10px
}
.theme--light.v-timeline::before {
    background: #00FF85;
}
.event{
  color:#fff;
  font-size:12px;

}


.v-timeline-item__dot--small {
    height: 10px !important;
    left: calc(50% - 12px);
    width: 10px !important;
}
.v-timeline-item__dot--small .v-timeline-item__inner-dot{
  display:none
}
.minutes{
  color:#00FF85
}

.v-timeline-item__divider {
    position: relative;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
