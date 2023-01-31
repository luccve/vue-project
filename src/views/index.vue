<template>
    <menuBar />
    <main>

        <section class="view">
            <div class="container space-content">
                <div class="row m-auto ">
                    <div class="col-sm-12 col-md-6 m-auto">
                        <div class="lead m-auto">
                            <Title text="Em busca de CRÉDITO?" />
                            <input type="email" v-model="emailInput" :placeholder="placeholdemail">
                            <button @click.prevent="sendEmail">ENVIAR</button>
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
        <section class="view background">

            <div class="title">
                <Title text="Solução baseada em IA para alavancar oportunidades de crescimento de
                    receita." />
            </div>
            <div class="mopock">
                <router-link to="/about"> <img src="@/assets/macbook.png" alt="Site em um pc"></router-link>
            </div>
        </section>
    </main>
    <FooterBar />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import menuBar from "@/components/menuBar.vue";
import FooterBar from '@/components/FooterBar.vue';
import { email } from '@/services/api'
import Title from '@/components/Title.vue'

export default defineComponent({

    name: 'Index',
    components: {
        FooterBar,
        menuBar,
        Title
    },
    data() {
        const emailInput = ref("");
        const placeholdemail = ref("ex@example.com");

        return { emailInput, placeholdemail }
    },
    methods: {


        validateEmail(email: string) {
            // eslint-disable-next-line
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email.toLowerCase());
        },
        async sendEmail() {
            if (this.validateEmail(this.emailInput)) {
                const response = await email({ email: this.emailInput })
                alert(response.data)
                this.emailInput = ""
                return

            } if (!this.emailInput) {
                return
            } else {
                this.emailInput = ""
                this.placeholdemail = 'E-mail inválido'

            }
        }




    }

})

</script>


<style scoped>
.mopock {
    padding: 2rem;
    display: inline;
}


.mopock img:hover {
    cursor: pointer;
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.texto-f {
    font-size: 22px;
    font-weight: 600;
}

.background {
    background-image: url(@/assets/unplash.png);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
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
    border-radius: 2rem;
    overflow: hidden;

}

.mopock img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;

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

.background .title {
    padding: 2rem;
}


@media(max-width: 768px) {
    .mopock {
        display: flex !important;
        margin: 0 auto !important;
    }
}

@media(max-width: 574.98px) {
    .row {
        flex-direction: column;
    }

    #carouselExampleSlidesOnly {
        width: fit-content;
        display: flex;
        position: relative !important;
        left: -30% !important;

        align-content: flex-start !important;

    }

    #carouselExampleSlidesOnly img {
        width: fit-content !important;
    }
}

@media(max-width: 500.98px) {
    .row {
        flex-direction: column;
    }

    #carouselExampleSlidesOnly {
        width: fit-content;
        display: flex;
        position: relative !important;
        left: -39% !important;

        align-content: flex-start !important;

    }

    #carouselExampleSlidesOnly img {
        width: fit-content !important;
        border-radius: 0;
    }
}

@media (max-width: 695px) {

    .background .title {
        padding: 0;
    }

    .background {
        display: block;
        padding: 2rem;
    }

    .title {
        font-size: 32px;

    }

    .mopock {
        display: flex;
        align-content: center;
        justify-content: center;
        position: relative;
    }

    .mopock img {
        width: auto;
        height: fit-content;

    }
}
</style>