<template>
    <br>
    <p class="card-text m-auto" :class="theme">{{ text }}
    </p>
    <br>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Paragraph',
    props: {
        text: String,
        theme: {
            type: String,
            default: 'op',
            op2: 'op2',
            op3: 'op3',
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
.op {
    font-size: 23px;
    color: var(--primary-color);
    font-weight: 600;

}

.op2 {
    font-size: 23px;
    color: var(--text-color);
    font-weight: 600;
}

.op3 {
    font-size: 23px;
    color: var(--hover);
    font-weight: 600;
}

@media (max-width:567px) {
    .op {
        font-size: 14px;
        font-weight: bold;
    }

    .op2 {
        font-size: 14px;
        font-weight: bold;
    }

    .op3 {
        font-size: 14px;
        font-weight: bold;
    }

}
</style>