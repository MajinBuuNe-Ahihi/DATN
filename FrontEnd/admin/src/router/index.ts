import { createRouter, createWebHistory } from 'vue-router'
import RevenueReport from '../views/report/RevenueReport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RevenueReport
    },
    {
      path: '/bao-cao-doanh-thu',
      name: 'revenue-report',
      component: RevenueReport
    }
  ]
})

export default router
