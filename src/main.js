import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// main.js

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


createApp(App).use(router).mount('#app')
