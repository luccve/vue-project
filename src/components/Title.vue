<template>

    <h2 :class="theme">{{ text }}
    </h2>

</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Title',
    props: {
        text: String,
        theme: {
            type: String,
            default: 'title',
            title2: 'title2',
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
.title {
    font-size: 42px;
    color: var(--primary-color);
    font-weight: 600;

}

.title2 {
    font-size: 42px;
    color: var(--text-color);
    font-weight: 600;
}

@media (max-width:567px) {
    .title2 {
        font-size: 22px;
        font-weight: bold;
    }

    .title {
        font-size: 22px;
        font-weight: bold;
    }
}
</style>