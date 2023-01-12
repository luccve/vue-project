<template>
    <section class="view bg-primary-color">
        <div class="container">
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
                            <p>Conheça o método 50-30-20 e aprenda como utilizá-lo para manter sua vida financeira
                                saudável.
                            </p>
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
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until
                            the
                            collapse plugin adds the appropriate classes that we use to style each element. These
                            classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You
                            can
                            modify any of this with custom CSS or overriding our default variables. It's also worth
                            noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the
                            transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Como deve ser divido o salário?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                            collapse plugin adds the appropriate classes that we use to style each element. These
                            classes
                            control the overall appearance, as well as the showing and hiding via CSS transitions. You
                            can
                            modify any of this with custom CSS or overriding our default variables. It's also worth
                            noting
                            that just about any HTML can go within the <code>.accordion-body</code>, though the
                            transition
                            does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="view">
        <div class="container">
            <Title text="Calculadora 50/30/20" />
            <Paragraph
                text="Conheça o método 50-30-20 e aprenda como utilizá-lo para manter sua vida financeira saudável."
                theme="op3" />
            <Input nameInput="Rendimento líquido" theme="op2" />
            <Paragraph text="Como deveria distribuir meu orçamento?." theme="op3" />
        </div>
    </section>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import Title from '@/components/Title.vue';
import Paragraph from '@/components/Paragraph.vue';
import Input from '@/components/Input.vue';

export default defineComponent({
    name: 'calculadora',
    components: { Title, Paragraph, Input },
    data() {
        return {}
    },
    methods: {}


})
</script>
<style scoped>

</style>