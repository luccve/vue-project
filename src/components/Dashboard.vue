<template>
    <div id="dashboard">
        <h1>DASBOARD</h1>
        <div id="custo">
            <Graph title="Não há movimentação, adicione em transações." />
        </div>
        <!-- <div id="ganho">
            <Graph index="2" title="Ganho" />
        </div>
        <div id="balanco">
            <Graph index="3" title="Balanço" />
        </div> -->



    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Graph from './Graph.vue';

export default defineComponent({
    name: 'Dashboard',
    components: {
        Graph
    },
    setup() {
        return {}
    },

})
</script>

<style scoped>
#dashboard div {
    margin: 2rem 0;
    border-radius: 30%;
    overflow: hidden;
    height: 100vh;
    display: flex;
    align-items: center;

}



#ganho {
    background-color: var(--primary-color);
}

#balanco {
    background-color: var(--btn-background);
}
</style>