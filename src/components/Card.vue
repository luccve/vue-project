<template>
    <br>
    <div class="container">
        <div class="row m-auto">
            <div class="col-12 ">
                <div class="card ">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title m-auto">{{ title }}</h5>
                        </div>
                        <br>
                        <br>
                        <div class="row">
                            <p class="card-text m-auto">{{ text }}</p>
                        </div>
                        <br>

                        <br>
                        <div class="row">
                            <Botao :name="btnName" :url="url" :theme="theme" />
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Botao from './Botao.vue';

export default defineComponent({
    name: 'Card',
    components: {
        Botao,

    },
    props: {
        title: String,
        text: String,
        btnName: String,
        url: String,

        theme: String,
    },
    data() {
        return {}
    },
    methods: {}


})
</script>
<style scoped>
p {
    font-size: 14px;
    text-align: center;
}




.card-body {


    min-height: 300px;
}

h5 {
    color: var(--text-color);
    font-weight: 600;
    font-size: 22px;
}

p {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color);
}

@media (max-width: 1000px) {
    .card {
        max-height: auto;

    }

    h5 {
        font-size: 14px;
    }

    p {
        font-size: 11px
    }
}
</style>