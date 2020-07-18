import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../components/dashboard.vue";
import Welcome from "../components/welcom.vue";
import Users from "../components/users.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/",
        component: Welcome
      },
      {
        path: "/users",
        name: "Users",
        component: Users
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
