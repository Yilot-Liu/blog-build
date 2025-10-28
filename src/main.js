import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

// 初始化主题
const theme = localStorage.getItem('theme') || 'light'
if (theme === 'dark') {
    document.documentElement.classList.add('dark')
}

app.use(pinia)
app.use(router)
app.mount('#app')
