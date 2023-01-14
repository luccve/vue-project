import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import SignUp from "../views/SignUp.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    props: true,
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/login",
    name: "login-view",
    props: true,
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/registrar",
    name: "signup-view",
    props: true,
    component: SignUp,
  },
  {
    path: "/consultar",
    name: "consultar",
    props: true,
    component: () => import("../views/Consultar.vue"),
  },
  {
    path: "/about",
    name: "about",
    props: true,
    component: () => import("../views/About.vue"),
  },
  {
    path: "/calculadora",
    name: "calculadora",
    props: true,
    component: () => import("../views/Calculadora.vue"),
  },
  {
    path: "/painel",
    name: "Painel",
    props: true,
    component: () => import("../views/Painel.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    props: true,
    component: () => import("../views/notFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
