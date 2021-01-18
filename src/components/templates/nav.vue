<template>
  <div>
    <v-spacer></v-spacer>
    <v-app-bar
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>
        <h1 class="title">
           <router-link to="/">KOTHBIRO</router-link>  <span class="year">2020/2021 </span>
          <img src="/img/vector.png" alt="White Logo" class="" /></h1
      ></v-toolbar-title>
  <router-link to="/details">
      <v-btn icon>
        <v-icon><img src="/img/vector.png" alt="White Logo" class=""/></v-icon>
      </v-btn>
        </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: #ffff;
  font-size: 24px;
  font-family: "Ubuntu", Helvetica, Arial !important;
}
.title::after {
  content: "";
  position: absolute;
  width: 20%;
  height: 1px;
  bottom: 0;
  left: 20px;
  border-bottom: 3px solid #4a80f0;
  right: 0;
  /* margin: 0 auto; */
}
.theme--light.v-sheet {
  background-color: #121421 !important;
}

</style>
