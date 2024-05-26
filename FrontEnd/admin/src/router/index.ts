import { createRouter, createWebHistory } from 'vue-router'
import RevenueReport from '../views/report/RevenueReport.vue'
import LayoutMain from '../views/LayoutMain.vue'

import MainLogin from '../views/MainLogin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutMain,
      children: [
        {
          path: '/',
          name: 'home',
          component: RevenueReport
        },
        {
          path: '/bao-cao-doanh-thu',
          name: 'revenue-report',
          component: RevenueReport
        }, {
          path: '/bao-cao-kho',
          name: 'warehouse-report',
          component: () => import('../views/report/WareHouseReport.vue')
        },
        {
          path: '/bao-cao-nhan-vien',
          name: 'users-report',
          component: () => import('../views/report/UsersReport.vue')
        },
        {
          path: '/order-tai-quan',
          name: 'order-dinner',
          component: () => import('../views/order/OrderAtTable.vue')
        },
        {
          path: '/order-online',
          name: 'order-online',
          component: () => import('../views/order/OrderOnline.vue')
        },
        {
          path: '/nhap-kho',
          name: 'import-warehouse',
          component: () => import('../views/warehouse/ImportWareHouse.vue')
        },
        {
          path: '/xuat-kho',
          name: 'export-warehouse',
          component: () => import('../views/warehouse/ExportWareHouse.vue')
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('../views/MenuManager.vue')
        },
        {
          path: '/khuyen-mai',
          name: 'promotion',
          component: () => import('../views/PromotionManager.vue')
        }, {
          path: '/cai-dat',
          name: 'cog',
          component: () => import('../views/SettingApplication.vue')
        },
        {
          path: '/nhan-vien',
          name: 'users',
          component: () => import('../views/EmployeeManager.vue')
        }
      ]
    },
    {
      path: '/',
      component: MainLogin,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/SignIN.vue')
        },
        {
          path: '/register',
          name:'register',
          component: () => import('../views/Register.vue')
        }
      ]
    }
  ]
})

export default router
