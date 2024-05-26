<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, computed, watch, nextTick } from 'vue'
import moment from 'moment'
import {
  WareHouseType,
  WareHouseDTOType,
  UserDTOType,
  InventoryItemBaseType,
  WareHouseDetailType
} from '@src/types'
import { v4 as uuidv4 } from 'uuid';


const search = ref('')
const items: Array<WareHouseDTOType> = reactive([
  {
    no: 1,
    id: uuidv4(),
    refNo: 'xk01',
    quantity: 12,
    details: [],
    createdBy: 'String',
    createdDate: new Date(),
    modifiedBy: 'String',
    idUserCreated: 'String',
    modifiedDate: new Date(),
    user: {}
  },
  {
    no: 2,
    id: uuidv4(),
    refNo: 'xk02',
    quantity: 12,
    details: [],
    createdBy: 'String',
    createdDate: new Date(),
    modifiedBy: 'String',
    modifiedDate: new Date(),
    idUserCreated: 'String',
    user: {}
  },
  {
    no: 1,
    id: uuidv4(),
    refNo: 'xk03',
    quantity: 12,
    details: [],
    createdBy: 'String',
    createdDate: new Date(),
    modifiedBy: 'String',
    modifiedDate: new Date(),
    idUserCreated: 'String',
    user: {}
  }
])
const headers = [
  {
    title: 'Mã số phiếu',
    align: 'start',
    key: 'refNo'
  },
  {
    title: 'Ngày tạo phiếu',
    align: 'start',
    key: 'modifiedDate'
  },
  {
    title: 'Số lượng xuất',
    align: 'end',
    key: 'quantity'
  },
  {
    title: 'Người tạo phiếu',
    align: 'start',
    key: 'modifiedBy'
  },
  {
    title: 'Thao tác',
    align: 'center',
    key: 'actions'
  }
]

const dialog = ref(false)

const editedIndex = ref(0)

let editedItem = reactive({} as WareHouseType)
let defaultItem = reactive({})
let dialogDelete = ref(false)
let viewMode = ref(0)
let users = reactive([
  {
    id: '1',
    name: 'admin',
    email: 'admin',
    eNo: '1',
    role: 1,
    status: 1,
    addresses: 'admin',
    phone: 'admin',
    userName: 'admin',
    fullName: 'admin',
    createdBy: 'admin',
    createdDate: new Date(),
    modifiedBy: 'admin',
    modifiedDate: new Date(),
    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'
  },
  {
    id: '2',
    eNo: '2',
    name: 'admin2',
    email: 'admin2',
    role: 1,
    status: 1,
    addresses: 'admin2',
    phone: 'admin',
    userName: 'admin',
    fullName: 'admin2',
    createdBy: 'admin2',
    createdDate: new Date(),
    modifiedBy: 'admin2',
    modifiedDate: new Date(),
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
  }
] as Array<UserDTOType>)
let user = ref(users[0])
const warehouseInventories = reactive({
  items: [] as Array<WareHouseDetailType>
})
const warehouseDetailEdit = ref({} as WareHouseDetailType)

let inventories = ref([
  {
    id: '2',
    name: 'inventories2',
    iNo: 'No2'
  },
  {
    id: '3',
    name: 'inventories3',
    iNo: 'No3'
  },
  {
    id: '4',
    name: 'inventories4',
    iNo: 'No4'
  }
] as Array<InventoryItemBaseType>)
let dialogInventory = ref(false)
let editMode = ref(false)

let saveInventory = () => {
  if (warehouseDetailEdit.value && warehouseDetailEdit.value.quantity) {
    let currentInventory = inventories.value.find(
      (item) => item.id == warehouseDetailEdit.value.inventory
    )
    let oExists = warehouseInventories.items.find(
      (item) => item.inventoryItem == currentInventory.id
    )
    if (oExists) {
      let index = warehouseInventories.items.findIndex(
        (item) => item.id == oExists.id
      )
      let value =
        (editMode.value?0:Number(warehouseInventories.items[index].quantity)) +
        Number(warehouseDetailEdit.value.quantity)
      warehouseInventories.items[index].quantity = value
    } else {
      warehouseInventories.items.push({
        id: uuidv4(),
        quantity: warehouseDetailEdit.value.quantity,
        inventoryItem: currentInventory.id,
        name: currentInventory.name
      } as WareHouseDetailType)
    }
  }
  warehouseDetailEdit.value = {}
  dialogInventory.value = false
   editMode.value = false
}

let editInventory = (item) => {
  editMode.value = true
  let currentValue = warehouseInventories.items.find((i) => item.id == i.id)
  warehouseDetailEdit.value = {inventory:currentValue.inventoryItem, quantity:currentValue.quantity}
  dialogInventory.value = true
}

let deleteInventory = (item) => {
debugger
  warehouseInventories.items.splice(
    warehouseInventories.items.findIndex((i) => i.id == item.id),
    1
  )
}

let headerWarehouseDetail = [
  {
    title: 'Tên nguyên vật liệu',
    align: 'start',
    key: 'name'
  },
  {
    title: 'Số lượng xuất',
    align: 'end',
    key: 'quantity'
  },
  {
    title: 'Thao tác',
    align: 'end',
    key: 'actions'
  }
]

const editItem = (item) => {
  warehouseInventories.items = [...item.details]
  editedIndex.value = items.findIndex(i => i.id == item.id)
  editedItem = {...item}
  dialog.value = true
  viewMode.value = 2
}

const deleteItem = (item) => {
  editedIndex.value = items.findIndex(i => i.id == item.id)
  editedItem = Object.assign({}, item)
  dialogDelete.value = true
}

const view = async (item) => {
  warehouseInventories.items = item.details
  await nextTick(function () {
    editedIndex.value = items.indexOf(item)
    editedItem = {...item}
    dialog.value = true
    viewMode.value = 1
  })
}

const deleteItemConfirm = () => {
  items.splice(editedIndex.value, 1)
  closeDelete()
}

const close = async () => {
  dialog.value = false
  await nextTick(() => {
    warehouseDetailEdit.value = {}
    warehouseInventories.items.splice(0,warehouseInventories.items.length-1)
    editedItem = {...defaultItem}
    editedIndex.value = -1
  })
  viewMode.value = 0
}

const closeDelete = async () => {
  dialogDelete.value = false
  await nextTick(() => {
    editedItem = {...defaultItem}
    editedIndex.value = -1
  })
}

const save = () => {
  if (editedItem) {
    let sumQuantity = 0
    warehouseInventories.items.forEach((item) => {
      sumQuantity += Number(item.quantity)
    })
    if(viewMode.value == 2) {
      debugger
      let index = items.findIndex(item => item.id == editedItem.id)
      items[index] = {
          ...items[index],
          quantity: sumQuantity,
          details: [...warehouseInventories.items],
          modifiedBy: user.value.fullName,
          modifiedDate: editedItem.createdDate,
          idUserCreated: user.value.id,
          user: user.value
        } 
        }else {
        items.push({
          id: uuidv4(),
          refNo: editedItem.refNo,
          quantity: sumQuantity,
          details: [...warehouseInventories.items],
          createdBy: user.value.fullName,
          createdDate: warehouseDetailEdit.value.createdDate,
          modifiedBy: user.value.fullName,
          modifiedDate: editedItem.createdDate,
          idUserCreated: user.value.id,
          user: user.value
        } as WareHouseType)

      }
  }
  close()
}

watch(
  user,
  (v1, v2) => {
    console.log(v1, v2)
  },
  { deep: true }
)
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
      :sort-by="[{ key: 'createdDate', order: 'desc' }]"
    >
      <template v-slot:loading>
        <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Phiếu xuất kho</v-toolbar-title>
          <v-spacer></v-spacer>
          <text-custom
            v-model="search"
            density="compact"
            label="Tìm kiếm..."
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></text-custom>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props"> Thêm phiếu xuất </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <h2>Thêm phiếu xuất kho</h2>
                    </v-col>
                  </v-row>
                  <v-row>
                    <h3>Thông tin</h3>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <text-custom
                        v-model="editedItem.refNo"
                        label="Mã số phiếu"
                        :disabled="viewMode == 1"
                      ></text-custom>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <text-custom
                        v-model="editedItem.createdDate"
                        type="date"
                        label="Ngày xuất"
                        :disabled="viewMode == 1"
                      ></text-custom>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <auto-complete-custom
                        v-model="user"
                        :items="users"
                        label="Người tạo"
                        item-title="fullName"
                        return-object
                        :disabled="viewMode == 1"
                      >
                        <template v-slot:item="{ props, item }">
                          <v-list-item
                            v-bind="props"
                            :prepend-avatar="item.raw.avatar"
                            :subtitle="item.raw.fullName"
                            :title="item.raw.eNo"
                          ></v-list-item>
                        </template>
                      </auto-complete-custom>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <h3>Nguyên vật liệu</h3>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-data-table
                        :headers="headerWarehouseDetail"
                        :items="warehouseInventories.items"
                        items-per-page-text="Bản ghi mỗi bảng"
                      >
                        <template v-slot:top>
                          <v-dialog v-model="dialogInventory" max-width="500px">
                            <template v-slot:activator="{ props }">
                              <v-btn class="mb-2" color="primary" dark v-bind="props" :disabled="viewMode == 1">
                                Thêm nguyên vật liệu
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" sm="6">
                                      <auto-complete-custom
                                        v-model="warehouseDetailEdit.inventory"
                                        :items="inventories"
                                        label="Nguyên vật liệu"
                                        item-title="name"
                                        item-value="id"
                                      >
                                        <template v-slot:item="{ props, item }">
                                          <v-list-item
                                            v-bind="props"
                                            :subtitle="item.raw.name"
                                            :title="item.raw.iNo"
                                          ></v-list-item>
                                        </template>
                                      </auto-complete-custom>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                      <text-custom
                                        v-model="warehouseDetailEdit.quantity"
                                        type="number"
                                        label="Số lượng"
                                      ></text-custom>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="blue-darken-1"
                                  variant="text"
                                  @click="dialogInventory = false"
                                  >Hủy bỏ</v-btn
                                >
                                <v-btn color="blue-darken-1" variant="text" @click="saveInventory"
                                  >Lưu</v-btn
                                >
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </template>
                        <template v-slot:item.actions="{ item }">
                          <v-icon  class="me-2" size="small" @click="viewMode == 1?()=>{}:editInventory(item)">
                            mdi-pencil
                          </v-icon>
                          <v-icon  size="small" @click="viewMode == 1?()=>{}: deleteInventory(item)">
                            mdi-delete
                          </v-icon>
                        </template>
                      </v-data-table>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <template v-if="!(viewMode==1)">
                  <v-btn color="blue-darken-1" variant="text" @click="close">Hủy bỏ</v-btn>
                  <v-btn color="blue-darken-1" variant="text" @click="save">Lưu</v-btn>
                </template>
                <template v-else>
                  <v-btn color="blue-darken-1" variant="text" @click="close">Đóng</v-btn>
                </template>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Bạn có chắc muốn xóa phiếu thu này?</v-card-title>
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
      <template v-slot:item.actions="{ item }">
        <v-icon class="me-2" size="small" @click="view(item)"> mdi-eye </v-icon>
        <v-icon class="me-2" size="small" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:item.modifiedDate="{item}">
        <span>{{moment(item.modifiedDate).format('YYYY-MM-DD')}}</span>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Tải lại </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped></style>
