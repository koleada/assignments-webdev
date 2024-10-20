import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';

router.addRoute({ path: '/', component: () => import('./pages/index.vue') })
const app = createApp(App)

app.use(router)

app.mount('#app')
