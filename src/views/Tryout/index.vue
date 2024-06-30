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

  <div v-if="!openFilter" class="fixed bottom-14 right-0 left-0 flex justify-center">
    <div class="bg-white rounded-xl shadow-lg p-12 w-[480px] border">
      <h3 class="font-bold mb-4 text-lg flex justify-between">
        Filter Tryout
        <span @click="()=>{openFilter = !openFilter}" class="material-symbols-outlined text-cust-redish hover:cursor-pointer">
              close
            </span>
      </h3>

      <div class="mb-4">
        <div class="flex flex-wrap gap-2 mb-2">
          <label for="" class="block">Dari Tanggal</label>
        </div>
        <input type="date" v-model="activeFilter.startDate"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mb-4">

        <div class="flex flex-wrap gap-2 mb-2">
          <label for="" class="block">Nilai lebih besar dari</label>
        </div>
        <input type="number" v-model="activeFilter.rangeScore"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>
      <!-- <div class="mb-4">

        <div class="flex flex-wrap gap-2 mb-2">
          <label for="" class="block">Status</label>
        </div>
        <input type="date" v-model="utbkDate"
          class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div> -->
    </div>
  </div>

  <div class="w-full flex-initial">
    <NavbarComp />
    <main class="px-4 pb-4 pt-10">

      <header class="md:flex justify-between mb-3">
        <h1 class="text-base font-bold">
          Tryout
        </h1>
        <div class="flex gap-2 flex-wrap">
          <div class="w-28">
            <ButtonComp :handleClick="() => { openFilter = !openFilter }" styleProp="borderless">
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
          <div class="w-52 relative z-[100]">
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
              <RouterLink to="/tryout/tambah" class="hover:font-bold transition-all mb-4 block">
                Jadwalkan Tryout
              </RouterLink>
              <a href="https://drive.google.com/drive/folders/108SRwn1Xt1rVV8aV_IR4ubA275A3-8CW" target="_blank"
                class="block hover:font-bold transition-all">
                Lihat kumpulan contoh soal
              </a>
            </div>
          </div>
        </div>
      </header>

      <div class=" mb-6">
        <div>Menampilkan: {{ filteredData.length }} data</div>
        <div v-for="valOfFilter in activeFilter">
          <div v-if="valOfFilter"
            class="rounded-full bg-cust-grey-lightest w-fit text-[10px] mt-2 py-2 px-6 flex gap-2 items-center">
            {{ valOfFilter }}
            <span @click="storeOpenLsidebar.toggleLSidebar" class="material-symbols-outlined text-[10px]">
              close
            </span>
          </div>

        </div>
      </div>

      <div class="overflow-auto">
        <table class="w-full">
          <thead class="border-b border-cust-grey-lighter/80 bg-cust-grey-lightest">
            <tr>
              <th class="w-[100px] px-3 py-5 font-semibold tracking-wide text-left flex items-center">Tanggal
              </th>
              <!-- <th class="w-[100px] px-3 py-5 font-semibold tracking-wide text-left">Jam</th> -->
              <th class="px-3 py-5 font-semibold tracking-wide text-left">Penyelenggara</th>
              <th class="px-3 py-5 font-semibold tracking-wide text-left">Platform Pengerjaan</th>
              <th class="w-[50px] px-3 py-5 font-semibold tracking-wide text-left flex items-center">Nilai
                <!-- <span
                  class="material-symbols-outlined  text-base">
                  arrow_downward
                </span> -->
              </th>
              <th class="w-24 px-3 py-5 font-semibold tracking-wide text-left">Status</th>
              <th class="w-16 px-3 py-5 font-semibold tracking-wide text-left text-white">:</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-cust-grey-lighter/80">
            <tr v-for="(val, index) in filteredData" :key="val">
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                {{ moment(val.startDate).format('D MMMM YYYY') }}
              </td>
              <!-- <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                13:00 WIB
              </td> -->
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                {{ val.organizer }}
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                {{ val.platform }}
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                {{ val.score }}
              </td>
              <td class="px-3 py-5 text-gray-700 whitespace-nowrap">
                <BadgeComp styleProp="fill" typeProp="success">
                  • {{ val.status }}
                </BadgeComp>
              </td>
              <td @click="" class="px-3 py-5 text-gray-700 whitespace-nowrap relative scroll-p-8">
                <label :id="index" @click="(e) => { handleClick(e) }" :for="index"
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
import { onMounted, ref, computed } from 'vue'

import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'
import ModalComp from '@/components/global/ModalComp.vue'
import BadgeComp from '@/components/global/BadgeComp.vue'
import { useLogout } from '@/stores/logoutModal'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/id';

const isLoading = ref(true)
const isButtonTambahTryoutClicked = ref(false)
const storeLogout = useLogout()
const isMoreVertClick = ref(null)
const openFilter = ref(false)

const activeFilter = ref({
  startDate: null,
  endDate: null,
  rangeScore: null,
  status: null,
})

const filteredData = computed(() => {
  let tempt = null

  if (activeFilter.value.startDate) {
    tempt = dummyData.value.filter((val) => {
      console.log(val)
      return moment(val.startDate) >= moment(activeFilter.value.startDate)
    })
  }

  if (activeFilter.value.rangeScore) {
    if (tempt == null) {
      tempt = dummyData.value.filter((val) => {
        return val.score >= activeFilter.value.rangeScore
      })
    } else {
      tempt = tempt.filter((val) => {
        return val.score >= activeFilter.value.rangeScore
      })
    }
  }

  if (activeFilter.value.status) {
    if (tempt == null) {
      tempt = dummyData.value.filter((val) => {
        return val.status == activeFilter.value.status
      })
    } else {
      tempt = tempt.filter((val) => {
        return val.status == activeFilter.value.status
      })
    }
  }

  if (tempt == null) {
    tempt = dummyData.value
  }

  return tempt

})
const dummyData = ref([
  {
    startDate: "2024-07-29T15:13:29.402Z",
    organizer: "pahamify",
    platform: "https://pahamify.com",
    status: "Selesai",
    score: 410
  },
  {
    startDate: "2024-06-29T15:13:29.402Z",
    organizer: "pahamify",
    platform: "https://pahamify.com",
    status: "Selesai",
    score: 540
  },
  {
    startDate: "2024-09-29T15:13:29.402Z",
    organizer: "pahamify",
    platform: "https://pahamify.com",
    status: "Mendatang",
    score: 430
  }
])
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