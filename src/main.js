import './assets/main.css'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app.use(
  Vue3Toastify,
  {
    autoClose: 2500,
    style: {
      opacity: '1',
      userSelect: 'initial',
    },
  }
);

app.mount('#app')
