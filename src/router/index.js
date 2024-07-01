import { createRouter, createWebHistory } from 'vue-router'

import ThreeColumLayout from '../layouts/ThreeColumLayout.vue'

import KerjakanTestJurusanView from '../views/TestJurusan/Kerjakan.vue'
import PengerjaanView from '@/views/TestJurusan/Pengerjaan.vue'
import HasilTestJurusanView from '../views/TestJurusan/Hasil.vue'

import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ThreeColumLayout,
      children: [
        {
          path: '/',
          name: 'test-jurusan-pengerjaan',
          component: PengerjaanView
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
