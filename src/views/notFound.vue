<template>
    <div class="container m-auto ">
        <div class="view  row m-auto">

            <div class="col-12 m-auto">
                <img class="d-block w-50 m-auto" src="@/assets/404.png" alt="PÁGINA NÃO ENCONTRADA">
            </div>
            <br>
            <br>
            <div class="col-12 m-auto">
                <p class="text-center m-auto">Desculpe, a página que você está procurando não existe. Se você acha que
                    algo
                    está quebrado, relate um problema.</p>
            </div>

            <br>
            <br>
            <div class="col-12 col-sm-6 ">
                <Botao name="HOME" url="/" />
            </div>

            <div class="col-12 col-sm-6">
                <Botao name="CONTATO" url="about" />
            </div>


        </div>

    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Botao from '@/components/Botao.vue';

export default defineComponent({
    name: 'notFound',
    components: {
        Botao
    },
    data() {
        return {}
    },
    methods: {}


})
</script>
<style scoped>
.view {
    display: flex;
    height: 80vh;
    width: 100%;
    align-items: center;
    justify-items: center;
    background-color: aliceblue;
}

h1 {
    font-size: 42px;
}

p {
    color: var(--text-color);
    font-weight: 500;
    width: 50vw;
}
</style>