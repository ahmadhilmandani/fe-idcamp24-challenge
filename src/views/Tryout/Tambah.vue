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
      <RouterLink to="/tryout" class="text-base font-bold mb-6 flex items-center">
        <span class="material-symbols-outlined">
          chevron_left
        </span>
        Jadwalkan TryOut dari Platform Lain
      </RouterLink>

      <div>
        <label for="" class="block mb-1">Penyelenggara</label>
        <input type="text" placeholder="Nama Penyelenggaran. Contoh: Pahamify"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>


      <div class="mt-5 flex gap-8 flex-wrap">
        <div class="grow">
          <label for="" class="block mb-1">Tanggal</label>
          <input type="date"
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
        <div class="grow">
          <label for="" class="block mb-1">Jam</label>
          <input type="time"
            class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
        </div>
      </div>

      <div class="mt-5">
        <label for="" class="block mb-1">Platform melakukan Tryout (opsional)</label>
        <input type="text"
          placeholder="Platform yang digunakan agar tidak lupa contoh: Applikasi pahamify / tautan web tryout "
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-12">
        <ButtonComp :handleClick="handleAddTryout" styleProp="fill" typeProp="primary">
          Jadwalkan TryOut +
        </ButtonComp>
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
import { ref } from 'vue'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'

const router = useRouter()

const storeLogout = useLogout()
const isLoading = ref(false)

const handleLogout = () => {
  localStorage.removeItem('token')
  router.replace('/login')
}

function handleAddTryout() {
  isLoading.value = true
  axios.post('http://13.212.182.128:3000/tryout',
    {
      "startDate": "2024-06-25T16:13:41.630Z",
      "organizer": "string",
      "platform": "Edureka",
      "status": "Mendatang"
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  ).then((response) => {
    console.log(response)
    toast.success("Tryout Berhasil didaftarkan")
    router.replace('/tryout')
  }).catch((error) => {
    toast.error("Coba lagi")
    console.log(error)
  }).finally(() => {
    isLoading.value = false
  })
}

</script>