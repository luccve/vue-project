<template>
    <div class="view">
        <h1>Ola sou o painel</h1>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Painel',
    setup() {
        return {}
    }
})

</script>

<style scoped>
.view {
    height: 100vh;
    width: 100vw;
}
</style>