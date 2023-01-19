import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUser,
  faHouse,
  faChartPie,
  faBolt,
  faArrowsLeftRightToLine,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUser,
  faHouse,
  faChartPie,
  faBolt,
  faArrowsLeftRightToLine,
  faTrash,
  faPenToSquare
);

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_KEY_FIREBASE_AUTH,
  authDomain: process.env.VUE_APP_DOMAIN_FIREBASE_AUTH,
  projectId: process.env.VUE_APP_PROJECT_ID_FIREBASE,
  storageBucket: process.env.VUE_APP_STORAGE_FIREBASE_AUTH,
  messagingSenderId: process.env.VUE_APP_MESSAGING_FIREBASE_ID,
  appId: process.env.VUE_APP_APP_FIREBASE_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_FIREBASE_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
