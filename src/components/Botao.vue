<template>

    <button v-if="theme == 'consultar'" :class="theme" class="btn btn-primary" @click.prevent="getSelection">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
            viewBox="0 0 16 16">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <p>{{ name }}</p>
    </button>


    <button v-else-if="theme == 'limpar'" :class="theme" class="btn btn-primary" @click.prevent="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill"
            viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        <p>{{ name }}</p>
    </button>

    <button v-else :class="theme" class="btn btn-primary">
        <router-link class="nav-link active" aria-current="page" :to="{ path: `${url}` }">
            <p>{{ name }}</p>
        </router-link>
    </button>

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
    methods: {
        handleClick() {

            this.$emit('limpar');
        },
        getSelection() {
            this.$emit('consultar');
        }
    }


})
</script>
<style scoped>
button {
    border: none;
    width: 157px;
    height: auto;
    position: relative;
    display: flex;
    margin: 5px 5px;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: 22ms ease-in-out;
}

button p {
    margin: 0 auto;
    display: inline;
    align-items: center;
    text-align: center;

}

button svg {
    height: 1.2rem;
    width: fit-content;
}

button svg:hover {
    height: 1.4rem;
}

button:hover {
    color: var(--hover);
    font-weight: 700;
}


.btn {

    background-color: var(--text-color);
    color: var(--primary-color);
    font-weight: 600;
    max-width: fit-content;
}

.btn:active {
    background-color: var(--secondary-color);
}

.btn2 {
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 600;
    max-width: auto;

}

.consultar {
    background-color: var(--text-color);
    color: var(--primary-color);
    font-weight: 600;
    max-width: 13rem;
    max-height: 2rem !important;
}

.limpar {

    background-color: var(--preto);
    color: var(--primary-color);
    font-weight: 600;
    max-width: 13rem;
    max-height: 2rem;
    letter-spacing: .2rem;

}
</style>