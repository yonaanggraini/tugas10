import { createApp } from 'vue'
import App from './App.vue'
import router from './Router' // Pastikan path ini benar

const app = createApp(App)
app.use(router)
app.mount('#app')