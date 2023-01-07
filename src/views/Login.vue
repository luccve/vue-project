<template>
    <div class="login templateView">
        <div class="logo">
            <h2>Login</h2>

            <img src="@/assets/VERTICE.svg" alt="Logo da Vértice">
        </div>
        <br>
        <form action="" v-on:submit.prevent="">
            <input for="email" type="email" placeholder="Email" required v-model="email" @blur="validateEmail">
            <br>
            <input :type="inputType" placeholder="Senha" required>
            <button id="show" @click="toggleType"><i>Ola</i></button>
            <div class="btn-login">
                <button type="submit" @click="checkLogin">Login</button>
            </div>
        </form>
        <p>
            Você não tem conta?
            <router-link to="/registrar">Crie uma conta</router-link>
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({


    name: 'login-view',
    setup() {

        function validateEmail() {
            return
        }


        function checkLogin() {
            console.log({
                email: email.value,
                senha: password.value,
            })
        }


        const email = ref("");
        const password = ref("");
        return { email, validateEmail, checkLogin }
    },
    data() {

        return {
            inputType: "password",
        };
    },
    methods: {
        toggleType() {
            this.inputType = this.inputType === "password" ? "text" : "password";
        }
    }
});

</script>


<style scoped>
.login {
    width: 400px;
    height: 500px;
    margin: 50px auto;
    text-align: center;
    position: relative;
    background: white;
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

.login input {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
}

.logo {
    flex-direction: column !important;

}

.logo img {
    width: 120px;

}

.btn-login button {
    width: 100px;
    background: #27AE60;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 1px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

.btn-login button:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #27AE60;
}

.login .logo h2 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #2C3E50;
    padding: 20px 0px;
}

#show {
    height: 45px;
    position: absolute;
    right: 30px;
    top: 72px;
}
</style>