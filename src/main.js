import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import { Icon } from 'vant';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Button);
app.mount('#app')
app.use(Icon);
app.use(ElementPlus)
