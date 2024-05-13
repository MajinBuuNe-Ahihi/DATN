<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import type { UploadProps } from 'ant-design-vue'

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

const tab = ref('one')
const editedItem = ref(null)
</script>
<template>
  <v-tabs v-model="tab" bg-color="primary">
    <v-tab value="one">Đăng kí thông tin</v-tab>
    <v-tab value="two">Thông tin đăng nhập</v-tab>
    <v-tab value="three">Xác thực</v-tab>
  </v-tabs>
  <v-card-text>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="one">
        <v-container>
          <v-row>
            <h3>Thông tin chung</h3>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Tên quán"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Khu vực"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Địa chỉ"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Chỉ đường"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Giới thiệu"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <h3>Thông tin khác</h3>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Thời gian mở"></text-custom>
            </v-col>
            <v-col cols="6">
              <text-custom label="Thời gian đóng"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Khoảng giá từ"></text-custom>
            </v-col>
            <v-col cols="6">
              <text-custom label="Khoảng giá đến"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Tên wifi"></text-custom>
            </v-col>
            <v-col cols="6">
              <text-custom label="password wifi"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h4>Kiểu quán</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Acoustic" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Sang trọng" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Pub" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Sách" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Vườn" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Cổ Điển" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Tone Màu" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Bình Dân" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Thú Cưng" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Ngoài Trời" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe View Đẹp" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Lounge" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Cafe Trên Cao" value="1"></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h4>Tiện ích</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Bàn ngoài trời" value="1"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Chỗ đỗ oto" value="2"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Gửi xe máy" value="3"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Máy lạnh và điều hòa" value="4"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Wifi miễn phí" value="5"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Chiếu bóng đá" value="6"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Chỗ chơi cho trẻ" value="7"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Mang đồ ăn ngoài" value="8"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Nhạc sống" value="9"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Bánh ngọt" value="10"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Mang thú cưng" value="11"></v-checkbox>
            </v-col>
            <v-col cols="2">
              <v-checkbox v-model="selected" label="Thanh toán bằng thẻ" value="12"></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <h3>Thông tin liên hệ</h3>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Điện thoại"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Email"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Facebook"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Instagram"></text-custom>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <text-custom label="Website"></text-custom>
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
              <v-btn color="#2196F3" @click="login">Hoàn tất</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="two">
        <v-card>
          <v-container>
            <v-row justify-center>
              <v-col cols="6">
                <text-custom label="Tên đăng nhập" outlined required />
              </v-col>
            </v-row>
            <v-row justify-center>
              <v-col cols="6">
                <text-custom 
                  label="Mật khẩu"
                  type="password"
                  outlined
                  required
                />
              </v-col>
            </v-row>
            <v-row justify-center>
              <v-col cols="6">
                <text-custom
                  label="Xác nhận mật khẩu"
                  type="password"
                  outlined
                  required
                />
              </v-col>
            </v-row>
            <v-row justify-center>
              <v-col cols="4">
                <v-btn color="#2196F3" @click="login">Đăng kí</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="three">
        <v-container>
          <v-row >
            <v-col cols="12" class="d-flex justify-start">
              <v-otp-input length="6" model-value="321424"></v-otp-input>
            </v-col>
          </v-row>
          <v-row >
            <v-col cols="12">
              <v-btn color="#2196F3" @click="login">Xác Thực</v-btn>
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
