import { createRouter, createWebHistory } from 'vue-router'

import ThreeColumLayout from '../layouts/ThreeColumLayout.vue'
import TwoColumnLayout from '../layouts/TwoColumnLayout.vue'

import DashboardView from '../views/Dashboard/index.vue'

import TryoutView from '../views/Tryout/index.vue'
import LatihanTryoutView from '../views/Tryout/Latihan.vue'
import TambahTryoutView from '../views/Tryout/Tambah.vue'

import KerjakanTestJurusanView from '../views/TestJurusan/Kerjakan.vue'
import HasilTestJurusanView from '../views/TestJurusan/Hasil.vue'

import LoginView from '../views/Auth/Login.vue'
import RegisterView from '../views/Auth/Register.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: TwoColumnLayout,
      children: [
        {
          path: '/',
          component: LoginView
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: TwoColumnLayout,
      children: [
        {
          path: '/',
          component: RegisterView
        }
      ]
    },
    {
      path: '/',
      component: ThreeColumLayout,
      children: [
        {
          path: '/dashboard',
          component: DashboardView,
        },
        {
          path: '/tryout',
          component: TryoutView,
        },
        {
          path: '/tryout/latihan',
          component: LatihanTryoutView,
        },
        {
          path: '/tryout/tambah',
          component: TambahTryoutView,
        },
        {
          path: '/test-jurusan/kerjakan',
          component: KerjakanTestJurusanView,
        },
        {
          path: '/test-jurusan/hasil',
          component: HasilTestJurusanView,
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
