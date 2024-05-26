<!-- eslint-disable vue/valid-v-slot -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, computed, watch, nextTick } from 'vue'
import moment from 'moment'
import { InventoryItemDTOType, UnitType, InventoryStructType } from '@src/types'
import { v4 as uuidv4 } from 'uuid'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';


const search = ref('')
const items: Array<InventoryItemDTOType> = reactive([
  {
    id: uuidv4(),
    iNo: 'M1',
    name: 'Sinh tố dừa',
    img: 'j3.png',
    unit: uuidv4(),
    description: 'abc',
    priceS: 2333,
    priceM: 2312,
    priceL: 33,
    priceXL: 222,
    type: 1,
    active: 1,
    ingredients: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 }
    ],
    unitName: 'Lọ'
  }
])

const ingredientsInventory: Array<InventoryItemDTOType> = reactive([
  {
    id: uuidv4(),
    iNo: 'M2',
    name: 'Đường',
    img: 'j3.png',
    unit: uuidv4(),
    description: 'abc',
    priceS: 2333,
    priceM: 2312,
    priceL: 33,
    priceXL: 222,
    type: 1,
    active: 1,
    ingredients: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 }
    ],
    unitName: 'Lọ'
  }
])
const headers = [
  {
    title: 'Mã món',
    align: 'start',
    key: 'iNo'
  },
  {
    title: 'Tên món',
    align: 'start',
    key: 'name'
  },
  {
    title: 'Ảnh',
    align: 'end',
    key: 'img'
  },
  {
    title: 'Đơn vị tính',
    align: 'start',
    key: 'unitName'
  },
  {
    title: 'Đơn giá',
    align: 'center',
    children: [
      {
        title: 'S',
        align: 'center',
        key: 'priceS'
      },
      {
        title: 'M',
        align: 'center',
        key: 'priceM'
      },
      {
        title: 'L',
        align: 'center',
        key: 'priceL'
      },
      {
        title: 'XL',
        align: 'center',
        key: 'priceXL'
      }
    ]
  },
  {
    title: 'Loại',
    align: 'center',
    key: 'type'
  },
  {
    title: 'Ghi chú',
    align: 'center',
    key: 'description'
  },
  {
    title: 'Trạng thái',
    align: 'center',
    key: 'active'
  }
]

const dialog = ref(false)

const editedIndex = ref(0)

let editedItem = reactive({} as InventoryItemDTOType)
let defaultItem = reactive({})
let dialogDelete = ref(false)
let viewMode = ref(0)
let units: Array<UnitType> = reactive([
  {
    id: "36A698AD-9EE2-4801-BB4D-34DE5CFE898E",
    unitName: 'Túi'
  },
  {
    id: "4BAD3C69-295C-497D-AE98-620D918B4314",
    unitName: 'KG'
  },
  {
    id: "56C54BCD-7F5C-4EA4-90D3-869E200445EB",
    unitName: 'Gram'
  },
  {
    id: "DB7F4527-739F-4080-B31B-88A55C9E5DC6",
    unitName: 'Bát'
  },
  {
    id: "5D590FD7-6354-4963-9622-CD69EB95B635",
    unitName: "Ly"
  },
  {
    id:"A2EC94BA-7B5F-4D50-8571-DB21094ECAA7",
    unitName: "ml"
  },{
    id: "0FC6AF6B-82BD-4BFC-AA06-F6B03EF24D55",
    unitName: "Cốc"
  }
] as Array<UnitType>)
let unit = ref(units[0])

const ingredients = reactive({
  items: [] as Array<InventoryStructType>
})
const ingredient = ref({} as InventoryStructType)

let dialogInventory = ref(false)
let editMode = ref(false)

let saveInventory = () => {
  debugger
  if (ingredient.value && ingredient.value.quantity) {
    let currentInventory = ingredientsInventory.find(
      (item) => item.id == ingredient.value.inventory
    )
    let oExists = ingredients.items.find(
      (item) => item.inventoryItem == currentInventory.id
    )
    if (oExists) {
      let index = ingredients.items.findIndex((item) => item.id == oExists.id)
      let value =
        (editMode.value ? 0 : Number(ingredients.items[index].quantity)) +
        Number(ingredient.value.quantity)
      ingredients.items[index].quantity = value
    } else {
      ingredients.items.push({
        id: uuidv4(),
        quantity: ingredient.value.quantity,
        inventoryItem: currentInventory.id,
        name: currentInventory.name
      })
    }
  }
  ingredient.value = {}
  dialogInventory.value = false
  editMode.value = false
}

let editInventory = (item) => {
  editMode.value = true
  let currentValue = ingredients.items.find((i) => item.id == i.id)
  ingredient.value = {
    inventory: currentValue.inventoryItem,
    quantity: currentValue.quantity
  }
  dialogInventory.value = true
}

let deleteInventory = (item) => {
  ingredients.items.splice(
    ingredients.items.findIndex((i) => i.id == item.id),
    1
  )
}

let headerIngredient = [
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

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
  if (info.file.status === 'error') {
    // loading.value = false;
    message.error('upload error');
     getBase64(info.file.originFileObj, (base64Url: string) => {
      imageUrl.value = base64Url;
      loading.value = false;
    });
  }
};

const beforeUpload = (file: UploadProps['fileList'][number]) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}


const editItem = (item) => {
  ingredients.items = [...item.details]
  editedIndex.value = items.findIndex((i) => i.id == item.id)
  editedItem = { ...item }
  dialog.value = true
  viewMode.value = 2
}

const deleteItem = (item) => {
  editedIndex.value = items.findIndex((i) => i.id == item.id)
  editedItem = Object.assign({}, item)
  dialogDelete.value = true
}

const view = async (item) => {
  ingredients.items = item.details
  await nextTick(function () {
    editedIndex.value = items.indexOf(item)
    editedItem = { ...item }
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
    ingredient.value = {}
    ingredients.items.splice(0, ingredients.items.length - 1)
    editedItem = { ...defaultItem }
    editedIndex.value = -1
  })
  viewMode.value = 0
}

const closeDelete = async () => {
  dialogDelete.value = false
  await nextTick(() => {
    editedItem = { ...defaultItem }
    editedIndex.value = -1
  })
}

const save = () => {
  debugger
  if (editedItem) {
    editedItem.img = imageUrl.value
    editedItem.unit = unit.value.id
    editedItem.unitName = unit.value.unitName
    editedItem.details = [...ingredients.items]
    items.push(editedItem)
  }

  editedItem = {...{
    id: '',
    iNo: '',
    name: '',
    img: '',
    unit: '',
    description: '',
    priceS:0 ,
    priceM: 0,
    priceL: 0,
    priceXL: 0,
    type: 0,
    active: 0,
    ingredients: [
     
    ],
    unitName: ''
  }}
  close()
}
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
          <v-toolbar-title>Menu</v-toolbar-title>
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
          <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
            <template v-slot:activator="{ props }">
              <v-btn class="mb-2" color="primary" dark v-bind="props"> Thêm món </v-btn>
            </template>
            <v-card>
              <v-toolbar>
                <v-btn icon="mdi-close" @click="()=>{dialog = false}"></v-btn>
                <v-toolbar-title>Thêm món</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn text="Thêm" variant="text" @click="()=>{dialog = false;save()}"></v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <h3>Thông tin</h3>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <text-custom v-model="editedItem.name" label="Tên món"></text-custom>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <text-custom v-model="editedItem.iNo" label="Mã món"></text-custom>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <auto-complete-custom
                      v-model="unit"
                      :items="units"
                      label="Đơn vị tính"
                      item-title="unitName"
                      return-object
                    >
                    </auto-complete-custom>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-radio-group v-model="editedItem.type" inline>
                      <v-radio color="red" label="Món" :value="0"></v-radio>
                      <v-radio color="red" label="Nguyên vật liệu" :value="1"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                 <v-row>
                  <v-col cols="12" sm="6">
                    <text-custom v-model="editedItem.priceS" label="Giá size S"></text-custom>
                  </v-col>
                    <v-col cols="12" sm="6">
                    <text-custom v-model="editedItem.priceM" label="Giá size M"></text-custom>
                  </v-col>
                </v-row>
                 <v-row>
                  <v-col cols="12" sm="6">
                    <text-custom v-model="editedItem.priceL" label="Giá size L"></text-custom>
                  </v-col>
                    <v-col cols="12" sm="6">
                    <text-custom v-model="editedItem.priceXL" label="Giá size XL"></text-custom>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <a-upload
                    v-model:file-list="fileList"
                    name="avatar"
                    list-type="picture-card"
                    class="avatar-uploader"
                    style="overflow: hidden"
                    :show-upload-list="false"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :before-upload="beforeUpload"
                    @change="handleChange"
                  >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" style="height:100%;width:100%;border-radius:8px"/>
                    <div v-else>
                      <loading-outlined v-if="loading"></loading-outlined>
                      <plus-outlined v-else></plus-outlined>
                      <div class="ant-upload-text">Upload</div>
                    </div>
                  </a-upload>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6">
                    <h3>Nguyên liệu thành phần</h3>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-data-table
                      :headers="headerIngredient"
                      :items="ingredients.items"
                      items-per-page-text="Bản ghi mỗi bảng"
                    >
                      <template v-slot:top>
                        <v-dialog v-model="dialogInventory" max-width="500px">
                          <template v-slot:activator="{ props }">
                            <v-btn
                              class="mb-2"
                              color="primary"
                              dark
                              v-bind="props"
                              :disabled="viewMode == 1"
                              max-width="300"
                            >
                              Thêm nguyên liệu thành phần
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
                                      v-model="ingredient.inventory"
                                      :items="ingredientsInventory"
                                      label="Thành phần"
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
                                      v-model="ingredient.quantity"
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
                        <v-icon
                          class="me-2"
                          size="small"
                          @click="viewMode == 1 ? () => {} : editInventory(item)"
                        >
                          mdi-pencil
                        </v-icon>
                        <v-icon
                          size="small"
                          @click="viewMode == 1 ? () => {} : deleteInventory(item)"
                        >
                          mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Bạn có chắc muốn xóa món này?</v-card-title>
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
      <template v-slot:item.active="{ item }">
         <div v-if="item.active">
          Ngưng bán
         </div>
         <div v-else>
          Đang bán
         </div>
      </template>
      <template v-slot:item.type="{ item }">
         <div v-if="!item.type">
          Món ăn
         </div>
         <div v-else>
          Nguyên Vật Liệu
         </div>
      </template>
        <template v-slot:item.img="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`${item.img}`"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Tải lại </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped></style>
