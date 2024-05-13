<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
const paymentMethod = ref('tm')
const page = ref(1)
const dialog = ref(false)
</script>
<template>
  <v-container>
    <v-row align="start">
      <v-col cols="12" sm="7">
        <v-row>
          <v-col cols="12">
            <v-text-field
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Search templates"
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="start">
          <template v-for="i in 3" :key="i">
            <v-col cols="4" sm="4">
              <v-card style="cursor: pointer" link>
                <v-img
                  class="align-end text-white"
                  height="200"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  cover
                >
                  <v-card-title>Mã món</v-card-title>
                  <v-card-title>Tên món</v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </template>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination v-model="page" :length="1" class="my-4"></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="5" class="d-flex flex-column algin-start justify-end ga-6 left">
        <div class="d-flex align-center justify-space-between ga-6">
          <span>Số order:123B - Bàn: 12B</span>
          <v-btn class="ma-2" @click="dialog = true">
            <v-icon icon="mdi-table-chair " start></v-icon>
            Chọn bàn
          </v-btn>
        </div>
        <template v-for="i in 10" :key="i">
          <div class="product-order">
            <div class="product-code">P12</div>
            <div class="product-name">Món 1</div>
            <div class="product-quantiy">2</div>
            <div class="product-handle">
              <v-btn density="compact" icon="mdi-plus"></v-btn>
              <v-btn density="compact" icon="mdi-minus"></v-btn>
            </div>
          </div>
        </template>
        <div class="d-flex align-center justify-space-between">
          <v-btn color="red-darken-4"> Hủy </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text> Xác nhận </v-btn>
        </div>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <v-toolbar>
          <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
          <v-toolbar-title>Chọn bàn</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text="Chọn" variant="text" @click="dialog = false"></v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-row align="start">
              <v-col cols="2">
                <v-card link color="light-blue" class="d-flex flex-column algin-center justify-center ga-1">
                  <v-card-title style="text-align: center">Bàn 20 </v-card-title>
                </v-card>
              </v-col>
                <v-col cols="2">
                <v-card link color="light-blue-darken-4" class="d-flex flex-column algin-center justify-center ga-1">
                  <v-card-title style="text-align: center">Bàn 20 </v-card-title>
                </v-card>
              </v-col>
            <template v-for="i in 10" :key="i">
              <v-col cols="2">
                <v-card class="d-flex flex-column algin-center justify-center ga-1" link color="grey-darken-1" disabled>
                  <v-card-title style="text-align: center">Bàn 20 </v-card-title>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<style scoped>
.product-order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  font-weight: bold;
  gap: 10px;
}

.product-name {
  flex: 1;
  font-weight: bold;
}
.product-code {
  width: 70px;
  font-weight: bold;
}
.product-price {
  width: 70px;
  font-weight: bold;
}

.product-quantiy {
  width: 100px;
  font-weight: bold;
}

.product-total {
  font-weight: bold;
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.product-total span,
.left span {
  font-weight: bold;
}
</style>
