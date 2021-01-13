<template>
  <div>
    <v-spacer></v-spacer>
    <v-app-bar
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>
        <h1 class="title">
          KOTHBIRO <span class="year">@45 </span>
          <img src="/img/vector.png" alt="White Logo" class="" /></h1
      ></v-toolbar-title>

      <v-btn icon>
        <v-icon><img src="/img/vector.png" alt="White Logo" class=""/></v-icon>
      </v-btn>
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
