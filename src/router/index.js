import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/landing";
import Details from "../views/details";
import Team from "../views/team";
import MatchInfo from "../views/matchInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },

  {
    path: "/details",
    name: "details",
    component: Details,
  },
  { path: "/details/:id",
    name: "team", 
    component: Team
  },
  { path: "/match/:id",
    name: "match", 
    component: MatchInfo
  },

  // page that requires authentication to view
  // path: '/admin',
  // name: 'admin',
  // component: Admin,
  // meta:{
  //   requiresAuth:true
  // }

  // redirect incase user types navigates to a wrong path route
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
