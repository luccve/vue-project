<template>
    <div id="crud">
        <div id="form">
            <h1>CRUD</h1>
            <h5>Adicionar o tipo de receita </h5>
            <select v-model="type" name="custos">
                <option value="Custo">Custo</option>
                <option value="Ganho">Ganho</option>
            </select>
            <h5>Especifique o tipo da receita </h5>
            <select v-model="type_especify" name="custos">
                <option value="Custo Essencial">Custo Essencial</option>
                <option value="Custos Pessoais">Custos Pessoais</option>
                <option value="Reserva Financeira">Reserva Financeira</option>
                <option value="Receita Primaria">Receita Primaria</option>
                <option value="Receita Secundária">Receita Secundária</option>
            </select>
            <h5>Data</h5>
            <input ref="date_input" id="date" type="date" v-model="entryDate">
            <h5>Valor $</h5>
            <input type="text" v-model="valorADD">
            <h5>Descrição</h5>
            <input type="text" v-model="desc">
            <div>MAPA</div>

            <button @click.prevent="addTransaction">Adicionar</button>

        </div>

        <div v-if="entry" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div v-else id="lista">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">Dinheiro</th>
                        <th scope="col">Data</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Remover</th>
                    </tr>
                </thead>


                <tbody>
                    <tr v-for="(item, index) in transactions" :key="index">

                        <td>{{ item.type }}</td>
                        <td>{{ item.cash }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.desc }}</td>
                        <td>
                            <a href="#popUp" id="openPopUp" @click="setValue(index)">
                                <font-awesome-icon icon="fa-solid fa-pen-to-square" size="xl" />
                            </a>
                        </td>

                        <td>
                            <a @click.prevent="remove(index)">
                                <font-awesome-icon icon="fa-solid fa-trash" size="xl" />
                            </a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

        <aside id="popUp" class="popup">
            <div class="popUpContainer">
                <header>
                    <a href="#!" class="closePopUp">X</a>
                </header>
                <article>
                    <div id="form">

                        <h5>Adicionar o tipo de receita </h5>
                        <select v-model="type" name="custos">
                            <option value="Custo">Custo</option>
                            <option value="Ganho">Ganho</option>
                        </select>
                        <h5>Especifique o tipo da receita </h5>
                        <select v-model="type_especify" name="custos">
                            <option value="Custos Essencial">Custo Essencial</option>
                            <option value="Custos Pessoais">Custos Pessoais</option>
                            <option value="Reserva Financeira">Reserva Financeira</option>
                            <option value="Receita Primaria">Receita Primaria</option>
                            <option value="Receita Secundária">Receita Secundária</option>
                        </select>
                        <h5>Data</h5>
                        <input ref="date_input" id="date" type="date" v-model="entryDate">
                        <h5>Valor $</h5>
                        <input type="text" v-model="valorADD">
                        <h5>Descrição</h5>
                        <input type="text" v-model="desc">
                        <div>MAPA</div>

                        <button href='#!' @click="editTransacations()"><a href="#!"
                                class="closePopUpOutSide"></a>Alterar</button>

                    </div>
                </article>
            </div>
            <a href="#!" class="closePopUpOutSide"></a>
        </aside>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { transaction, getAllTransaction, removeTransaction, editTransaction } from '@/services/api';
import { getAuth } from '@firebase/auth';


export default defineComponent({
    name: 'Crud',
    props: { uid: String },

    data() {
        const entryDate = ref("");
        const valorADD = ref("");
        const desc = ref("");
        const type = ref("");
        const index = ref(100);
        const type_especify = ref("");
        const user_uid = ref(`${this.uid}`);
        const transactions = reactive([
            {
                cash: "",
                date: "",
                desc: "",
                latitude: "",
                longitude: "",
                type_especify: "",
                type: "",
                uid: "",
                _id: { $oid: "" }
            }])

        return { entryDate, valorADD, desc, type, user_uid, transactions, type_especify, entry: true, index }
    },
    watch: {
        entryDate() {
            if (this.entryDate) {

                let dados = this.entryDate.split("-")
                const year = new Date().getFullYear();
                const anos = !!((Number(dados[0]) - year) === 0);

                if (!anos) {
                    alert("Adicionar uma data correta");
                    this.entryDate = ""

                }

            }
        },
        valorADD() {
            this.valorADD = this.valorADD.replace(/\D/g, '');
            this.valorADD = this.valorADD.replace(/(\d{1,2})$/, ',$1');
        }
    },
    methods: {
        clear() {
            this.user_uid = ""
            this.type = ""
            this.type_especify = ""
            this.entryDate = ""
            this.valorADD = ""
            this.desc = ""

        },
        addTransaction() {

            if (this.type && this.entryDate && this.valorADD && this.desc) {
                try {
                    transaction({
                        uid: this.user_uid,
                        type: this.type,
                        type_especify: this.type_especify,
                        date: this.entryDate,
                        cash: this.valorADD,
                        desc: this.desc,
                        latitude: "",
                        longitude: "",

                    })
                    alert('Registro Adicionado')
                    this.clear()
                    return
                } catch (error) {
                    alert(error)
                } finally {
                    this.fethList()

                }
            }
            alert("Não deixe os campos vazios!")
        },


        setValue(index: number) {
            this.user_uid = this.transactions[index].uid
            this.type = this.transactions[index].type
            this.type_especify = this.transactions[index].type_especify
            this.entryDate = this.transactions[index].date
            this.valorADD = this.transactions[index].cash
            this.desc = this.transactions[index].desc
            this.index = index

            // editTransaction(this.transactions[index])
        },
        editTransacations() {
            try {

                console.log(this.index, this.desc)
                console.log(this.transactions[this.index])
                editTransaction({
                    _id: this.transactions[this.index]._id,
                    uid: this.user_uid,
                    type: this.type,
                    type_especify: this.type_especify,
                    date: this.entryDate,
                    cash: this.valorADD,
                    desc: this.desc,
                    latitude: "",
                    longitude: "",
                })
            } catch (e) {
                console.log(e)
            } finally {
                alert('Registro alterado com sucesso')
                this.clear()
                this.fethList()
            }
        },
        remove(index: number) {
            try {
                removeTransaction(this.transactions[index])
            } catch (error) {
                console.log(error)
            } finally {
                alert('Registro deletado')
                this.fethList()
            }
        },
        async fethList() {
            try {
                const lista = await getAllTransaction(this.uid)
                this.transactions = lista;
                this.entry = false;
            }
            catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {

        this.fethList()

    }

})
</script>

<style scoped>
a {
    cursor: pointer;

}

#crud {
    display: block;
    width: 60vw;

}

#form {
    display: block;
    margin: 0 auto;
}

h1 {
    color: #ffffff;
    padding: 1em;
}

#openPopUp {
    text-align: center;
    background-color: #1abc9c;
    padding: 15px 15px;
    color: #ffffff;
    font-weight: 500;
    font-size: 1.5em;
    border-radius: 3.5px;
    text-decoration: none;
    font-weight: 100;
    transition: background-color 0.15s linear;
    -webkit-transition: background-color 0.15s linear;
    -moz-transition: background-color 0.25s linear;
    -o-transition: background-color 0.25s linear;
}

a#openPopUp:hover {
    cursor: pointer;
    background-color: #1abc9e;
}

.popup {
    position: fixed;
    top: -100vh;
    left: 0;
    z-index: 9999999;
    background: rgba(0, 0, 0, 0.75);
    width: 100vw;
    height: 100vh;
    opacity: 0;

    -webkit-transition: opacity 0.35s ease;
    -moz-transition: opacity 0.35s ease;
    -o-transition: opacity 0.35s ease;
    transition: opacity 0.35s ease;
}

.popup .popUpContainer {
    width: 100%;
    max-width: 500px;
    position: fixed;
    /* To avoid scroll to target */
    left: 50%;
    top: -100vh;
    -webkit-transition: top 0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;

    /* Trick to properly center the element by using negative 
  1/2 length of element as margin left and top */
    margin-left: -250px;
    background-color: #ffffff;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    z-index: 9999999;
}

.popup h2 {
    padding: 0.5em;
    text-align: center;
    color: #444444;
    margin: 0;
}

.popup img {
    width: 100%;
    display: block;
}

.popup article {
    height: 300px;
    background-color: #e67e22;
}

/* The cancel button on popup dialog */
.popup a.closePopUp {
    font-family: verdana;
    color: #e74c3c;
    position: absolute;
    top: 0.2em;
    right: 0.375em;
    margin: 0;
    padding: 5px;
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: none;
}

/* The cancel button on popup dialog */
.popup a:hover {
    color: #c0392b;
}

/* When popup is targeted, by clicking on link with #popup in HTML */
.popup:target {
    opacity: 1;
    top: 0;
}

.popup .closePopUpOutSide {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999991;
}

.popup:target .popUpContainer {
    top: 50px;
    -webkit-transition: top 0.35s ease;
    -moz-transition: top 0.35s ease;
    -o-transition: top 0.35s ease;
    transition: top 0.35s ease;
}

@media (max-width: 796px) {
    .popup .popUpContainer {
        width: 90%;
        max-width: none;
        left: 5%;
        margin-left: 0;
    }

    .popup ul {
        padding: 0 1em 0 1em;
    }

    .popup:target .popUpContainer {
        top: 25px;
        -webkit-transition: top 0.35s ease;
        -moz-transition: top 0.35s ease;
        -o-transition: top 0.35s ease;
        transition: top 0.35s ease;
    }
}
</style>