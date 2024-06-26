import { createRouter, createWebHistory } from 'vue-router'

import ThreeColumLayout from '../layouts/ThreeColumLayout.vue'
import TwoColumnLayout from '../layouts/TwoColumnLayout.vue'

import DashboardView from '../views/Dashboard/index.vue'

import TryoutView from '../views/Tryout/index.vue'
import LatihanTryoutView from '../views/Tryout/Latihan.vue'
import LihatTryoutView from '../views/Tryout/Lihat/index.vue'
import EditTryoutView from '../views/Tryout/Edit/index.vue'
import TambahTryoutView from '../views/Tryout/Tambah.vue'

import KerjakanTestJurusanView from '../views/TestJurusan/Kerjakan.vue'
import PengerjaanView from '@/views/TestJurusan/Pengerjaan.vue'
import HasilTestJurusanView from '../views/TestJurusan/Hasil.vue'

import LoginView from '../views/Auth/Login.vue'
import RegisterView from '../views/Auth/Register.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: TwoColumnLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: LoginView
        }
      ]
    },
    {
      path: '/register',
      component: TwoColumnLayout,
      children: [
        {
          path: '',
          name: 'register',
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
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/tryout',
          name: 'tryout-index',
          component: TryoutView,
        },
        {
          path: '/tryout/latihan',
          name: 'tryout-latihan',
          component: LatihanTryoutView,
        },
        {
          path: '/tryout/tambah',
          name: 'tryout-tambah',
          component: TambahTryoutView,
        },
        {
          path: '/tryout/lihat/:id',
          name: 'tryout-lihat',
          component: LihatTryoutView,
        },
        {
          path: '/tryout/edit/:id',
          name: 'tryout-edit',
          component: EditTryoutView,
        },
        {
          path: '/test-jurusan/kerjakan',
          name: 'test-jurusan-kerjakan',
          component: KerjakanTestJurusanView,
        },
        {
          path: '/test-jurusan/pengerjaan',
          name: 'test-jurusan-pengerjaan',
          component: PengerjaanView,
        },
        {
          path: '/test-jurusan/hasil',
          name: 'test-jurusan-hasil',
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
