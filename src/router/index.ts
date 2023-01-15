import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import SignUp from "../views/SignUp.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
    path: "/painel/:id",
    alias: "/Painel/:id",
    name: "Painel",
    props: true,
    component: () => import("../views/Painel.vue"),
    meta: {
      requiresAuth: true,
    },
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Você precisa estar logado!");
      next("/Login");
    }
  } else {
    next();
  }
});

export default router;
