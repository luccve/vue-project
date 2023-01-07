<template>
  <menuBar />
  <router-view />
  <FooterBar />
</template>

<style>
@import '@/css/variables.css';


#app {
  min-width: 100vh;
  min-height: 100vh;
  /* background:
    linear-gradient(rgba(98, 0, 196, 0.6), rgba(11, 47, 4, 0.6)); */
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  overflow: hidden;

}

.templateView {
  min-height: 100vh;
  min-width: 100vw;
}

.navbar {
  font-weight: 600;
  background-color: var(--primary-color);
  color: var(--text-color) !important;
  font-size: 22px !important;

}

.nav-link {
  color: var(--text-color) !important;
}

.nav li a:hover {
  color: var(--hover) !important;
  transition-delay: 0.6ms;
}

.logo {
  margin-right: 20px;
}

.icon {
  height: 1.35rem;
  margin: 0 15px 0 0px;
  filter: invert(29%) sepia(6%) saturate(3997%) hue-rotate(184deg) brightness(101%) contrast(88%);
}

@media (max-width:1526px) {
  .navbar {
    justify-items: center !important;
    align-content: space-between !important;
  }

  .navbar ul {
    display: none !important;


  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import menuBar from "@/components/menuBar.vue";
import FooterBar from '@/components/FooterBar.vue';


export default defineComponent({
  name: "App",
  components: {
    menuBar,
    FooterBar
  }
});
</script>
