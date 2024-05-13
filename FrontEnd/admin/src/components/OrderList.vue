<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'

const props = defineProps({
  type: { type: Boolean, required: true }
})

const tab = ref(null)
const page = ref(1)
const dialog = ref(false)
const notifications = ref(false)
const sound = ref(true)
const widgets = ref(false)
const deliverying = ref(false)
</script>
<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 10" :key="n" cols="12" sm="3">
        <v-card style="cursor: pointer" link @click.stop="dialog = true">
          <v-card-title> Số order </v-card-title>
          <v-card-text> Bàn bao nhiêu </v-card-text>
          <v-card-subtitle class="d-flex align-center justify-space-between ga-2">
            <div class="d-flex align-center ga-1">
              <v-icon> mdi-clock </v-icon> <v-spacer></v-spacer> <span>12</span>
            </div>
            <div class="d-flex align-center ga-1">
              <v-icon> mdi-currency-usd </v-icon> <v-spacer></v-spacer> <span>12132</span>
            </div>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="secondary" @click.stop=""> Hủy </v-btn>
            <v-spacer></v-spacer>

            <v-btn v-if="type" color="primary" text @click.stop="dialog = true"> Thanh toán </v-btn>
            <v-btn v-if="!type && !deliverying" color="primary" @click.stop=""> Xác nhận </v-btn>
            <v-btn v-if="!type && deliverying" color="primary" @click.stop="">
              Hoàn tất giao hàng</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination v-model="page" :length="1" class="my-4"></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="dialog = false"></v-btn>
        <v-toolbar-title>Thông tin số bàn - số order no</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-if="type" text="Thanh toán" variant="text" @click="dialog = false"></v-btn>
          <v-btn
            v-if="!type && !deliverying"
            text="Xác nhận"
            variant="text"
            @click="dialog = false"
          ></v-btn>
          <v-btn
            v-if="!type && deliverying"
            text="Hoàn tất giao hàng"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <order-detail />
    </v-card>
  </v-dialog>
</template>
<style scoped></style>
