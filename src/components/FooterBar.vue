<template>
    <footer>
        <div class="navbar">

            <div class="logo">
                <img class='logo' src="@/assets/LOGOTIPO.png" alt="Logo da Vértice">
            </div>
            <div class="nav-menu">
                <ul>

                    <li>
                        <router-link aria-current="page" href="#" to="/calculadora">Calculadora</router-link>

                    </li>
                    <li>
                        <router-link aria-current="page" href="#" to="/about">Quem
                            somos?</router-link>
                    </li>
                    <li>
                        <router-link aria-current="page" href="#" to="/consultar">Consultar
                            CNPJ</router-link>
                    </li>
                </ul>
            </div>


            <div class="icones">
                <a @click.prevent="" href="#"> <img class="icon" src="@//assets/facebook.svg"></a>
                <a @click.prevent="" href="#"><img class="icon" src="@/assets/instagram.svg"></a>
                <a @click.prevent="" href="#"><img class="icon" src="@/assets/linkedin.svg"></a>
                <a @click.prevent="" href="#"><img class="icon" src="@/assets/whatsapp.svg"></a>
            </div>

            <h3>©2023 Vertice | All Rights Reserved</h3>
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
    display: block;
    width: 100%;
    margin: 0 auto;
}

footer {
    background-color: var(--primary-color);
    color: var(--text-color);
}


.nav-menu li {
    display: inline-block;
    padding: 0.5rem;
    flex-direction: column;
    width: auto;
    margin: 0 auto;
}

.nav-menu ul li a {
    font-size: 18px;
    color: var(--text-color) !important;
    font-weight: 600;
}

ul,
li,
a {
    text-decoration: none;
    list-style-type: none;
    transition: ease-in-out;
    transition-duration: 52ms;

}

a:hover,
li:hover {
    color: var(--hover) !important;
    font-weight: 700 !important;
}

.navbar {
    width: fit-content;
    display: flex;
    align-content: center;
    margin: 0 auto;
}

h3 {
    font-size: 16px;


}

.icones {

    filter: invert(12%) sepia(62%) saturate(1653%) hue-rotate(200deg) brightness(94%) contrast(109%);
}

.icones img {
    height: 30px;
    width: 40px;
}

.row {
    margin: 0 auto;
    align-items: center;
}

@media (max-width: 850px) {
    .navbar {
        display: block !important;

    }

    h3 {
        padding-top: 1rem;
    }

    .nav-menu li {
        font-size: 11px !important;
    }
}
</style>