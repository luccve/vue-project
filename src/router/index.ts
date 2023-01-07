import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import SignUp from "../views/SignUp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/login",
    name: "login-view",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/registrar",
    name: "signup-view",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
