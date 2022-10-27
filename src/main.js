import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vant from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)
// 配置全局axios请求数据
// 响应时间
// axios.defaults.timeout = 3000
axios.defaults.baseURL = 'https://elm.cangdu.org'
app.config.globalProperties.$http =axios

app.use(store)
app.use(router)
app.use(vant)
app.mount('#app')
