import './assets/main.css'
import VCalendar from 'v-calendar'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { updateGlobalOptions } from 'vue3-toastify'
import "vue3-toastify/dist/index.css"


const app = createApp(App)

updateGlobalOptions({
  autoClose: 2500,
  style: {
    opacity: '1',
    userSelect: 'initial',
    zIndex: '1000000000000000000000000000000000000'
  },
  clearOnUrlChange: false
})

app.use(createPinia())
app.use(router)
app.use(VCalendar, {})

app.mount('#app')
