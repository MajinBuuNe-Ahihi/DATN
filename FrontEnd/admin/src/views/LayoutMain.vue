<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { reactive } from 'vue'

const initiallyOpen = reactive(['public'])
const icons = reactive({
  report: 'mdi-chart-arc',
  money: ' mdi-cash-multiple',
  home: 'mdi-home-analytics',
  users: 'mdi-account-group',
  order: 'mdi-order-bool-ascending-variant',
  ordershop: 'mdi-store-plus',
  orderonline: 'mdi-web',
  house: 'mdi-store-cog-outline',
  orderonline2:'mdi-storefront-check',
  export: 'mdi-store-minus',
  menu: 'mdi-silverware',
  promo: 'mdi-ticket-confirmation-outline',
  cog: 'mdi-cog'
})
const tree = reactive([])
const items = reactive([
 {
    name: 'Báo cáo',
    link: '/bao-cao-doanh-thu',
    icon: 'report',
    children: [
      {
        name: 'Báo cáo doanh thu',
        link: '/bao-cao-doanh-thu',
        icon: 'money'
      },
      {
        name: 'Báo cáo kho',
        link: '/bao-cao-kho',
        icon: 'home'
      },
      {
        name: 'Báo cáo nhân viên',
        link: '/bao-cao-nhan-vien',
        icon: 'users'
      }
    ]
  },
  {
    name: 'Order',
    link: '/order-tai-quan',
    icon: 'order',
    children: [
      {
        name: 'Order tại quán',
        link: '/order-tai-quan',
        icon: 'orderonline2',
      },
      {
        name: 'Order online',
        link: '/order-online',
        icon: 'orderonline'
      }
    ]
  },
   {
    name: 'Kho',
    link: '/nhap-kho',
    icon: 'house',
    children: [
      {
        name: 'Nhập kho',
        link: '/nhap-kho',
        icon: 'ordershop'
      },
      {
        name: 'Xuất kho',
        link: '/xuat-kho',
        icon: 'export'
      }
    ]
  },
   {
    name: 'Menu',
    link: '/menu',
    icon:'menu',
  },
   {
     name: 'Khuyến mãi',
     link: '/khuyen-mai',
     icon: 'promo'
   },
   {
     name: 'Cài đặt',
     link: '/cai-dat',
    icon: 'cog'
  },
   {
    name: 'Nhân viên',
    link: '/nhan-vien',
    icon: 'users'
  },
])
</script>

<template>
  <div class="main">
    <div class="header">
     <div class="logo">
      Tên shop
     </div>
     <router-link to="login">
       <v-btn
        class="logout"
        text
        @click="logout"
      >
        Đăng xuất
      </v-btn>
     </router-link>
    </div>
    <div class="main-content">
    <div class="navigation">
    <v-treeview
      v-model="tree"
      :open="initiallyOpen"
      :items="items"
      activatable
      item-key="name"
      open-on-click
      class="tree-menu"
    >
      <template v-slot:prepend="{ item }">
        <router-link :to="item.link">
          <v-icon>
            {{ icons[item.icon] }}
          </v-icon>
          <span>{{ item.name }}</span>
        </router-link>
      </template>
    </v-treeview>
    </div>
    <div class="contain">
      <RouterView />
    </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 10px 20px;
}
.header {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(66, 40, 40, 0.369); 
  align-items: center;
}

.main-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: stretch;
}

.navigation {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 20px;
  border-right:  1px solid rgba(66, 40, 40, 0.369);
  height: auto;
}

.navigation a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #1867c0;
}

.contain {
  flex: 1;
}
</style>
