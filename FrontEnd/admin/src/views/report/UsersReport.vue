<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref,computed,watch } from 'vue'
import moment from 'moment'

const search = ref('')
const items = reactive([
  {
    no: 1,
    eno: 'NV1',
    name: 'Hạt cafe',
    image: '1.png',
    timeWork: 123,
    revenue: 1231.2,
    tip: 223,
    timeLater: 123,
    hourLater: 12,
    status: false
  },
  {
    no: 2,
    eno: 'NV2',
    name: 'Thanh long',
    image: '2.png',
    timeWork: 123,
    revenue: 1231.2,
    timeLater: 123,
    hourLater: 12,
    tip: 223,
    status: true
  },
  {
    no: 3,
    eno: 'NV3',
    name: 'Táo',
    image: '3.png',
    timeWork: 123,
    timeLater: 123,
    hourLater: 12,
    revenue: 1231.2,
    tip: 223,
    status: false
  },
  {
    no: 4,
    eno: 'NV4',
    name: 'Lê',
    image: '4.png',
    timeWork: 123,
    revenue: 1231.2,
    tip: 223,
    timeLater: 123,
    hourLater: 12,
    status: true
  },
  {
    no: 5,
    eno: 'NV5',
    name: 'Dứa',
    image: '5.png',
    timeWork: 123,
    revenue: 1231.2,
    tip: 223,
    timeLater: 123,
    hourLater: 12,
    status: true
  }
])
const headers = [
  {
    title: 'Số thứ tự',
    align: 'center',
    key: 'no'
  },
  {
    title: 'Mã nhân viên',
    align: 'center',
    key: 'eno'
  },
  {
    title: 'Tên',
    align: 'start',
    key: 'name'
  },
  {
    title: 'Ảnh',
    align: 'center',
    key: 'image'
  },
  {
    title: 'Số giờ làm',
    align: 'start',
    key: 'timeWork'
  },
  {
    title: 'Số lần đi muộn',
    align: 'end',
    key: 'timeLater'
  },
  {
    title: 'Số lần giờ đi muộn',
    align: 'end',
    key: 'hourLater'
  },
  {
    title: 'Doanh thu trong ca làm việc',
    align: 'start',
    key: 'revenue'
  },
  {
    title: 'Tip',
    align: 'end',
    key: 'tip'
  },
  {
    title: 'Trạng thái',
    align: 'center',
    key: 'status'
  }
]

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
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <!-- <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; -->
      Báo doanh thu nhân viên
      <v-spacer></v-spacer>
      <div class="time-picker">
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
      </div>
      <v-spacer></v-spacer>
      <div class="time-picker">
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
      </div>
      <v-spacer></v-spacer>
      <div class="time-picker">
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
      </div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Tìm kiếm..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table
      v-model:search="search"
      :items="items"
      :headers="headers"
      items-per-page-text="Bản ghi mỗi bảng"
      :loading="false"
    >
      <template v-slot:header.status>
        <div class="text-end">Trạng thái</div>
      </template>

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>

      <template v-slot:item.status="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.status ? 'green' : 'red'"
            :text="item.status ? 'Còn làm việc' : 'Đã nghỉ việc'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped></style>
