<template>
  <ModalComp v-if="storeLogout.modalLogoutOpen">
    <h1 class="font-semibold text-center text-2xl">Yakin nih mau Logout?</h1>
    <div class="mt-8 mb-3">
      <ButtonComp :handleClick="storeLogout.closedModal" styleProp="fill" typeProp="secondary">
        Ga jadi deh...
      </ButtonComp>
    </div>
    <ButtonComp :handleClick="handleLogout" styleProp="fill" typeProp="primary">
      Yakin, nanti mampir lagi, kok!
    </ButtonComp>
  </ModalComp>

  <div class="w-full flex-initial">
    <NavbarComp />
    <main class="px-4 pb-4 pt-10">
      <header class="flex justify-between">
        <RouterLink to="/tryout" class="text-base font-bold mb-6 flex items-center">
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Tryout: Pahamify - 27 Mei 2023 15:00 PM
        </RouterLink>

        <div class="flex gap-4">
          <div class="w-fit">
            <ButtonComp styleProp="borderless" typeProp="primary">
              <span class="material-symbols-outlined text-[18px] text-cust-redish">
                delete
              </span>
              <div class="text-cust-redish">
                Hapus
              </div>
            </ButtonComp>
          </div>
          <div class="w-32">
            <ButtonComp styleProp="fill" typeProp="primary">
              <span class="material-symbols-outlined text-[18px] text-white">
                  edit
                </span>
              Edit
            </ButtonComp>
          </div>
        </div>
      </header>

      <div class="flex gap-8 flex-wrap">
        <div class="max-w-[450px] w-full">
          <label for="" class="block mb-1">Nilai yang didapatkan</label>
          <input readonly type="number" placeholder="0"
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
        <div class="grow">
          <label for="" class="block mb-1">Penyelenggara</label>
          <input readonly type="text" placeholder="Nama Penyelenggaran. Contoh: Pahamify"
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
      </div>

      <div class="mt-5">
      </div>

      <div class="mt-5 flex gap-8 flex-wrap">
        <div class="max-w-[450px] w-full">
          <label for="" class="block mb-1">Tanggal</label>
          <input readonly type="date"
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
        <div class="grow">
          <label for="" class="block mb-1">Jam</label>
          <input readonly type="time"
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
      </div>

      <div class="mt-5">
        <label for="" class="block mb-1">Platform melakukan Tryout</label>
        <input readonly type="text"
          placeholder="Platform yang digunakan agar tidak lupa contoh: Applikasi pahamify / tautan web tryout "
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>
    </main>
  </div>
</template>

<script setup>
import ModalComp from '@/components/global/ModalComp.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'
import { useLogout } from '@/stores/logoutModal'
import { RouterLink } from 'vue-router'
const storeLogout = useLogout()

const handleLogout = () => {
  localStorage.removeItem('token')
  router.replace('/login')
}

</script>