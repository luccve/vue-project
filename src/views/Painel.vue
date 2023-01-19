<template>
    <div class="templateView">

        <nav id="nav">
            <div class="circulo">
                <img src="https://source.unsplash.com/random/151x151/" />
            </div>

            <ul>
                <li><router-link to="/"><font-awesome-icon icon="fa-solid fa-house" size="2x" /></router-link> </li>

                <li>
                    <a @click="changeDiv('perfil')">
                        <font-awesome-icon icon="fa-solid fa-user" size="2x" /></a>
                </li>

                <li>
                    <a @click="changeDiv('crud')">
                        <font-awesome-icon icon=" fa-solid fa-bolt" size="2x" /></a>
                </li>

                <li>
                    <a @click="changeDiv('dashboard')">
                        <font-awesome-icon icon="fa-solid fa-chart-pie" size="2x" />
                    </a>
                </li>

            </ul>
        </nav>

        <section>
            <div v-if="div_change === 'perfil'">

                <Perfil />
            </div>

            <div v-else-if="div_change === 'crud'">

                <Crud :uid="user_uid" />
            </div>

            <div v-else-if="div_change === 'dashboard'">

                <Dashboard />
            </div>

        </section>


    </div>
</template>
<script lang="ts">
import Crud from '@/components/Crud.vue';
import Dashboard from '@/components/Dashboard.vue';
import Perfil from '@/components/Perfil.vue';
import { defineComponent, onMounted, ref } from 'vue';
import { transaction, getAllTransaction } from '@/services/api';
import { getAuth } from '@firebase/auth';

export default defineComponent({
    name: 'Painel',
    components: {
        Perfil,
        Dashboard,
        Crud
    },
    data() {
        let name = ref();
        let photoUser = "";
        let div_change = ref('dashboard');


        return { name, photoUser, navbar: false, div_change, user_uid: '' }
    },
    methods: {

        changeDiv(div: string) {
            this.div_change = div;
        },


    },
    mounted() {
        this.photoUser = localStorage.phoURL
        this.name = localStorage.nameUser.replace('""', '')

        getAuth().onAuthStateChanged(user => {
            this.user_uid = `${user?.uid}`;
            console.log(this.user_uid)
        })

    }



})

</script>

<style scoped>
.circulo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin: 15px;
    transition: 0.3s ease;
    position: absolute;
    top: 10%;
    left: 35%;
    transform: translate(-50%, -50%);
}

.circulo img {
    width: 100%;
    max-width: 60px;
    height: auto;
}


ul,
li,
a {
    text-decoration: none;
    list-style: none;
    color: var(--text-color);
    transition: all ease-in-out .22s;
    cursor: pointer;

}



#nav ul li a:hover {
    color: var(--hover);
    font-weight: 700;
    height: 60px;

}


#nav {

    height: 100%;
    width: 12vw;
    background-color: var(--secondary-color);
    position: relative;

}

#nav ul {
    text-align: left;
    height: 30vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
}

#nav ul li {
    margin: 2rem 0 0 0;
}

.templateView {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    position: relative;

}

section div {
    height: 100vh;
    width: 88vw;
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
}

@media (min-width: 755px) {
    #nav {
        width: 5vw !important;
    }

    section div {
        height: 100vh;
        width: 95vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
    }
}
</style>