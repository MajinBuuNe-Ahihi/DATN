<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref,computed,watch } from 'vue'
import moment from 'moment'

const search = ref('')
const items = reactive([
 {
    eno: 'NV1',
    name: 'Dứa',
    image: '5.png',
    role: 'chủ nhà hàng',
    address: 'quảng ninh',
    birth: '22/4/2001',
    email: 'hvmnah@gmail.com',
    phone: 12123221,
    status: true
  },
  {
    eno: 'NV2',
    name: 'Dứa',
    image: '5.png',
    role: 'phục vụ',
    address: 'quảng ninh',
    birth: '22/4/2001',
    email: 'hvmnah@gmail.com',
    phone: 12123221,
    status: true
  },
  {
    eno: 'NV3',
    name: 'Dứa',
    image: '5.png',
    role: 'thu ngân',
    address: 'quảng ninh',
    birth: '22/4/2001',
    email: 'hvmnah@gmail.com',
    phone: 12123221,
    status: true
  }
])
const headers = [
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
    title: 'Chức vụ',
    align: 'start',
    key: 'role'
  },
  {
    title: 'Email',
    align: 'end',
    key: 'email'
  },
  {
    title: 'Số điện thoại',
    align: 'end',
    key: 'phone'
  },
  {
    title: 'Địa chỉ',
    align: 'start',
    key: 'address'
  },
  {
    title: 'Ngày sinh',
    align: 'end',
    key: 'birth'
  },
  {
    title: 'Trạng thái',
    align: 'center',
    key: 'status'
  }
]

const stateaddressTime = [
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
     Nhân viên
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
