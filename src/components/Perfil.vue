<template>
    <div id="perfil">
        <div>
            <h1>Último login {{ user.lastLoginAt.toLocaleString() }}</h1>
        </div>
        <div class="slot">

            <h1 v-show="disable" v-if="user?.displayName">Olá {{ user?.displayName }}!</h1>

            <label v-show="!disable" for="nameInput">Altere seu nome:</label>
            <input v-show="!disable" type="text" v-model="nameInput" name="Sr. fulano" id="nameInput"
                placeholder="Ex. Fulano" :disabled="disable">

        </div>

        <div class="slot">

            <img v-if='user.photoURL' :src="user.photoURL" alt="Foto de perfil" srcset="imagem de perfil da conta">
            <h5>Sexo: {{ user.sexo }}</h5>
            <div id="foto" v-if="!disable">
                <label for="inputFoto">Adicionar o link da foto: </label><br>
                <input class="inputFoto" name="inputFoto" v-model="urlPerfil" placeholder="Ex.: https://imagem.jpg" />
            </div>



            <a class="cancelar" v-show="disable" @click="handleSignOut">Logout</a>

        </div>
        <div v-if="!disable" class="slot">

            <label for="genero">Genero: {{ user.sexo }}</label>
            <select v-model="inputSexo" name="genero">
                <option value="Agênero">Agênero</option>
                <option value="Bigênero">Bigênero</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>

            </select>

        </div>
        <div class="slot">
            <label for="lname">E-mail:</label>
            <input ref="email" type="text" id="lname" name="lname" :value="user.email" disabled>
        </div>
        <div class="btn">
            <a v-show="disable" class="alterar" @click.prevent="Alterar">Editar perfil</a>
            <a v-show="!disable" class="cancelar" @click.prevent="Cancelar">Cancelar</a>
            <a class="send" v-show="!disable" @click.prevent="Salvar">Enviar</a>
        </div>

        <div class="emprestimo">
            <div>
                <label for="incoming">Renda anual</label>
                <input v-model="incoming" type="text" name="incoming" id="incoming">
            </div>
            <div>
                <label for="age">Idade</label>
                <input v-model="age" type="text" name="age" id="age">
            </div>
            <div>
                <label for="loan">Dívida</label>
                <input v-model="loan" type="text" name="loan" id="loan">
            </div>
            <div v-if="emprestimo">
                <h1>{{ emprestimo }}</h1>
            </div>
            <button class="btn send" @click.prevent="handlePredict">Verificar empréstimo</button>
        </div>

    </div>
</template>

<script lang="ts">
// eslint-disable-next-line


import { defineComponent, reactive, ref } from 'vue'
import { getAuth, signOut } from "@firebase/auth";
import router from "../router";
import { getUser, putUser, predictAprove } from '@/services/api';


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
        const nameInput = ref("");
        const urlPerfil = ref("");
        const inputSexo = ref("");

        return { user, disable: true, nameInput, urlPerfil, inputSexo, incoming: "", age: "", loan: "", emprestimo: "" }
    },

    methods: {


        handleSignOut() {
            let auth = getAuth();
            signOut(auth).then(() => {
                router.push("/Login");
            })
        },


        async handlePredict() {
            const response = await predictAprove(Number(this.incoming), Number(this.age), Number(this.loan))
            console.log(response)
            this.emprestimo = `${Object.values(response)}`

        },

        Alterar() {
            this.disable = false;

        },
        async Salvar() {
            this.disable = true;

            const body = {
                displayName: this.nameInput,
                uid: this.user.uid,
                email: this.user.email,
                photoURL: this.urlPerfil,
                sexo: this.inputSexo
            }
            console.log(body)
            await putUser(body);

            router.go(0)

        },

        Cancelar() {
            this.disable = true;
        }
    }
    ,
    mounted() {
        getAuth().onAuthStateChanged(async user => {
            const dados = await getUser(user?.uid);
            const data = new Date();
            this.user.displayName = dados[0].name;
            this.user.email = dados[0].email;
            this.user.lastLoginAt = `${data.toLocaleString()}`;
            this.user.firstLoginAt = `${user?.metadata.creationTime}`;
            this.user.photoURL = dados[0].photo;
            this.user.uid = `${user?.uid}`;
            this.user.sexo = dados[0].sexo;
            this.nameInput = this.user.displayName;
            this.inputSexo = this.user.sexo;
            this.urlPerfil = this.user.photoURL;
        })

    },

})
</script>

<style scoped>
.emprestimo div,
label,
input {
    padding: 5px 8px;
}



.emprestimo div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.emprestimo input {
    background-color: var(--secondary-color);
    color: var(--hover);
    font-weight: 500;
}

.emprestimo {
    margin: 0 auto;
    width: 200px;
}


h2 {
    color: var(--text-color);
}

#foto {
    width: 50%;
}

#nameInput {
    width: 100%;
}

.inputFoto {
    width: 100%;
    height: 30px;

}

.btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 20px 0 20px 0;
}

input::placeholder {
    color: var(--text-color);
    font-weight: 500;
}

label {
    font-weight: 700;
    color: var(--text-color);
}

.slot {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 20px 0;
    align-items: center;
    background-color: rgba(255, 177, 55, 0.7);
    border-radius: 5px;
    padding: 5px;
}

#perfil {
    background-color: var(--hover);
    padding: 1rem;
    border-radius: 7px;
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: var(--text-color);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

}

img {
    border-radius: 50%;
    height: 100%;
    width: 30%;
    object-fit: contain;
}

a {
    cursor: pointer;
    color: var(--hover);
    font-size: 14px;
    font-weight: 800;
    padding: 7px 7px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2f6627;
    transition: all ease-in-out .22s;
}

a:hover {
    background-color: var(--text-color);
}

a:active {
    position: relative;
    top: 1px;
}

input {
    border: none;
    border-radius: 4px;
}

.alterar {
    background-color: var(--primary-color);
    border-radius: 14px;
    display: inline-block;

}

.send {
    background-color: var(--btn-background);
    color: var(--hover);
    border-radius: 14px;
    display: inline-block;
}

.send:hover {
    background-color: rgba(0, 255, 200, 0.4)
}


.cancelar {
    background-color: var(--btn-cancel);
    border-radius: 14px;
    display: inline-block;
}

.cancelar:hover {
    background-color: rgba(255, 0, 0, 0.4)
}
</style>