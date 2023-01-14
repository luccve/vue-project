<template>
    <section>
        <div class="view background1 ">
            <div class="container space-content">
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
                    <Input nameInput="CNPJ" :valueData="inputData" @dataValue="dataInput" />
                </div>
                <div class="recaptcha">
                    <Recaptcha @success="sinal" />
                </div>
                <div class="botoes">
                    <Botao @consultar="getCNPJ" name="CONSULTAR" url="#" theme="consultar" />
                    <Botao @limpar="clear" name="LIMPAR" theme="limpar" />
                </div>
            </div>


        </div>
        <div v-show="Empresa" class="grade">
            <div class="cnpjNames" v-for="(item, index ) in cnpjData" :key="index">
                <h1>NOME FANTASIA: {{ item.fantasia }}</h1>
                <h1>DATA DE ABERTURA: {{ item.abertura }}</h1>
                <h1>CIDADE: {{ item.municipio }}</h1>
                <h1>CNPJ: {{ item.cnpj }}</h1>
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
import { apiCNPJ } from '@/services/api';


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
        const cnpjData = [
            {
                fantasia: String,
                abertura: String,
                atividade_principal: String,
                cnpj: String,
                municipio: String,
            }];
        return { inputData: '', textClear: false, cnpjData, Empresa: false, status: '', Recaptcha: false }
    },
    methods: {
        async clear() {
            this.Empresa = false;
        },
        formatInputCNPJ() {
            let newData = this.inputData;
            let hasNoString = newData.search('/') > 0 ? true : false;
            if (hasNoString) newData = newData.replace('/', '').replaceAll('.', '').replace('-', '')
            return newData;
        },
        setCnpjData(object: any) {

            if (this.Recaptcha == false && object.status === "ERROR") {
                window.alert(`${object.message} ou confirme que você não é um robô`)
            } else {

                this.cnpjData[0].fantasia = object.fantasia;
                this.cnpjData[0].abertura = object.abertura;
                this.cnpjData[0].atividade_principal = object.atividade_principal;
                this.cnpjData[0].cnpj = object.cnpj;
                this.cnpjData[0].municipio = object.municipio;
                this.status = object.message;
                this.Empresa = true;
            }
        },
        async getCNPJ() {
            if (this.inputData.length > 13) {
                try {
                    const cnpj = this.formatInputCNPJ()
                    let object = await apiCNPJ(cnpj);
                    this.setCnpjData(object);
                } catch (e) {
                    if (e instanceof TypeError) {
                        console.log('Type error');
                    }
                    else if (e instanceof EvalError) {
                        console.log('Eval error');
                    }
                    else if (e instanceof SyntaxError) {
                        this.status ? window.alert(`${this.status}`) : window.alert(`Muitas requisiçoes por minuto`)

                    }
                    else {
                        console.log('Nao sei que erro é');
                        console.error(e);
                    }

                }
            }
            else { window.alert("'Digite o CNPJ'"); }

        },
        dataInput(data: string) {
            if (data.length > 13) {
                this.inputData = data;

            }

        },
        // eslint-disable-next-line
        sinal(response: string) {
            this.Recaptcha = true;
        }
    },



})
</script>
<style scoped>
.grade {
    margin: 2rem 0 2rem 0;
}

.cnpjNames {
    width: 30vw;
    background-color: var(--primary-color);
    margin: 0 auto;
    padding: 1rem;
    border-radius: 0.5rem;
}

.cnpjNames h1 {
    color: var(--text-color);
    font-weight: 700;
    font-size: 22px;
}

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
    margin: 2rem;
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

@media (max-width: 658px) {

    .title {
        width: 60vw;
        margin: 0 auto;
    }

    .grid {
        display: block;
        margin: 0 auto;
        position: relative;
    }

    .input {
        display: inline-flex;
    }

    .recaptcha {
        display: inline-flex;
    }

    .botoes {
        display: inline-flex;
    }

}
</style>