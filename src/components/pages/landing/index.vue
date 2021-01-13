<template>
  <div>
    <Nav />
    <p class="sub-heading py-3">Kenya oldest tournament</p>
    <v-img class="mx-auto " width="150px" src="/img/main-logo.png"> </v-img>
    <v-img class="mx-auto my-4" width="60%" src="/img/zigzag.png"> </v-img>
    <p class="slogan white--text">
      “If you have never played in Kothbiro we haujui ball”
    </p>
    <v-img class="mx-auto my-1" width="30%" src="/img/betmoto.png"> </v-img>
    <v-img class="soccer mx-auto " width="30%" src="/img/soccer-guy.png"> </v-img>
  </div>
</template>

<script>
import Nav from "../../templates/nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>

.sub-heading {
  font-size: 16px;
  color: #ffff;
}
.slogan {
  font-size: 12px;
  text-align: center;
  font-style: italic;
}
.soccer{
    position: absolute;
    right:0;
    bottom:0
}
</style>
