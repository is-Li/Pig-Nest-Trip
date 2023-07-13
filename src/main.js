
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

import "normalize.css" //第三方导入的CSS重置
import "./assets/css/index.css"  //自定义样式重置

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
