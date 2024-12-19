import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next';

const app = createApp(App).use(Oruga)

app.use(router)

app.mount('#app')
