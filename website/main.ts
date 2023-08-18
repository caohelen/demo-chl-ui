import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router'

// 引入 组件 全局
import Chlui from 'chl-ui'
import "cheme-chalk/index.scss"

let app = createApp(App)

app.use(Chlui).use(router).mount("#app")