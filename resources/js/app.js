import './bootstrap';
import {createApp} from 'vue'
import { router } from './src/router';
// import App from './src/router/App.vue'
import App from './src/router/App.vue'
import { createPinia } from 'pinia';
// import pinia 
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')