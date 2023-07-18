import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import KMR  from './components/KMR/index'
const app = createApp(App)
app.use(router)
app.use(store)
app.use(KMR)
app.mount('#app')
