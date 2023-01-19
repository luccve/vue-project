<template>
    <MenuBar />
    <section id='templateView'>
        <div id="sign-up">
            <form action="">
                <img src="@/assets/VERTICE.svg" alt="Logo da Vértice">
                <h1>Crie uma nova conta</h1>
                <input type="text" placeholder="E-mail" v-model="email">
                <br>
                <input type="password" placeholder="Senha" v-model="password">
                <br>
                <button @click.prevent="register">Registrar</button>
                <div id="g-img">
                    <img @click.prevent="signInWithGoogle" src="@/assets/icons8-google-160.png" alt="Imagem do google">
                </div>
                <p>
                    Ou retorne ao
                    <router-link to="/login">login</router-link>
                </p>
            </form>
        </div>
    </section>
    <FooterBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import router from '@/router';
import { useRouter } from 'vue-router';
import MenuBar from '@/components/menuBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import { insertUser } from '@/services/api';

export default defineComponent({
    name: 'signup-view',
    components: {

        MenuBar,
        FooterBar
    },


    data() {
        const email = ref('');
        const password = ref('');
        const router = useRouter();

        return {
            email,
            password,
            router,
        }
    },

    methods: {
        register() {
            console.log(this.email);
            createUserWithEmailAndPassword(getAuth(), this.email.trim(), this.password)
                // eslint-disable-next-line
                .then((data) => {
                    alert("Successfully registered!")
                    insertUser(
                        {
                            displayName: data.user.displayName,
                            email: data.user.email,
                            photoURL: data.user.photoURL,
                            sexo: "",
                            uid: data.user.uid,
                        }
                    )
                    router.push(`/Painel/${data.user.uid}`);
                }).catch((error) => {
                    // console.log(error.code);
                    alert(error.message);
                })
        },
        signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider).then((result) => {

                router.push(`/Painel/${result.user.uid}`);
            }).catch((error) => {
                alert(error.message)
            });
        }

    }


}
)

</script>


<style scoped>
#g-img img {
    height: 30px !important;
    width: auto !important;
    cursor: pointer;
}

#g-img {
    padding: 1rem;
}

#templateView {
    display: flex;
    align-items: center;
    background-color: var(--secondary-color) !important;
    height: 100vh !important;
    width: 100vw !important;

}

#sign-up {
    background-color: var(--hover) !important;
    width: fit-content;
    height: auto;
    margin: 0 auto;
    text-align: center;
    position: relative;
    background: var(--hover);
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
}

#sign-up form {
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;
}

#sign-up form input {

    padding: 15px;
    border: 1px solid var(--text-color);
    border-radius: 3px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    color: var(--text-color);
    font-size: 16px;
    font-weight: bold;
}

#sign-up h1 {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.8rem;
    color: var(--primary-color);
}

#sign-up form img {
    width: auto;
    height: 8rem;
}

#sign-up button {
    width: 100px;
    background: var(--btn-background);
    font-weight: bold;
    color: var(--hover);
    border: 0 none;
    border-radius: 1px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#sign-up p {
    color: var(--primary-color) !important;
    font-weight: 600;
    font-size: 1.2rem;
}

#sign-up a {
    font-weight: bold;
    color: var(--text-color);
    text-decoration: none;
}
</style>