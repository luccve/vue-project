<template>

    <div v-if="theme == 'op'" class="square" :class="theme">
        <h4>{{ nameInput }} </h4>
        <input type="text">
    </div>
    <div v-else class="calculadora">
        <h4>{{ nameInput }} </h4>
        <input type="text" placeholder="R$|">
    </div>

</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Input',
    props: {
        text: String,
        nameInput: String,
        theme: {
            type: String,
            default: 'op',
            title2: 'op2',
        }
    },
    data() {

        return {
            title: 'teste'
        }
    },
    methods: {}


})
</script>

<style scoped>
.square {
    display: flex;
    flex-direction: column;
    border: none;
    height: auto;
    width: 200px;
    padding-bottom: 20px;
}

h4 {
    color: var(--text-color);
    text-align: left;
    font-weight: 800;
}

input {

    border-radius: 4px;
    border: none;
    max-width: 400px;
    height: 40px;
    box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.3);
}


.calculadora {
    display: flex;
    flex-direction: column;
    border: none;
    height: auto;
    width: 300px;
    padding-bottom: 20px;
}

.calculadora input::placeholder {
    font-size: 22px;
    font-weight: bolder;
    color: var(--text-color)
}

.calculadora h4 {
    color: var(--hover);
    text-align: left;
    font-weight: 800;
}


@media (max-width:477px) {
    input {
        width: 300px;
    }
}
</style>