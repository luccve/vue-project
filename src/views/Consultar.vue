<template>
    <section>
        <div class="view background1">
            <div class="container">
                <div class="row m-auto">
                    <div class="col-12 ">
                        <div class="card ">
                            <div class="card-body">
                                <div class="row m-auto">
                                    <Title text="Desenvolvendo estratégias inovadoras" theme="title2" />
                                </div>

                                <div class="row m-auto">
                                    <Paragraph
                                        text="Estamos atuando no mercado financeiro a décadas como intermediários no processo de concessão de crédito." />
                                </div>
                                <br>

                                <div class="pai row m-auto">
                                    <div class="filho">
                                        <Botao name="AGENDE UMA CONSULTA" url="about" theme="btn2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="background2">

            <div class="grid">
                <div class="title">
                    <Title text="Consulta de situação cadastral CNPJ" theme="title2" />
                </div>
                <div class="input">
                    <Input nameInput="CNPJ" :valueData="inputData" />
                </div>
                <div class="recaptcha">
                    <Recaptcha />
                </div>
                <div class="botoes">
                    <Botao name="CONSULTAR" url="#" theme="consultar" />
                    <Botao @limpar="clear" name="LIMPAR" url="#" theme="limpar" />
                </div>



            </div>
        </div>

    </section>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

import Botao from '@/components/Botao.vue';
import Title from '@/components/Title.vue';
import Paragraph from '@/components/Paragraph.vue';
import Input from '@/components/Input.vue';
import Recaptcha from '@/components/Recaptcha.vue';

export default defineComponent({
    name: 'Consultar',
    components: {
        Input,
        Botao,
        Title,
        Paragraph,
        Recaptcha
    },

    data() {
        return { inputData: '', textClear: false }
    },
    methods: {
        clear() {
            this.inputData = ' ';
        },
        dataInput(data: string) {
            this.inputData = data;
            console.log(this.inputData);
        }
    },



})
</script>
<style scoped>
.pai {
    border: none;
    position: relative;
    height: 100px;
}

.filho {
    height: auto;
    width: auto;
    border: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

}


.background1 {
    background-image: url('@/assets/happy.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

.background2 {
    background-image: url('@/assets/painel.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

}

.title {
    grid-area: 1 / 1 / 2 / 3;
}

.input {
    grid-area: 2 / 1 / 3 / 2;
    align-self: center;
    justify-self: flex-start;
}

.recaptcha {
    grid-area: 2 / 2 / 3 / 3;
    align-self: center;
    justify-self: flex-end;
}

.botoes {
    grid-area: 3 / 1 / 4 / 2;
    display: flex;
}

@media (max-width: 655px) {
    .grid {
        display: block;
        margin: 0 auto;
        position: relative;
    }


}
</style>