<template>
    <div class="view">
        <h1>Ola sou {{ name }}</h1>
        <img :src="photoUser" alt="">
        <h4>Perfil photo</h4>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'Painel',

    data() {
        let name = ref();
        let photoUser = "";

        onMounted(() => {
            this.photoUser = localStorage.phoURL
            this.name = localStorage.nameUser.replace('""', '')
        })

        return { name, photoUser }
    },


})

</script>

<style scoped>
.view {
    height: 100vh;
    width: 100vw;
}
</style>