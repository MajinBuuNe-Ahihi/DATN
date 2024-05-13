<script setup lang="ts">
import { reactive, computed, ref, watch } from 'vue'
import { LineChart, useLineChart, DoughnutChart, useDoughnutChart,RadarChart } from 'vue-chart-3'
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

const orderQuantityData = {
  labels: ['Order tại bàn', 'Orderonline', 'Mang đi'],
  datasets: [
    {
      data: [30, 40, 90],
      backgroundColor: ['#83b6b8', '#94c0c1', '#b4d3d4']
    }
  ]
}

const orderQuantity = computed<ChartOptions<'doughnut'>>(() => ({
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Thống kê order trong ngày'
    }
  }
}))

const orderRevenueData = {
  labels: ['Order tại bàn', 'Orderonline', 'Mang đi'],
  datasets: [
    {
      data: [30, 40, 90],
      backgroundColor: ['#83b6b8', '#94c0c1', '#b4d3d4']
    }
  ]
}

const orderRevenue = computed<ChartOptions<'doughnut'>>(() => ({
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Thống kê doanh thu theo order trong ngày'
    }
  }
}))

const foodSellerData = {
  labels: ['cafe trứng', 'cafe sữa', 'cafe đen'],
  datasets: [
    {
      data: [30, 40, 90],
      backgroundColor: ['#83b6b8', '#94c0c1', '#b4d3d4']
    }
  ]
}

const foodSeller = computed<ChartOptions<'doughnut'>>(() => ({
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Thống kê số lượng món đã bán'
    }
  }
}))

const emotionData = {
  labels: [
    'Quá tệ',
    'Trung bình',
    'Bình thường',
    'Tốt',
    'Quá tốt',
  ],
  datasets: [
    {
      label: 'Vị trí',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [10, 20, 30, 10, 30]
    },
    {
      label: 'Không gian',
      backgroundColor: 'rgba(44, 156, 248,0.2)',
      borderColor: 'rgba(44, 156, 248,1)',
      pointBackgroundColor: 'rgba(44, 156, 248,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(44, 156, 248,1)',
      data: [7, 6, 27, 50, 10]
    },
      {
      label: 'Đồ uống',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 22, 40, 5, 5]
    },
      {
      label: 'Phục vụ',
      backgroundColor: 'rgba(13, 216, 213,0.2)',
      borderColor: 'rgba(13, 216, 213,1)',
      pointBackgroundColor: 'rgba(13, 216, 213,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(13, 216, 213,1)',
      data: [12, 28, 36, 14, 10]
    },
      {
      label: 'Giá cả',
      backgroundColor: 'rgba(13, 216, 47,0.2)',
      borderColor: 'rgba(13, 216, 47,1)',
      pointBackgroundColor: 'rgba(13, 216, 47,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(13, 216, 47,1)',
      data: [28, 48, 32,13,15]
    }
  ]
}

const optionsEmotion = {
  responsive: true,
  maintainAspectRatio: false
}


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

watch(dateFrom, (value, value2) => {
  open1.value = false
})

watch(dateTo, (value, value2) => {
  open2.value = false
})
</script>

<template>
  <v-container class="grey lighten-5 revenue">
    <v-row> Thời gian </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3" class="d-flex align-center ga-1">
        <span>Từ</span>
        <text-custom
          :value="dateFromFormatter"
          @focus="
            open1 = true;
            open2 = false
          "
          readonly
        ></text-custom>
        <v-date-picker
          v-if="open1"
          v-model="dateFrom"
          style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            border: 1px solid black;
          "
        >
        </v-date-picker>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="d-flex align-center ga-1">
        <span>Đến</span>
        <text-custom
          v-model="dateToFormatter"
          @focus="
            open2 = true;
            open1 = false
          "
          readonly
        ></text-custom>
        <v-date-picker
          style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
            border: 1px solid black;
          "
          v-if="open2"
          @change="open2 = false"
          v-model="dateTo"
        >
        </v-date-picker>
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
        <v-card class="pa-4 card" outlined>
          <DoughnutChart :chartData="orderRevenueData" :options="orderRevenue"
        /></v-card>
      </v-col>
    </v-row>
    <v-row> Đặt hàng </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card class="pa-4 card" outlined>
          <DoughnutChart
            :width="200"
            :height="200"
            :chartData="orderQuantityData"
            :options="orderQuantity"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card class="pa-4" outlined>
            <DoughnutChart
              :width="200"
              :height="200"
              :chartData="foodSellerData"
              :options="foodSeller"
            />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="pa-0"> Món bán chạy </v-col>
      <v-col cols="12" sm="6" class="pa-0"> Đánh giá </v-col>
    </v-row>
    <v-row  align="stretch">
      <v-col cols="12" sm="6"  class="d-flex align-stretch">
        <v-card class="pa-4" style="width:100%" outlined > 
          <span>Top sản phẩm bán chạy</span>
          <div class="list-product">
          <template v-for="i in 5" :key="i">
          <div class="top-product">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFtvU8yh8U9I1allLDfFG6AsUlngOP_NdaQ&s" alt="">
            <div class="name">
              món abc
            </div>
            <div class="quantity">100</div>
          </div>
          </template>
          </div>
         </v-card>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-stretch">
        <v-card class="pa-4" style="width:100%" outlined> <RadarChart :chartData="emotionData" :options="optionsEmotion"/> </v-card>
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
.list-product {
  margin-top: 20px;
}
.top-product {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 60px;
}

.top-product:last-child {
  border-bottom: none !important;
}
.top-product img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.top-product .name {
  flex: 1;
  font-size: 16px;
  font-weight: bold;
}

.top-product .quantity {
  font-size: 14px;
  font-weight: bold;
}
</style>
