<template>
    <div class="navbar justify-content-center footer">
        <div class='container'>
            <div class="LOGO">
                <img class='logo' src="@/assets/LOGOTIPO.png" alt="Logo da Vértice">
            </div>
            <div class="MENU">
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
            </div>
            <div class="ICONES">
                <a @click.prevent="" href="#"><img class="icon" src="@//assets/facebook.svg"></a>
                <a @click.prevent="" href="#"><img class="icon" src="@/assets/instagram.svg"></a>
                <a @click.prevent="" href="#"><img class="icon" src="@/assets/linkedin.svg"></a>
                <a @click.prevent="" href="#"><img class="icon" src="@/assets/whatsapp.svg"></a>
            </div>
            <div class="RODAPE">
                <H3>©2023 Vertice | All Rights Reserved</H3>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FooterBar",
});
</script>

<style scoped>
.footer {
    border-top: 1px solid #333;
    bottom: 0;
    left: 0;
    height: 40px;
    position: fixed;
    width: 100%;

}





h3 {
    font-size: 14px;
}
</style>