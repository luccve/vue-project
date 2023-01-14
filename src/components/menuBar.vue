<template>
    <header>
        <div class="menu ">

            <div class="logo">
                <router-link class="nav-link active" aria-current="page" href="#" to="/"> <img class='logo'
                        src="@/assets/LOGOTIPO.png" alt="Logo da Vértice"></router-link>
            </div>
            <nav class="menu-itens">

                <input type='checkbox' class="menu-faketrigger" />
                <div class="menu-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul>
                    <li>
                        <router-link class="nav-link active" aria-current="page" href="#"
                            to="/calculadora">Calculadora</router-link>

                    </li>
                    <li>
                        <router-link class="nav-link active" aria-current="page" href="#" to="/about">Quem
                            somos?</router-link>
                    </li>
                    <li>
                        <router-link class="nav-link active" aria-current="page" href="#" to="/consultar">Consultar
                            CNPJ</router-link>
                    </li>
                </ul>
            </nav>

            <div class="icones">
                <a v-if="theme" @click.prevent="changeIcon()" href="#"><img class="icon"
                        src="@/assets/brightness-high-fill.svg"></a>
                <a v-else @click.prevent="changeIcon()" href="#"><img class="icon2" src="@/assets/moon-fill.svg"></a>
                <router-link to="/painel"><a href="#"><img class='icon'
                            src="@/assets/person-gear.svg"></a></router-link>
            </div>
        </div>

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
header {
    background-color: var(--primary-color);
    width: 100vw;
    display: inline-block;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    border-bottom: px solid var(--secondary-color);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.menu {
    width: max-content;
    height: 8vh;
    margin: 0 auto;
    display: flex;
    padding: 0.5rem;
}

.menu .menu-itens input {
    display: none;
}

.menu-itens li {
    padding-inline: 2rem;


}


ul,
li {
    display: inline-block;
    text-decoration: none;
    list-style: none;
    font-size: 22px;
    color: var(--text-color);
    font-weight: 700;
    margin: 0 auto;


}

li:hover {
    color: var(--hover);
    font-size: 24px;
}


.icones img {
    height: 40px;
    padding: 0.3rem;
    filter: invert(12%) sepia(62%) saturate(1653%) hue-rotate(200deg) brightness(94%) contrast(109%);
    opacity: 1;
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
}


.icones img:hover {
    filter: invert(12%) sepia(2%) saturate(1653%) hue-rotate(200deg) brightness(94%) contrast(1209%);

}

.icon2 {
    filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(100deg) brightness(100%) contrast(103%) !important;
}

@media (max-width: 974px) {
    .menu .menu-itens .menu-faketrigger {
        display: block;
    }

    .menu .menu-faketrigger {
        position: absolute;
        z-index: 1000;
        width: 35px;
        height: 35px;
        opacity: 0;
        cursor: pointer;
        left: 50%;
    }



    .menu .menu-faketrigger:checked~.menu-lines span:nth-child(1) {
        transform-origin: 0% 0%;
        transform: rotate(45deg) scaleX(1.25);
    }

    .menu .menu-faketrigger:checked~.menu-lines span:nth-child(2) {
        opacity: 0;
    }

    .menu .menu-faketrigger:checked~.menu-lines span:nth-child(3) {
        transform-origin: 0% 100%;
        transform: rotate(-45deg) scaleX(1.25);
    }

    .menu .menu-lines {
        position: absolute;
        z-index: 999;
        width: 35px;
        height: 35px;
        left: 50%;
        top: 20%;

    }

    .menu .menu-lines span {
        display: block;
        width: 35px;
        height: 5px;
        margin-bottom: 10px;
        background-color: var(--text-color);
        border-radius: 3px;
        transition: all ease .2s;

    }

    .menu {
        position: relative;
        width: 100vw;
    }

    .menu .logo {
        display: flex;
        position: absolute;
        left: 10%;
        top: 20%;
    }

    .menu .logo img {
        height: 35px;
        width: fit-content;
    }

    .menu-itens ul {
        position: absolute;
        z-index: 22;
        left: 0%;
        top: 90%;
        width: 100vw;
        background-color: var(--text-color);
        border-radius: 0 0rem 0.3rem 0.3rem;
        border-bottom: px solid var(--secondary-color);
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        margin-top: -200px;
        transition: all ease-in-out .3s;
    }

    .menu .menu-faketrigger:checked~ul {
        margin-top: 0 !important;
    }

    /* .menu .menu-faketrigger:not(:focus)~ul {
        margin-top: -200px !important;
    } */


    .menu .menu-itens ul li {
        font-size: 14px !important;
        color: var(--primary-color);
        display: inline-block;

    }

    .menu .icones {
        position: absolute;
        left: 70%;
    }



}

@media (max-width: 288px) {
    .menu .logo {
        display: none;
    }

    .menu .icones {
        display: none;
    }

}
</style>