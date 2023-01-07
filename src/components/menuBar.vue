<template>
    <div class="navbar justify-content-center">
        <div class="container-fluid">
            <div class="col-2 col-md-3">
                <img class='logo' src="@/assets/LOGOTIPO.png" alt="Logo da Vértice">
            </div>

            <div class="col col-md-5">
                <ul v-bind:class="{}" class="nav">
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
            </div>
            <div class="col col-md-2">
                <a v-if="theme" @click.prevent="changeIcon()" href="#"><img class="icon"
                        src="@/assets/brightness-high-fill.svg"></a>
                <a v-else @click.prevent="changeIcon()" href="#"><img class="icon" src="@/assets/moon-fill.svg"></a>
                <a href="#"><img class='icon' src="@/assets/person-gear.svg"></a>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "menuBar",
    data() {
        return {
            display: false,
            theme: true,
        }
    },
    methods: {
        changeIcon() {
            let theme = true;
            theme = this.theme ? this.theme = true : this.theme = false;
        },
        onResize() {
            window.innerWidth < 1526 ? this.display = true : this.display = false;
        }
    },
    created() {
        window.addEventListener("resize", this.onResize)
    },

});
</script>



<style scoped>

</style>