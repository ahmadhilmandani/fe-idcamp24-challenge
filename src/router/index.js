import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
import ThreeColumLayout from '../layouts/ThreeColumLayout.vue'

import TestJurusanNote from '@/views/TestJurusanNote.vue'
import BTSSystem from '@/views/BTSSystem.vue'
import KerjakanTestJurusanView from '../views/TestJurusan/Kerjakan.vue'
import PengerjaanView from '@/views/TestJurusan/Pengerjaan.vue'
import HasilTestJurusanView from '../views/Hasil.vue'

import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/test-jurusan/note',
      name: 'test-jurusan-note',
      component: TestJurusanNote
    },
    {
      path: '/test-jurusan/behind-the-scene',
      name: 'test-jurusan-bts',
      component: BTSSystem
    },
    {
      path: '/test-jurusan',
      component: ThreeColumLayout,
      children: [
        {
          path: 'pengerjaan',
          name: 'test-jurusan-pengerjaan',
          component: PengerjaanView
        }
      ]
    },
    {
      path: '/test-jurusan/hasil',
      name: 'test-jurusan-hasil',
      component: HasilTestJurusanView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
