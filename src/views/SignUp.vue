<template>
    <div class="sign-up templateView">
        <h1>Crie uma nova conta</h1>
        <input type="text" placeholder="E-mail">
        <br>
        <input type="password" placeholder="Senha">
        <br>
        <button>Registrar</button>
        <span>
            Ou retorne ao
            <router-link to="/login">login</router-link>
        </span>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'signup-view',
    data() {
        return {}
    },
    methods: {}


})

</script>


<style scoped>

</style>