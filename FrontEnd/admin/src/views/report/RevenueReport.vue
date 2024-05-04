<script setup lang="ts">
import { reactive, computed, ref, watch } from 'vue'
import { LineChart, useLineChart, DoughnutChart, useDoughnutChart } from 'vue-chart-3'
import { ChartOptions } from 'chart.js'
import moment from 'moment'
import { format, parseISO } from 'date-fns'

const stateRevenueTime = [
  {
    label: 'hôm qua',
    value: 0
  },
  {
    label: 'tháng này',
    value: 1
  },
  {
    label: 'tháng trước',
    value: 2
  },
  {
    label: '3 tháng trước',
    value: 3
  },
  {
    label: '6 tháng trước',
    value: 4
  },
  {
    label: 'năm nay',
    value: 5
  },
  {
    label: 'năm ngoái ',
    value: 6
  }
]

const selectRevanueTime = reactive({
  label: 'hôm qua',
  value: 0
})

const testData = {
  labels: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 44, 12, 33, 55, 11, 22, 11],
      backgroundColor: ['#83b6b8', '#94c0c1', '#a4c9cb', '#b4d3d4', '#c4dddd', '#d4e6e7', '#e5f0f0']
    }
  ]
}
const optionsLine = computed<ChartOptions<'line'>>(() => ({
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Tăng trưởng doanh thu theo tháng (2024)'
    }
  }
}))
const { lineChartProps, lineChartRef } = useLineChart({
  chartData: testData,
  options: optionsLine
})

const userData = {
  labels: ['Khách tại bàn', 'khách orderonline', 'Khách mang đi'],
  datasets: [
    {
      data: [30, 40, 90],
      backgroundColor: ['#83b6b8', '#94c0c1', '#b4d3d4']
    }
  ]
}

const optionsUser = computed<ChartOptions<'doughnut'>>(() => ({
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Thống kê khách hàng trong ngày'
    }
  }
}))

const dateFrom = ref(new Date())
const dateTo = ref(new Date())

const dateFromFormatter = computed(() => moment(dateFrom.value.toISOString()).format('DD-MM-yyyy'))
const dateToFormatter = computed(() => moment(dateTo.value.toISOString()).format('DD-MM-yyyy'))

const open1 = ref(false)
const open2 = ref(false)

const changValueRevanueTime = (value) => {
  selectRevanueTime.label = value.raw.label
  selectRevanueTime.value = value.raw.value
}

watch(dateFrom,  (value, value2) => {
  open1.value = false
})

watch(dateTo,  (value, value2) => {
  open2.value = false
})
</script>

<template>
  <v-container class="grey lighten-5 revenue">
    <v-row> Thời gian </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3" class="d-flex align-center ga-1">
        <span>Từ</span>
        <text-custom :value="dateFromFormatter"   @focus="open1 = true; open2 = false" readonly></text-custom>
        <v-date-picker v-if="open1" v-model="dateFrom"  style="position: fixed; top:50%; left: 50%; transform: translate(-50%,-50%); z-index: 9999;border: 1px solid black;"> </v-date-picker>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="d-flex align-center ga-1">
         <span>Đến</span>
        <text-custom
          v-model="dateToFormatter"
          @focus="open2 = true; open1 = false"
          readonly
        ></text-custom>
        <v-date-picker style="position: fixed; top:50%; left: 50%; transform: translate(-50%,-50%); z-index: 9999; border: 1px solid black;" v-if="open2" @change="open2 = false" v-model="dateTo"> </v-date-picker>
      </v-col>
      <v-col cols="1" lg="2">
        <select-custom
          flat
          solo-inverted
          v-model="selectRevanueTime"
          :items="stateRevenueTime"
          item-title="label"
          return-object
          dense
        >
          <template v-slot:item="{ item }">
            <v-list-item :title="item.raw.label" @click="() => changValueRevanueTime(item)" />
          </template>
        </select-custom>
      </v-col>
    </v-row>
    <v-row> Báo cáo </v-row>
    <v-row align="stretch">
      <v-col cols="12" sm="4" class="d-flex flex-column ga-6">
        <v-row align="stretch">
          <v-col cols="12" sm="6" class="d-flex flex-column">
            <v-card
              class="pa-4 card flex-column d-flex justify-sm-center align-center ga-1"
              outlined
            >
              <div>
                <v-icon> mdi-currency-usd </v-icon>
                <span> 1234 </span>
              </div>
              <span class="font-1"> doanh thu hiện tại </span>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex flex-column">
            <v-card
              class="pa-4 card flex-column d-flex justify-sm-center align-center ga-1"
              outlined
            >
              <div>
                <v-icon> mdi-currency-usd </v-icon>
                <span> 1234 </span>
              </div>
              <span class="font-1"> báo cáo doanh thu theo tháng </span>
            </v-card>
          </v-col>
        </v-row>
        <v-card class="pa-4 mat-2" outlined>
          <LineChart :height="200" :width="200" v-bind="lineChartProps" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-4 card" outlined>
          <DoughnutChart :chartData="userData" :options="optionsUser"
        /></v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class="pa-4 card" outlined> báo cáo order </v-card>
      </v-col>
    </v-row>
    <v-row> Đặt hàng </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="pa-4" outlined> tại bàn mang đi vận chuyển </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="pa-4" outlined> các món đã đặt hàng </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="pa-0"> Món bán chạy </v-col>
      <v-col cols="12" sm="6" class="pa-0"> Đánh giá </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="pa-4" outlined> sản phẩm bán chạy nhất </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="pa-4" outlined> đánh giá </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.card {
  height: 100%;
}

.font-1 {
  font-size: 10px;
}
</style>
