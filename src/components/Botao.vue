<template>
    <div class="center">
        <button v-if="theme == 'consultar'" :class="theme" class="btn btn-primary">
            <div class="flex-d">
                <router-link class="nav-link active" aria-current="page" href="#"
                    :to="{ path: `${url}`, params: { url } }">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <p>{{ name }}</p>
                </router-link>
            </div>
        </button>


        <button v-else-if="theme == 'limpar'" :class="theme" class="btn btn-primary">
            <router-link class="nav-link active" aria-current="page" href="#" :to="{ path: `${url}`, params: { url } }">
                <div class="flex-d">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                    <p>{{ name }}</p>
                </div>
            </router-link>
        </button>

        <button v-else :class="theme" class="btn btn-primary">
            <router-link class="nav-link active" aria-current="page" href="#" :to="{ path: `${url}`, params: { url } }">
                <p>{{ name }}</p>
            </router-link>
        </button>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Botao',
    props: {
        name: String,
        url: String,
        theme: {
            type: String,
            default: 'btn',
            btn2: 'btn2',
            consultar: 'consultar',
            limpar: 'limpar',
        }
    },
    data() {
        return {}
    },
    methods: {}


})
</script>
<style scoped>
button {
    border: none;
    width: 157px;
    min-height: 40px;
    position: relative;
    display: flex;
    margin: 5px 5px;
}

.btn {

    background-color: var(--text-color);
    color: var(--primary-color);
    font-weight: 600;
    max-width: 130px;
}

.btn:active {
    background-color: var(--secondary-color);
}


.flex-d svg {
    align-self: center;
}

.flex-d p {
    flex-direction: row;
    align-self: flex-end;
    position: absolute;
    border: none;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
    align-items: center;
    text-align: center;
}

.btn2 {
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 600;
    max-width: 130px;
    margin: 5px 5px;
}

.consultar {

    display: flex;
    flex-direction: row;
    background-color: var(--text-color);
    color: var(--primary-color);
    font-weight: 600;
    max-width: 13rem;
    max-height: 64px;
    margin: 5px 5px;

}

.limpar {
    display: flex;
    flex-direction: row;
    background-color: var(--preto);
    color: var(--primary-color);
    font-weight: 600;
    max-width: 13rem;
    max-height: 64px;
    letter-spacing: .2rem;
    margin: 5px 5px;
}
</style>