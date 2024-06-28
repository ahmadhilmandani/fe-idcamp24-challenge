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

      <header class="md:flex justify-between mb-6">
        <h1 class="text-base font-bold">
          Tryout
        </h1>
        <div class="flex gap-2 flex-wrap">
          <div class="w-28">
            <ButtonComp styleProp="borderless">
              <span class="material-symbols-outlined text-[18px]">
                delete
              </span>
              Hapus
            </ButtonComp>
          </div>
          <div class="w-28">
            <ButtonComp styleProp="borderless">
              <span class="material-symbols-outlined text-[18px]">
                filter_list
              </span>
              Filter
            </ButtonComp>
          </div>
          <div class="w-32">
            <ButtonComp typeProp="secondary" styleProp="outline">
              <span class="material-symbols-outlined text-cust-orange text-[18px]">
                download
              </span>
              Download
            </ButtonComp>
          </div>
          <div class="w-52 relative">
            <ButtonComp typeProp="primary" styleProp="fill" :handleClick="() => {
              isButtonTambahTryoutClicked = !isButtonTambahTryoutClicked
            }">
              Tambah TryOut
              <span class="material-symbols-outlined transition-all text-white text-[18px]"
                :class="isButtonTambahTryoutClicked && 'rotate-90'">
                chevron_right
              </span>
            </ButtonComp>
            <div v-if="isButtonTambahTryoutClicked"
              class="w-60 bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4 absolute top-[120%] left-0 xl:left-auto xl:right-0 shadow-lg">
              <RouterLink to="/tryout/latihan" class="mb-4 block hover:font-bold transition-all">
                Latihan di Web <span class="font-bold">CA<span class="font-bold text-cust-orange">MABA</span></span>
              </RouterLink>
              <RouterLink to="/tryout/tambah" class="hover:font-bold transition-all">
                Jadwalkan dari Platform Lain
              </RouterLink>
            </div>
          </div>
        </div>
      </header>

      <div class="overflow-auto">
        <table class="w-full">
          <thead class="border-b border-cust-grey-lighter/80 bg-cust-grey-lightest">
            <tr>
              <th class="w-10 px-3 py-5 font-semibold tracking-wide text-left">
                <input type="checkbox" name="" id="">
              </th>
              <th class="w-[100px] px-3 py-5 font-semibold tracking-wide text-left flex items-center">Tanggal
                <span class="material-symbols-outlined text-base">
                  arrow_downward
                </span>
              </th>
              <th class="w-[100px] px-3 py-5 font-semibold tracking-wide text-left">Jam</th>
              <th class="px-3 py-5 font-semibold tracking-wide text-left">Penyelenggara</th>
              <th class="px-3 py-5 font-semibold tracking-wide text-left">Platform Pengerjaan</th>
              <th class="w-[50px] px-3 py-5 font-semibold tracking-wide text-left flex items-center">Nilai <span
                  class="material-symbols-outlined  text-base">
                  arrow_downward
                </span></th>
              <th class="w-24 px-3 py-5 font-semibold tracking-wide text-left">Status</th>
              <th class="w-16 px-3 py-5 font-semibold tracking-wide text-left text-white">:</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-cust-grey-lighter/80">
            <tr v-for="(val, index) in dummyFor" :key="val">
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                <input type="checkbox" name="" id="">
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                10 Aug 24
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                13:00 WIB
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                Pahamify
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                https://pahamify.com
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                500
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                <BadgeComp styleProp="fill" typeProp="success">
                  • Selesai
                </BadgeComp>
              </td>
              <td @click="" class="px-3 py-5 text-gray-700 whitespace-nowrap relative scroll-p-8">
                <label :id="index" @click="(e) => { handleClick(e) }" :for="val"
                  class="material-symbols-outlined text-[20px] hover:cursor-pointer aspect-auto">
                  more_vert
                </label>
                <div v-if="isMoreVertClick == index"
                  class="bg-cust-grey-lightest w-[140px] py-2 rounded-md border border-cust-grey-lighter absolute top-[80%] right-0 shadow-md z-50">
                  <RouterLink :to="`/tryout/lihat/${index}`"
                    class="mb-4 flex items-center gap-4 px-6 py-2 w-full hover:bg-cust-grey/40 transition-all">
                    <span class="material-symbols-outlined text-[18.5px] text-cust-blue">
                      visibility
                    </span>
                    Lihat
                  </RouterLink>
                  <RouterLink :to="`/tryout/edit/${index}`"
                    class="mb-4 flex items-center gap-4 px-6 py-2 w-full hover:bg-cust-grey/40 transition-all">
                    <span class="material-symbols-outlined text-[18.5px] text-cust-orange">
                      edit
                    </span>
                    Edit
                  </RouterLink>
                  <RouterLink to="/tryout/latihan"
                    class="mb-4 flex items-center gap-4 px-6 py-2 w-full hover:bg-cust-grey/40 transition-all">
                    <span class="material-symbols-outlined text-[18.5px] text-cust-redish">
                      delete
                    </span>
                    Hapus
                  </RouterLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'
import ModalComp from '@/components/global/ModalComp.vue'
import BadgeComp from '@/components/global/BadgeComp.vue'
import { useLogout } from '@/stores/logoutModal'
import { useRoute } from 'vue-router'
import axios from 'axios'

const isLoading = ref(true)
const isButtonTambahTryoutClicked = ref(false)
const storeLogout = useLogout()
const isMoreVertClick = ref(null)
const dummyFor = ref([1, 2, 3])
const handleClick = (e) => {
  if (e.target.id == isMoreVertClick.value) {
    return isMoreVertClick.value = null
  }
  return isMoreVertClick.value = e.target.id
}

const handleLogout = () => {
  localStorage.removeItem('token')
  router.replace('/login')
}

onMounted(() => {
  axios.get('http://13.212.182.128:3000/history-tryout',
    {
      "startDate": "2024-06-25T16:13:41.630Z",
      "organizer": "string",
      "platform": "string",
      "status": "string"
    }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }
  ).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  }).finally(() => {
    isLoading.value = false
  })
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(255, 255, 255);
  border-radius: 200px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-neutral-300;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-neutral-400;

}
</style>