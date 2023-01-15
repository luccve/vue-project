<template>
    <div class="templateView">
        <div class="login space-content">
            <div class="logo ">
                <h2>Login</h2>

                <img src="@/assets/VERTICE.svg" alt="Logo da Vértice">
            </div>
            <br>
            <form>
                <input ref="emailInput" for="email" type="email" placeholder="Email" required v-model="email"
                    @blur="validateEmail">
                <br>
                <div class="senha">
                    <input :type="inputType" placeholder="Senha" required v-model="password">
                    <a @click="recoverPassword">Recuperar senha</a>
                    <button id="show" @click.prevent="toggleType">
                        <h5>Mostrar senha</h5>
                    </button>
                </div>

                <p v-if="errMSG">{{ errMSG }}</p>
                <div class="btn-login">
                    <button type="submit" @click.prevent="register">Login</button>
                </div>
                <div id="g-img">
                    <img @click.prevent="signInWithGoogle" src="@/assets/icons8-google-160.png" alt="Imagem do google">
                </div>
            </form>
            <p>
                Você não tem conta?
                <router-link to="/registrar">Crie uma conta</router-link>
            </p>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import router from '@/router';
import { useRouter } from 'vue-router';

export default defineComponent({


    name: 'login-view',
    setup() {
        const errMSG = ref("");
        const email = ref("");
        const password = ref("");
        const router = useRouter();
        const inputType = ref("password");
        let isValidEmail = true;
        return { email, validateEmail, isValidEmail, password, errMSG, router, inputType };

        function validateEmail() {
            return
        }
    },

    methods: {
        toggleType() {
            this.inputType = this.inputType === "password" ? "text" : "password";
        },
        checkLogin() {

            console.log({
                email: this.email,
                password: this.password,
            })
        },
        register() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                // eslint-disable-next-line
                .then((data) => {
                    console.log(data);
                    alert("Conta logada!")
                    router.push('/painel')
                }).catch((error) => {
                    console.log(error.code);
                    switch (error.code) {
                        case "auth/invalid-email":
                            this.errMSG = "Email invalido!"
                            break;
                        case "auth/user-not-found":
                            this.errMSG = "Usuário sem registro encontrado!"
                            break;
                        case "auth/wrong-password":
                            this.errMSG = "Senha errada"
                            break;
                        default:
                            this.errMSG = "Email ou senha incorreta"
                            break;
                    }
                    // alert(error.message);
                })
        },
        signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            // eslint-disable-next-line 
            signInWithPopup(getAuth(), provider).then((result) => {

                router.push('/Painel');
            }).catch((error) => {
                alert(error.message)
            });
        },
        recoverPassword() {
            console.log(getAuth())
        }
    }
});

</script>


<style scoped>
.senha a {
    cursor: pointer;
    color: var(--text-color);
}

.senha a:hover {
    font-size: inherit !important;
    font-weight: bolder;
}

#g-img img {
    height: 30px !important;
    width: auto !important;
    cursor: pointer;
}

#g-img {
    padding: 1rem;
}

.senha {
    position: relative;
}

#show {
    background-color: var(--text-color);
    border: none;
    position: absolute;
    left: 80%;
    top: 20%;

}

.senha button h5 {
    margin: 0 auto;
    color: var(--primary-color);
    font-size: 8px !important;
    font-weight: bolder;
}

.templateView {
    display: flex;
    align-items: center;
    background-color: var(--secondary-color) !important;
    height: 100vh !important;
}

.login {

    width: 400px;
    height: auto;
    margin: 0 auto;
    text-align: center;
    position: relative;
    background: var(--hover);
    border: 0 none;
    border-radius: 3px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
}

.login form {
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;
    position: relative;
}


p {
    color: var(--primary-color) !important;
    font-weight: 600;
    font-size: 1.2rem;
}

a {
    font-weight: bold;
    color: var(--text-color);
    text-decoration: none;
}

a:hover {
    font-size: 1.4rem;
}

.login input {
    padding: 15px;
    border: 1px solid var(--text-color);
    border-radius: 3px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-weight: bold;
    color: var(--text-color);
    font-size: 16px;
}

.logo {
    flex-direction: column !important;

}

.logo img {
    width: 120px;

}

.btn-login button {
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

.btn-login button:hover {
    box-shadow: 0 0 0 2px var(--hover)e, 0 0 0 3px var(--btn-background);
}

.login .logo h2 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--text-color);
    padding: 20px 0px;
}
</style>