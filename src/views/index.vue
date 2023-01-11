<template>
    <main>
        <section class="view">
            <div class="container">
                <div class="row m-auto ">
                    <div class="col-sm-12 col-md-6 m-auto">
                        <div class="lead m-auto">
                            <Title text="Em busca de CRÉDITO?" />
                            <input type="text" placeholder="insira seu e-mail">
                            <button>ENVIAR</button>
                            <br>
                            <br>
                            <p class="texto-f">Estamos atuando no mercado financeiro a décadas como intermediários no
                                processo de
                                concessão de crédito.</p>
                        </div>
                    </div>
                    <div class="col-8 col-sm-8 col-md-6 m-auto">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="@/assets/img1.jpg" class="d-block w-100" alt="Calcuradora">

                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/img2.jpg" class="d-block w-100" alt="Vantagens">

                                </div>
                                <div class="carousel-item">
                                    <img src="@/assets/img3.jpg" class="d-block w-100" alt="Negócios">

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="view background d-flex">
            <div class="container ">
                <div class="row m-auto d-flex align-items-center">
                    <div class="col-sm-6 col-md-8 m-auto">
                        <div class="row m-auto"></div>
                        <div class="col-md-10 m-auto">
                            <Title text="Solução baseada em IA para alavancar oportunidades de crescimento de
                                receita." />
                        </div>
                        <div class="col-md-2 m-auto">
                            <Botao name="Quem somos?" url="about" />

                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4 m-auto">
                        <img class="d-block w-100" src="@/assets/macbook.png" alt="Site em um pc">
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Botao from '@/components/Botao.vue'
import Title from '@/components/Title.vue'

export default defineComponent({


    name: 'Index',
    components: {
        Botao,
        Title
    },

});

</script>


<style scoped>
.background {
    background-image: url(@/assets/unplash.png);
    background-size: cover;
    background-position: center;

}


.row {

    align-items: center;
    flex-direction: row;

}

.view img {
    width: auto;
    /* you can use % */
    height: 300px;
    object-fit: contain;
    border-radius: 14px;
}

.lead {
    color: var(--primary-color);
}

.lead button {
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 500;
    border: 0;
    padding: 2px;
    text-align: center;
    border: none;
    padding: 2px;
    border-radius: 0px 2px 2px 0px;
    box-shadow: 0 0 3px 1px rgba(242, 241, 241, 0.4);
}




.lead input {
    text-align: center;
    border: none;
    padding: 2px;
    border-radius: 2px 0 0 2px;
    box-shadow: 0 0 3px 1px rgba(242, 241, 241, 0.4);
}

.lead input::placeholder {
    color: var(--secondary-color)
}


.icone2 {

    height: 100px;
}

@media(max-width: 574.98px) {
    .row {
        flex-direction: column;
    }
}
</style>