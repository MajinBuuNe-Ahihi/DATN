<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref } from 'vue'
const paymentMethod = ref('tm')
</script>
<template>
  <v-container>
    <v-row align="start">
      <v-col cols="12" sm="6">
        <div class="product-order">
          <div class="product-code">Mã món</div>
          <div class="product-name">Tên món</div>
          <div class="product-price">Giá tiền</div>
          <div class="product-quantiy">Số lượng</div>
          <div class="product-total">Thành tiền</div>
        </div>
        <template v-for="i in 10" :key="i">
          <div class="product-order">
            <div class="product-code">P12</div>
            <div class="product-name">Món 1</div>
            <div class="product-price">1322$</div>
            <div class="product-quantiy">2</div>
            <div class="product-total">
              <span>Tổng tiền: </span>
              <span>1322$</span>
            </div>
          </div>
        </template>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex flex-column algin-start justify-end ga-6 left">
        <div class="d-flex align-center ga-1 justify-end">
          <span class="d-flex align-center ga-1" style="min-width: 150px">Hình thức thanh toán:</span>
          <v-radio-group
            class="d-flex align-center ga-1"
            inline
            :hide-details="true"
            v-model="paymentMethod"
          >
            <v-radio label="Tiền mặt" value="tm"></v-radio>
            <v-radio label="Chuyển khoản" value="ck"></v-radio>
          </v-radio-group>
        </div>
        <div class="d-flex align-center ga-1">
          <span style="min-width: 150px">Ngày thanh toán: </span> <span>22/12/2024</span>
        </div>
        <div class="d-flex align-center ga-1">
          <span style="min-width: 150px">Ngày giao hàng: </span> <span>22/12/2024</span>
        </div>
        <div class="d-flex flex-column ga-1">
          <span style="min-width: 150px">Ghi chú: </span> <text-custom></text-custom>
        </div>
        <div class="d-flex align-center ga-1">
          <span style="min-width: 150px">Tổng tiền: </span> 1233455
        </div>
      </v-col>
    </v-row>
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

.product-total span, .left span {
  font-weight: bold;
}
</style>
