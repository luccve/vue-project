<template>
    <div class="templateView">

        <nav id="nav">
            <div class="circulo">
                <img :src="photoUser" />
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

        <section id="body">
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
import { defineComponent, ref } from 'vue';
import { getUser } from '@/services/api';
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

        getAuth().onAuthStateChanged(async user => {
            this.user_uid = `${user?.uid}`;
            const dados = await getUser(user?.uid);
            if (dados[0].photo) {

                this.photoUser = dados[0].photo;
            }
            else {

                this.photoUser = `https://source.unsplash.com/random/151x151/`;
            }

        })

    }



})

</script>

<style scoped>
#nav .circulo img {
    margin-top: 30px;
    width: 80%;
    border-radius: 50%;
}

a {
    cursor: pointer;

}





#nav ul li a:hover {

    color: var(--hover);


    font-weight: 700;
    height: 60px;

}

#nav ul li a:active {

    color: var(--hover);


    font-weight: 700;
    height: 60px;

}


a,
ul,
li {
    list-style: none;
    text-decoration: none;
}

.templateView {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background-color: var(--text-color);
}

#nav ul {
    position: absolute;
    left: -30%;
    top: 30%;

}

#nav ul li {
    padding: 5px 0 10px 0;
}

#nav {
    display: block;
    margin: 0 auto;
    position: absolute;
    height: 100vh;
    width: 60px;
    background-color: var(--primary-color);

}

#body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 60px;
    min-height: 100%;
    min-width: 100%;
    background-color: var(--secondary-color);
}
</style>