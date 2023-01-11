<template>
    <header>
        <div class="container justify-content-around">
            <div class="navbar">
                <div class="row m-auto">
                    <div class="col-sm-4 col-md-4 col-lg-2 m-auto justify-content-start">

                        <router-link class="nav-link active" aria-current="page" href="#" to="/"> <img class='logo'
                                src="@/assets/LOGOTIPO.png" alt="Logo da Vértice"></router-link>
                    </div>
                    <div v-show="display" class="col-sm-2 col-md-8 col-lg-8 m-auto">
                        <ul class="nav justify-content-center">

                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" href="#"
                                    to="/calculadora">Calculadora</router-link>

                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" href="#" to="/about">Quem
                                    somos?</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" href="#"
                                    to="/consultar">Consultar
                                    CNPJ</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-4 col-lg-2  m-auto">
                        <a v-if="theme" @click.prevent="changeIcon()" href="#"><img class="icon"
                                src="@/assets/brightness-high-fill.svg"></a>
                        <a v-else @click.prevent="changeIcon()" href="#"><img class="icon"
                                src="@/assets/moon-fill.svg"></a>
                        <a href="#"><img class='icon' src="@/assets/person-gear.svg"></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-sm-4 col-md-6 - auto" v-if="width_window < 1526">
            <h2>ola</h2>
        </div> -->

    </header>

</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: "menuBar",
    data() {

        const theme = localStorage.theme == 'true' ? true : false;
        const width_window = window.innerWidth;

        return {
            display: true,
            menubarra: false,
            theme,
            width_window

        }
    },
    methods: {

        changeIcon() {


            this.theme = localStorage.getItem('theme') == 'true' ? false : true;
        },
        onResize() {
            window.innerWidth > 1540 ? this.display = true : this.display = false;
            window.innerWidth < 1540 ? this.menubarra = true : this.menubarra = false;
            this.width_window = window.innerWidth;
        }
    },
    created() {
        window.addEventListener("resize", this.onResize)
    },

    watch: {
        theme() {
            if (localStorage.theme) {
                localStorage.setItem('theme', this.theme.toString())
            }
        },


    },
    mounted() {
        if (!localStorage.theme) {
            localStorage.setItem('theme', this.theme.toString())
        }
        window.addEventListener("resize", this.onResize);
    }

});
</script>



<style scoped>
.menu {
    font-size: 15px;
}

@media (max-width: 576px) {
    .menu {
        font-size: 25px;
    }

    .logo {
        width: 90px !important;
    }
}
</style>