<template>
    <footer>
        <div class="navbar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-9 col-md-3 m-auto">
                        <div class="logo m-auto">
                            <img class='logo' src="@/assets/LOGOTIPO.png" alt="Logo da Vértice">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 m-auto">
                        <div class="row">
                            <div class="col-12 col-md-12 m-auto ">
                                <ul class="nav ">

                                    <li class="nav-item">
                                        <router-link class="nav-link active" aria-current="page" href="#"
                                            to="/calculadora">Calculadora</router-link>

                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link active" aria-current="page" href="#"
                                            to="/about">Quem
                                            somos?</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link active" aria-current="page" href="#"
                                            to="/consultar">Consultar
                                            CNPJ</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="RODAPE">
                                    <h3>©2023 Vertice | All Rights Reserved</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-3 m-auto">

                        <a @click.prevent="" href="#"><img class="icon" src="@//assets/facebook.svg"></a>
                        <a @click.prevent="" href="#"><img class="icon" src="@/assets/instagram.svg"></a>
                        <a @click.prevent="" href="#"><img class="icon" src="@/assets/linkedin.svg"></a>
                        <a @click.prevent="" href="#"><img class="icon" src="@/assets/whatsapp.svg"></a>

                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FooterBar",
});
</script>

<style scoped>
h3 {
    font-size: 14px;
}

.row {
    margin: 0 auto;
    align-items: center;
}
</style>