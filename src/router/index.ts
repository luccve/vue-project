import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login-view",
    component: Login,
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
