<template>
    <MenuBar />
    <section class="view bg-primary-color" style="flex-direction: column; justify-content: space-between">
        <div class="container calculate space-content">
            <Title text="Método 50-30-20" theme="title2" />
            <Paragraph
                text="Conheça o método 50-30-20 e aprenda como utilizá-lo para manter sua vida financeira saudável."
                theme="op2" />
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            O que é o metódo 50 30 20?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>O método 50-30-20 funciona como uma forma de dividir a renda mensal em três partes,
                                visando o controle financeiro. Dessa forma, a divisão é:
                                1- Despesas fixas / essenciais | 2- Despesas variáveis / supérfluos | 3- Reserva de
                                emergência / objetivos financeiros
                            </strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Como calcular o método 50 30 20?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>De acordo com o método 50-30-20, a junção dessas despesas deve corresponder a metade
                                do seu salário. Portanto, faça uma lista dos seus gastos fixos e veja o quanto você
                                gasta com cada um deles.</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Como adotar o método 50-30-20 no dia a dia?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Para usar o método 50-30-20 no seu dia a dia, comece transformando as porcentagens
                                em dinheiro. Por exemplo, vamos supor que a sua renda seja de R$ 3.000.

                                Neste caso, 1.500, que corresponde a 50%, devem ser destinados aos gastos fixos. Por
                                outro lado, R$ 900 devem ir para os gastos variáveis (30%).

                                Por fim, 20% devem ir para a criação da reserva de emergência, o que corresponde a R$
                                600. Sendo assim, com base nesses valores, você deve estabelecer os limites de gastos
                                dentro de cada categoria.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="view bg-seconday-color" style="flex-direction: column; justify-content: space-between">
        <div class=" bg-third-color"
            style="margin-top: 2rem; border-radius: 0.5rem; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <Title text="Calculadora 50/30/20" />
            <Paragraph
                text="Conheça o método 50-30-20 e aprenda como utilizá-lo para manter sua vida financeira saudável."
                theme="op3" />
            <Input nameInput="Rendimento líquido" theme="op2" @GanhoTotal="Show" />
            <Paragraph text="Como deveria distribuir meu orçamento?" theme="op3" />
        </div>

        <div v-show="ShowCalculate" class="calculate">

            <div class="table-list">
                <table class="customTable">
                    <thead>
                        <tr>
                            <th>Tipo de despesa</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Custos Essenciais</td>
                            <td>R$ {{ value50 }}</td>
                        </tr>
                        <tr>
                            <td>Custos Pessoais</td>
                            <td>R$ {{ value30 }}</td>
                        </tr>
                        <tr>
                            <td>Reserva Financeiras</td>
                            <td>R$ {{ value20 }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    </section>
    <FooterBar />
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Title from '@/components/Title.vue';
import Paragraph from '@/components/Paragraph.vue';
import Input from '@/components/Input.vue';
import MenuBar from '@/components/menuBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default defineComponent({
    name: 'calculadora',
    components: {
        Title, Paragraph, Input, MenuBar,
        FooterBar
    },
    data() {
        let inputData = "";
        let value50 = '';
        let value30 = '';
        let value20 = '';

        return { inputData, ShowCalculate: false, value50, value30, value20 }
    },
    methods: {

        Show(value: string) {

            this.inputData = value;
            this.inputData ? this.ShowCalculate = true : this.ShowCalculate = false;
            this.Calculate(this.inputData.replaceAll(',', '').replaceAll('.', ''))
        },
        Calculate(data: string) {
            const newData = Number(data) * 0.01;
            let value50 = Number(newData) * 0.5
            let value30 = Number(newData) * 0.3;
            let value20 = Number(newData) * 0.2;
            this.value50 = this.ParseFloat(value50.toFixed(2).toString());
            this.value30 = this.ParseFloat(value30.toFixed(2).toString());
            this.value20 = this.ParseFloat(value20.toFixed(2).toString());
        },
        ParseFloat(data: string) {
            return data.replace('.', ',');
        }
    }


})
</script>
<style scoped>
.calculate {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 2rem 0 2rem 0;
}


.table-list {
    margin: 0 auto;
    padding: 2rem;
    border: 0.1rem solid var(--text-color);
    border-radius: 0.3rem;
    background-color: var(--hover);
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px 25px 0px -14px rgba(0, 0, 0, 0.02);
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 8px 25px 0px -14px rgba(0, 0, 0, 0.02);
    font-size: 15px;
    font-weight: 600;

}

strong {
    font-size: 18px;
    color: var(--text-color);
}

.accordion-button {
    background-color: var(--secondary-color);
    color: var(--hover);
    font-size: 22px;
    font-weight: 600;

}



.customTable {
    width: 60vw;
    color: var(--text-color);


}

thead tr th {
    background-color: var(--secondary-color);
    font-size: 18px;
    color: var(--hover);
    border-radius: 2rem 0rem 2rem 0rem;


}

@media (max-width: 576px) {
    .bg-third-color {
        background-color: var(--text-color) !important;
    }
}
</style>