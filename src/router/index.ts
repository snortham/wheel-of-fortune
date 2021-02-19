import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/borderlands",
    name: "Borderlands",
    component: () => import("../views/Borderlands.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
