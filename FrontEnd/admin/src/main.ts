import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { Chart, registerables } from 'chart.js';
import { installVuetify,installI18n,installGlobalComponents } from '@/plugin'
import Antd,{message} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


Chart.register(...registerables);
const app = createApp(App)

app.use(router)
app.use(Antd);

app.config.globalProperties.$message = message;


installVuetify(app)
installI18n(app)
installGlobalComponents(app)


router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
  app.mount('#app')
  })

