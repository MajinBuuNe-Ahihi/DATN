<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { reactive, ref, watch } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import type { UploadProps } from 'ant-design-vue'
import * as geo from 'opencage-api-client'
import { v4 as uuidv4 } from 'uuid'
import RegisterAPI from '../api/registerServices'
import axios from 'axios'

const router = useRouter()

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const previewVisible = ref(false)
const previewImage = ref('')
const previewTitle = ref('')
const verify = ref('')

const fileList = ref<UploadProps['fileList']>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-3',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-4',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-xxx',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-5',
    name: 'image.png',
    status: 'error'
  }
])

const handleCancel = () => {
  previewVisible.value = false
  previewTitle.value = ''
}
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string
  }
  previewImage.value = file.url || file.preview
  previewVisible.value = true
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
}
const areaList = ref([
  {
    areaID: '478AE210-BAD3-4A84-A650-45A88CF42457',
    areaName: 'Quận Bắc Từ Liêm'
  },
  {
    areaID: '34E0A43B-8FD8-45DC-A07A-49ADBD1E12BF',
    areaName: 'Quận Hoàn Kiếm'
  },
  {
    areaID: 'BE6E2EFA-FA6C-491D-8EDB-4A57BFBBC24A',
    areaName: 'Quận Đống Đa'
  },
  {
    areaID: 'D16F0D34-4F9E-45D5-82C3-8756BDD722EF',
    areaName: 'Quận Cầu Giấy'
  },
  {
    areaID: '5F844899-575C-4600-9241-D9366835A83B',
    areaName: 'Quận Hà Đông'
  },
  {
    areaID: '333C589C-53D0-4CFA-A456-DDD98BCFFFD6',
    areaName: 'Quận Hai Bà Trưng'
  },
  {
    areaID: '65FE1C82-2C9F-4170-BE88-E876C2BFD259',
    areaName: 'Quận Ba Đình'
  }
])


const tab = ref('one')
const editedItem = reactive({
  createdDate: new Date(),
  createdBy: 'hvmanh',
  modifiedBy: 'hvmanh',
  modifiedDate: new Date(),
  updateScoped: [],
  registerID: uuidv4(),
  storeName: '',
  storeAddress: '',
  areaID: areaList.value[0].areaID,
  description: '',
  directInfo: '',
  openTime: '',
  closeTime: '',
  toPrice: 0,
  fromPrice: 0,
  wifiName: '',
  wifiPass: '',
  types: '',
  convenients: '',
  phoneNumber: '',
  email: '',
  facebookLink: '',
  instagramLink: '',
  longtitude: 0,
  latitude: 0,
  gmt: 0,
  website:"",
})
const convients = ref([])
const types = ref([])

const verifyStore = async() => {
  if(verify) {
    await axios.post('https://localhost:7175/register/active', {
      registerID: editedItem.registerID,
      verifyCode: verify.value
    },{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    console.log("Status", response.status);
   router.push('/login')
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

const save = async () => {
  if (editedItem.storeAddress) {
    await geo
      .geocode({
        q: editedItem.storeAddress,
        key: 'd2371614c5a4405ebb47894f54025aba'
      })
      .then((data) => {
        if (data.status.code === 200 && data.results.length > 0) {
          const place = data.results[0]
          editedItem.latitude = place.geometry.lat
          editedItem.longtitude = place.geometry.lng
        } else {
          console.log('Status', data.status.message)
          console.log('total_results', data.total_results)
        }
      })
      .catch((error) => {
        console.log('Error', error.message)
        if (error.status.code === 402) {
          console.log('hit free trial daily limit')
        }
      })
  }
  editedItem.fromPrice = Number(editedItem.fromPrice)
  editedItem.toPrice = Number(editedItem.toPrice)
  editedItem.convenients = convients.value.join(';');
  editedItem.types = types.value.join(';');

  console.log(editedItem)
  await axios.post('https://localhost:7175/register', editedItem,{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    console.log("Status", response.status);
    tab.value = "two"
  })
  .catch(function (error) {
    console.log(error);
  });
}

const handleChangeArea  = (e) => {
  console.log(e)
  editedItem.areaID = e
}
</script>
<template>
  <v-tabs  v-if="tab == 'one'" v-model="tab" bg-color="primary">
    <v-tab  value="one">Đăng kí thông tin</v-tab>
  </v-tabs>
   <v-tabs v-if="tab == 'two'" v-model="tab" bg-color="primary">
    <v-tab  value="two">Xác Thực</v-tab>
  </v-tabs>
    <v-card-text v-if="tab == 'one'"> 
    <v-tabs-window   v-model="tab">
      <v-tabs-window-item value="one">
        <v-container>
          <v-row>
            <h3>Thông tin chung</h3>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Tên quán" v-model="editedItem.storeName"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <a-select :default-value="areaList[0].areaID" style="width: 100%" @change="handleChangeArea">
                <a-select-option v-for="i in areaList" :key="i.areaID" :value="i.areaID">
                  {{i.areaName}}
                </a-select-option>
              </a-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" >
              <text-custom label="Địa chỉ" v-model="editedItem.storeAddress"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" >
              <text-custom label="Chỉ đường" v-model="editedItem.directInfo"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" >
              <text-custom label="Giới thiệu" v-model="editedItem.description"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <h3>Thông tin khác</h3>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Thời gian mở" v-model="editedItem.openTime"></text-custom>
            </v-col>
            <v-col cols="6">
              <text-custom label="Thời gian đóng" v-model="editedItem.closeTime"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Khoảng giá từ" v-model="editedItem.fromPrice"></text-custom>
            </v-col>
            <v-col cols="6">
              <text-custom label="Khoảng giá đến" v-model="editedItem.toPrice"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Tên wifi" v-model="editedItem.wifiName"></text-custom>
            </v-col>
            <v-col cols="6">
              <text-custom label="password wifi" v-model="editedItem.wifiPass"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h4>Kiểu quán</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Acoustic"
                value="8EBA5E2A-C3FF-49A7-AFED-FF422889294E"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Sang trọng"
                value="B5EAC4C9-75C3-461D-AF1C-57CF055C5512"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Pub"
                value="5791134A-CCAA-47CE-8385-BD575AF7BDB9"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Sách"
                value="31297DA4-F1C8-4FC8-9868-2B8820176D54"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Vườn"
                value="ED726294-57D8-4D7D-80F0-40C999611FCC"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Cổ Điển"
                value="88B20369-1619-4E8B-A8A3-B6B634DB2114"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Tone Màu"
                value="13D5E472-F4D8-4130-A419-6128E85B70D1"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Bình Dân"
                value="D83E66D1-AE97-4A31-9213-964B025B1CBA"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Thú Cưng"
                value="8BB2772B-92CD-41C5-8715-475EC2FCBFA7"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Ngoài Trời"
                value="75F3A8F6-943C-47BE-A535-FD1F2F8198DE"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe View Đẹp"
                value="A6C5266A-A4D3-4D20-808E-F46B1CDC9A5A"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Lounge"
                value="CE731A89-3071-4C81-9FB8-37D847894D6C"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="types"
                label="Cafe Trên Cao"
                value="28C84A36-2543-4889-B6CC-57C7D593596E"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h4>Tiện ích</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Bàn ngoài trời"
                value="1702C5E8-0437-4A93-B0BE-C4F594DBF265"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Chỗ đỗ oto"
                value="69C44411-8340-4D03-963E-BC6C59651D5B"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Gửi xe máy"
                value="8D274479-2E71-4231-B648-D5D65A14171B"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Máy lạnh và điều hòa"
                value="42880498-DFF5-4FB7-9267-39C51018B3EA"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Wifi miễn phí"
                value="B0BA038D-E016-43D3-ADF7-9DBF6ED5D76B"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Chiếu bóng đá"
                value="ED67CE7D-A5FC-4EE2-A7AF-6465810CC89C"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Chỗ chơi cho trẻ"
                value="DE808EA0-E6AE-443D-9B33-2E4DC6FA0202"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Mang đồ ăn ngoài"
                value="768E9805-D103-4F20-92C0-2C4A1FF3C0B0"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Nhạc sống"
                value="CDBCD51A-0C50-4EF0-A5FF-AB80FA5F04E5"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Bánh ngọt"
                value="ABB06119-0D7C-406C-AF35-87C83E61310B"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Mang thú cưng"
                value="14AE3767-CA9F-4C73-A55E-5B02537C6002"
              ></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox
                v-model="convients"
                label="Thanh toán bằng thẻ"
                value="14C2DB29-53FF-4B08-A2EE-1E51C352A35F"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <h3>Thông tin liên hệ</h3>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Điện thoại" v-model="editedItem.phoneNumber"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Email" v-model="editedItem.email"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Facebook" v-model="editedItem.facebookLink"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Instagram" v-model="editedItem.instagramLink"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Website" v-model="editedItem.website"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <h3>Hình ảnh</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <a-upload
                v-model:file-list="fileList"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card"
                @preview="handlePreview"
              >
                <div v-if="fileList.length < 8">
                  <plus-outlined />
                  <div style="margin-top: 8px">Upload</div>
                </div>
              </a-upload>
              <a-modal
                :open="previewVisible"
                :title="previewTitle"
                :footer="null"
                @cancel="handleCancel"
              >
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </v-col>
          </v-row>
          <v-row justify-center>
            <v-col cols="4">
              <v-btn color="#2196F3" @click="save">Hoàn tất</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
    </v-card-text>
    <v-card-text v-else>
     <v-tabs-window  v-model="tab">
      <v-tabs-window-item value="two" >
        <v-container>
          <v-row>
            <v-col cols="12" class="d-flex justify-start">
              <v-otp-input length="6" v-model="verify"></v-otp-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="#2196F3" @click="verifyStore">Xác Thực</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card-text>
</template>
<style scoped>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
