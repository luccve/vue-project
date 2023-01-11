<template>
    <section class="view background">

        <div class="container">
            <div class="row m-auto">
                <div class="col-12 m-auto">
                    <div class="bg-text m-auto">
                        <Title text="SOBRE" theme="title2" />
                        <br>
                        <p>Distribuidor Autorizado da rede Nacional de Informações Comerciais, disponibiliza consultas
                            de
                            CPF e
                            CNPJ
                            por
                            meio de um sistema pré-pago.
                            Somos uma empresa brasileira focada na realização de análise de aval a nível nacional, com
                            informações
                            obtidas diretamente das bases atuantes no Mercado. Consultas disponíveis para pessoa
                            Jurídicas e
                            profissionais liberais sem mensalidade.
                            Todas as consultas são realizadas on-line, ou seja, todo o procedimento está situado dentro
                            de
                            nossa
                            própria
                            página.</p>
                    </div>
                </div>
            </div>
        </div>


    </section>

    <section class="view">
        <div class="container-fluid">
            <div class="row m-auto">

                <div v-for="(item, index) in aboutList" :key="index" class="col-sm-12 col-md-4 m-auto">
                    <Card :title="item.title" :text="item.paragraph" :btnName="item.nameBtn" url="/" theme="btn2"
                        :btn="false" />
                </div>

            </div>
        </div>

    </section>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Title from '@/components/Title.vue';
import Card from '@/components/Card.vue';

export default defineComponent({
    name: 'about',
    components: {
        Title,
        Card,

    },
    data() {
        return {
            aboutList: [
                {
                    title: "SERVIÇOS",
                    paragraph: "GERENCIAMENTO DE PROJETOS, CONSULTA OPERACIONAL E ESTRATÉGIA CORPORATIVA",
                    nameBtn: "SAIBA MAIS"
                },
                {
                    title: "PROJETOS",
                    paragraph: "ALGUNS PROJETOS COM EMPRESAS DO MERCADO FINANCEIRO.",
                    nameBtn: "SAIBA MAIS"
                },
                {
                    title: "CLIENTES",
                    paragraph: "EM TODO NOSSO TEMPO DE ATIVIDADE TRABALHAMOS COM 37 EMPRESAS DE RENOME NO MERCADO.",
                    nameBtn: "SAIBA MAIS"
                },
            ]
        }
    },
    methods: {}


})
</script>
<style scoped>
.view {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    background-color: var(--secondary-color);

}

.background {
    background-image: url('@/assets/about.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

}

.bg-text {
    background-color: var(--primary-color);
    border-radius: 2px;
    color: var(--text-color);
    font-weight: bold;
    box-shadow: 2px;
    z-index: 200;
    width: 90%;
    padding: 20px;
    text-align: center;
    box-shadow: 12px 11px 45px -9px rgba(0, 0, 0, 0.1);
    font-size: 14px;
}

@media (max-width:567px) {
    .bg-text {
        font-size: 11px;
        font-weight: 500;

    }


}
</style>