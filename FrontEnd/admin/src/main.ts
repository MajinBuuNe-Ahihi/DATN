import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { Chart, registerables } from 'chart.js';
import { installVuetify,installI18n } from '@/plugin'


Chart.register(...registerables);
const app = createApp(App)

app.use(router)


installVuetify(app)
installI18n(app)

router.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload')
    app.mount('#app')
  })
