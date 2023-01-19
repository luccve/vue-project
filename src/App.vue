<template>

  <router-view />

</template>

<style>
@import '@/css/index.css';


#app {

  /* background:
    linear-gradient(rgba(98, 0, 196, 0.6), rgba(11, 47, 4, 0.6)); */
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;

}

@media (max-width:480px) {}
</style>

<script lang="ts">
import { defineComponent } from "vue";



export default defineComponent({
  name: "App",
  components: {

  }
});
</script>
