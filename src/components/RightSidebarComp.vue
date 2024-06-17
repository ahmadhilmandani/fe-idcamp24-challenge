<template>

  <aside class="h-screen border-l border-cust-grey-lighter sticky right-0 top-0 bottom-0 bg-white  transition-all z-[100000] flex-none overflow-hidden"
    :class="storeOpenLsidebar.openLSidebar ? 'w-[240px] p-4' : 'w-0 p-0'">


    <div v-if="route.name === 'tryout-latihan'" class="flex justify-center items-center w-full h-full p-4">
      <div class="bg-cust-grey-lightest border border-cust-grey-lighter w-full px-4 py-12 rounded-lg">
        <div class="text-6xl text-center">
          100
        </div>
        <div class="text-base text-center mt-2">
          Menit
        </div>
        <div class="text-6xl text-center mt-6">
          60
        </div>
        <div class="text-base text-center mt-2">
          Detik
        </div>
      </div>
    </div>


    <div v-else >
      <h2 class="font-bold mb-4">
        Profil Saya
      </h2>
      <div class="w-[80px] aspect-square mx-auto bg-center bg-no-repeat bg-cover rounded-full mb-4"
        :style="`background-image: url(${saya})`">
      </div>
      <h3 class="font-bold text-center text-base">Ahmad Hilman Dani</h3>
      <div class="text-cust-grey text-center mb-6">MABA UAE 2025</div>

      <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined">
            mail
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Email</small>
          <div class="text-wrap break-words">ahmadhilmandani@gmail.com</div>
        </div>
      </div>


      <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined">
            wc
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Gender</small>
          <div class="text-wrap break-words">Laki-laki</div>
        </div>
      </div>
      <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined">
            school
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Alumni SMA</small>
          <div class="text-wrap break-words">SMAN 3 PAMEKASAN</div>
        </div>
      </div>
      <div class="flex gap-2 mb-10">
        <div>
          <span class="material-symbols-outlined">
            calendar_month
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Tanggal SNBT/UTBK</small>
          <div class="text-wrap break-words">21 Mei 2025</div>
        </div>
      </div>

      <h2 class="font-bold mb-4 text-center">
        2025 jadi Maba
      </h2>
      <div class="w-[80px] aspect-square mx-auto bg-center bg-no-repeat bg-cover rounded-full mb-4"
        :style="`background-image: url(${its})`"></div>
      <div class="text-cust-grey text-center mb-6 text-[10px]">Institur Teknologi Sepuluh Nopember</div>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import saya from '../assets/saya1.png'
import its from '../assets/its.png'

import { useOpenLSidebar } from '@/stores/openLSidebar';
const storeOpenLsidebar = useOpenLSidebar()

const route = useRoute()
const testLoop = ref(30)
</script>