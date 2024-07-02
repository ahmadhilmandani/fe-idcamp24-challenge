import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/views/LandingPage.vue'
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
      name: 'landing-page',
      component: LandingPage
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
      component: LandingPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

export default router
