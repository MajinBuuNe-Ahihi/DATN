<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, computed, watch, nextTick } from 'vue'
import { PromotionType } from '@src/types'
import moment from 'moment'
const search = ref('')
const items: Array = reactive([
  {
    promotionID: 1,
    promotionName: 'Khuyến mãi 10/10',
    promotionCode: 'PR1232',
    image: '1.png',
    promotionType: '%',
    value: '10',
    exprie: '2022-01-01'
  }
])
const headers = [
  {
    title: 'Tên khuyến mãi',
    align: 'start',
    key: 'promotionName'
  },
  {
    title: 'Mã khuyến mãi',
    align: 'start',
    key: 'promotionCode'
  },
  {
    title: 'Ảnh',
    align: 'center',
    key: 'image'
  },
  {
    title: 'Loại khuyến mãi',
    align: 'start',
    key: 'promotionType'
  },
  {
    title: 'Giá trị',
    align: 'start',
    key: 'value'
  },
  {
    title: 'Thời gian hết hạn',
    align: 'end',
    key: 'exprie'
  },
  {
    title: 'Thao tác',
    align: 'center',
    key: 'actions'
  }
]

const dialog = ref(false)

const editedIndex = ref(0)
let editedItem = reactive({})
let defaultItem = reactive({})
let dialogDelete = ref(false)
const open2 = ref(false)
const dateToFormatter = computed(() => moment(dateTo.value.toISOString()).format('DD-MM-yyyy'))

const editItem = (item) => {
  editedIndex.value = items.indexOf(item)
  editedItem = Object.assign({}, item)
  dialog.value = true
}
const dateTo = ref(new Date())

const deleteItem = (item) => {
  editedIndex.value = items.indexOf(item)
  editedItem = Object.assign({}, item)
  dialogDelete.value = true
}

const deleteItemConfirm = () => {
  items.splice(editedIndex.value, 1)
  closeDelete()
}

const close = async () => {
  dialog.value = false
  await nextTick(() => {
    editedItem = Object.assign({}, defaultItem)
    editedIndex.value = -1
  })
}

const closeDelete = async () => {
  dialogDelete.value = false
  await nextTick(() => {
    editedItem = Object.assign({}, defaultItem)
    editedIndex.value = -1
  })
}

const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(items[editedIndex.value], editedItem)
  } else {
    if (editedItem) {
      items.push(editedItem)
    }
  }
  close()
}

watch(dateTo, (value, value2) => {
  open2.value = false
})
</script>
<template>
  <v-card flat>
    <v-divider></v-divider>
    <v-data-table
      :items="items"
      :headers="headers"
      items-per-page-text="Bản ghi mỗi bảng"
      :loading="false"
      :search="search"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Khuyến mãi</v-toolbar-title>
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
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props"> Thêm khuyến mãi </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <text-custom v-model="editedItem.refNo" label="Tên khuyến mãi"></text-custom>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <text-custom v-model="editedItem.refNo" label="Mã khuyến mãi"></text-custom>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <text-custom
                        v-model="editedItem.refNo"
                        label="Giá trị"
                        type="number"
                      ></text-custom>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-radio-group v-model="ex7" inline>
                        <v-radio color="red" label="Phần trăm" :value="0"></v-radio>
                        <v-radio color="red" label="Thành tiền" :value="1"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <text-custom
                        v-model="dateToFormatter"
                        label="Thời gian hết hạn"
                        @focus="
                          open2 = true
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
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close"> Hủy bỏ </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save"> Lưu </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Bạn có chắc muốn xóa khuyến mãi này?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Hủy bỏ</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Lưu</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
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
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Tải lại </v-btn>
      </template>
    </v-data-table>
    <!-- <v-data-table
      :items="items"
      :headers="headers"
      items-per-page-text="Bản ghi mỗi bảng"
      :loading="false"
      item-value="no"
      v-model="selected"
      show-select
      select-all-text="Chọn tất cả"
      select-none-text="Bỏ chọn tất cả"
      select-all-label="Chọn tất cả"
      select-none-label="Bỏ chọn tất cả"
      :search="search"
    >
      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>
    </v-data-table> -->
  </v-card>
</template>

<style scoped></style>
