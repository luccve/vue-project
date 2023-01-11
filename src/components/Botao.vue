<template>
    <div>
        <button :class="theme" class="btn btn-primary">
            <router-link class="nav-link active" aria-current="page" href="#"
                :to="{ path: `${url}`, params: { url } }">{{
    name
                }}</router-link>
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
        }
    },
    data() {
        return {}
    },
    methods: {}


})
</script>
<style scoped>
.btn {
    background-color: var(--text-color);
    color: var(--primary-color);
    font-weight: 600;
    width: 100px;
}

.btn:active {
    background-color: var(--secondary-color);
}

.btn2 {
    border: none;
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 600;
    width: 100px;
}
</style>