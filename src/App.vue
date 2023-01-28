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
import { defineComponent, onBeforeMount } from "vue";




export default defineComponent({
  name: "App",

  components: {
    // eslint-disable-next-line

  }
  , methods: {

  }
  ,

  setup() {
    let load = localStorage.theme == 'true' ? true : false;

    onBeforeMount(() => {

      if (load) {
        document.documentElement.style.setProperty('--primary-color', '#ffb137');
        document.documentElement.style.setProperty('--secondary-color', '#40537d');
        return
      }
      document.documentElement.style.setProperty('--secondary-color', '#778899');
      document.documentElement.style.setProperty('--primary-color', '#2F4F4F');
      document.documentElement.style.setProperty('--text-color', '#000');
      document.documentElement.style.setProperty('--btn-background', '#778899');
      return
    })
  }
});
</script>
