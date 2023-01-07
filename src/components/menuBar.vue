<template>
    <div class="navbar justify-content-center">
        <img class='logo' src="@/assets/LOGOTIPO.png" alt="Logo da Vértice">

        <ul class="nav">
            <li class="nav-item">

                <router-link class="nav-link active" aria-current="page" href="#" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Calculadora</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Quem somos?</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Consultar CNPJ</a>
            </li>
        </ul>
        <a @click.prevent="changeIcon()" href="#"><img class="icon" src="@/assets/brightness-high-fill.svg"></a>
        <a href="#"><img class='icon' src="@/assets/person-gear.svg"></a>


    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "menuBar",

    methods: {
        changeIcon() {
            console.log("ola");
        }
    }
});
</script>
