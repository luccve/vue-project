<template>

    <div class="view">

        <div class="space-content">
            <img class="d-block w-50 m-auto" src="@/assets/404.png" alt="PÁGINA NÃO ENCONTRADA">
        </div>

        <div class="text">
            <Title text="Desculpe, a página que você está procurando não existe. Se você acha que
                algo
                está quebrado, relate um problema." theme="title2" />
        </div>


        <div class="botoes">
            <Botao name="HOME" url="/" />


            <Botao name="CONTATO" url="about" />
        </div>

    </div>

</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Botao from '@/components/Botao.vue';
import Title from '@/components/Title.vue';

export default defineComponent({
    name: 'notFound',
    components: {
        Botao,
        Title
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
    height: 95vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--hover);
}

.view .text {
    padding: 2rem;
}

.view .botoes {
    display: inline-flex;
}
</style>