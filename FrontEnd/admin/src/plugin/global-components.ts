// Types
import type { App } from 'vue'
import OrderList from '../components/OrderList.vue'
import OrderDetail from '../components/OrderDetail.vue'
import AddOrder from '../components/AddOrder.vue'
export function installGlobalComponents (app: App) {
    app
    // Used by markdown-it to gen api pages, and needed to be globally loaded to work
    .component('OrderList', OrderList)
    .component('OrderDetail', OrderDetail)
    .component('AddOrder', AddOrder)
}