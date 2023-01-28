<template>
  <div id="graph" v-if="data.length > 0">
    <Responsive class="w-full">
      <template #main="{ width }">
        <Chart direction="circular" :size="{ width: 350, height: 350 }" :data="data" :margin="{
          left: Math.round((width - 360) / 2),
          top: 20,
          right: 0,
          bottom: 20
        }" :config="{ controlHover: false }">
          <template #layers>
            <Pie :dataKeys="['type', 'cash']"
              :pie-style="{ innerRadius: 100, padAngle: 0.05, colors: ['#be4d25', '#49be25'] }" />
          </template>
          <template #widgets>
            <Tooltip :config="{
              name: {},
              avg: { hide: true },
              pl: { label: 'value' },
            
            }" hideLine />
          </template>
        </Chart>
        <div class="btn">
          <h1>Custo Total: {{ data[0].cash }}</h1>
          <h1>Ganho Total: {{ data[1].cash }}</h1>
        </div>
      </template>
    </Responsive>
  </div>

  <div v-else>
    <h2>Sem transações ainda salvas.</h2>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, reactive, onBeforeMount } from 'vue'
import { Chart, Responsive, Pie, Tooltip } from 'vue3-charts'
import { getAllTransaction } from '@/services/api';
import { getAuth } from "@firebase/auth";
import { transaction } from 'types';

export default defineComponent({
  components: { Chart, Pie, Tooltip, Responsive },
  name: 'Graph',
  props: {
    title: {
      type: String,
      default: "Custo",
      required: false,
    },
  },
  setup() {

    const data: Array<any> = reactive([]);
    const direction = ref('horizontal');
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })
    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8
      }
    })

    const fetchData = () => {

      getAuth().onAuthStateChanged(async user => {
        const dados = await getAllTransaction(user?.uid);
        if (dados) {
          filterParams(dados);
        }
        return
      })


    }
    const filterParams = (dados: Array<transaction>) => {
      const matrizCusto: Array<any> = [];
      const matrizGanho: Array<any> = [];
      dados.map((elem: transaction) => {
        if (elem.type == "Custo") {
          matrizCusto.push({ cash: Number(elem.cash.replace(",", ".")), type: elem.type })
          return
        }
        matrizGanho.push({ cash: Number(elem.cash.replace(",", ".")), type: elem.type })
      })

      valueTotal(matrizCusto, matrizGanho)

    }
    const valueTotal = (custo: any, ganho: any) => {
      const TodalCusto = custo.reduce((some: number, i: any) => some + i.cash, 0)
      const TotalGanho = ganho.reduce((some: number, i: any) => some + i.cash, 0)
      if (TodalCusto + TotalGanho > 0) {
        data.push({ type: "Custo", cash: TodalCusto, color: '#be4d25' }, { type: "Ganho", cash: TotalGanho, color: '#49be25' })
      }
      return

    }


    onBeforeMount(() => {
      fetchData()
      // console.log(data)
    })

    // onUpdated(() => {
    //   fetchData()
    //   console.log(data)
    // })


    return { data, direction, margin, axis }
  }


})
</script>

<style scoped>
#graph {
  width: 100%;
  height: fit-content;
}

.btn {
  background-color: var(--hover);
}

.btn h1 {
  color: var(--primary-color);
}
</style>