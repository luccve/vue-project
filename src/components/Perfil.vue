<template>
    <div id="perfil">
        <button @click="handleSignOut">Logout</button>
        <h1>Olá {{ user?.displayName }} Nome</h1>
        <h1>Olá {{ user?.photoURL }} Foto</h1>

        <h1>{{ user?.email }}</h1>
    </div>
</template>

<script lang="ts">
// eslint-disable-next-line


import { defineComponent, reactive } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import router from "../router";
export default defineComponent({
    name: 'Perfil',

    data() {

        const user = reactive({
            displayName: "",
            email: "",
            photoURL: "",
            lastLoginAt: "",
            firstLoginAt: "",
            uid: "",
            sexo: "",
        })


        return { user }
    },

    methods: {
        handleSignOut() {
            let auth = getAuth();
            signOut(auth).then(() => {
                router.push("/Login");
            })
        },
    }
    ,
    mounted() {
        getAuth().onAuthStateChanged(user => {
            this.user.displayName = `${user?.displayName}`;
            this.user.email = `${user?.email}`;
            this.user.lastLoginAt = `${user?.metadata.lastSignInTime}`;
            this.user.firstLoginAt = `${user?.metadata.creationTime}`;
            this.user.photoURL = `${user?.photoURL}`;
            this.user.uid = `${user?.uid}`;

        })

    },

})
</script>

<style scoped>
#perfil {
    display: flex;
    flex-direction: column;

    text-align: center;

}
</style>