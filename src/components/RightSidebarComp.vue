<template>

  <aside
    class="h-screen xl:flex flex-col justify-between flex-none overflow-x-hidden bg-white border-l border-cust-grey-lighter  transition-all z-[100000000]"
    :class="storeOpenLsidebar.openLSidebar ? 'xl:w-[240px] p-4 fixed xl:sticky top-0 bottom-0 left-0 right-0 xl:right-auto flex' : 'w-0 p-0 hidden xl:flex'">


    <div v-if="route.name === 'tryout-latihan' || route.name === 'test-jurusan-pengerjaan'"
      class="flex justify-center items-center w-full h-full p-4 relative">
      <span @click="storeOpenLsidebar.toggleLSidebar"
        class="material-symbols-outlined block xl:hidden hover:cursor-pointer text-cust-redish absolute top-0 right-0 text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        close
      </span>
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


    <div v-else>
      <header class="flex justify-between items-center mb-6">

        <h2 class="font-bold mb-4">
          Profil Saya
        </h2>
        <span @click="storeOpenLsidebar.toggleLSidebar"
          class="material-symbols-outlined block xl:hidden hover:cursor-pointer text-cust-redish text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
          close
        </span>
      </header>
      <div class="w-[80px] sm:max-xl:w-[200px] aspect-square mx-auto bg-center bg-no-repeat bg-cover rounded-full mb-4"
        :style="`background-image: url(${default_profile})`">
      </div>
      <h3 class="font-bold text-center">{{ name }}</h3>
      <div class="text-cust-grey text-center mb-6">{{ originSchool ? `CAMABA ${originSchool}` : '' }}</div>

      <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            mail
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Email</small>
          <div class="text-wrap break-words">{{ email }}</div>
        </div>
      </div>


      <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            wc
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Gender</small>
          <div class="text-wrap break-words">{{ gender ? gender : 'Belum diisi' }}</div>
        </div>
      </div>
      <!-- <div class="flex gap-2 mb-6">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            school
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Alumni SMA</small>
          <div class="text-wrap break-words">SMAN 3 PAMEKASAN</div>
        </div>
      </div> -->
      <div class="flex gap-2 mb-10">
        <div>
          <span class="material-symbols-outlined text-[20px] lg:text-3xl xl:text-[20px]">
            calendar_month
          </span>
        </div>
        <div class="basis-[80%] grow">
          <small class="text-cust-grey">Tanggal SNBT/UTBK</small>
          <div class="text-wrap break-words">{{ utbkDate ? utbkDate : 'belum diisi' }}</div>
        </div>
      </div>

      <div v-if="originSchool">
        <h2 class="font-bold mb-4 text-center">
          2025 jadi Maba
        </h2>
        <h2 class="italic font-bold text-4xl text-center leading-[150%]">
          {{ originSchool }}
        </h2>
      </div>

      <div v-else>
        <h2 class="font-bold text-center">
          Yuk Lengkapi profil anda
        </h2>
        <div class="mt-2 w-full">
          <ButtonComp :handleClick="() => { router.push(`/profile/edit/${userId}`) }" styleProp="fill" typeProp="secondary">
            Lengkapi profil
          </ButtonComp>
        </div>
        <!-- <div class="text-cust-grey text-center mb-6">profil yang dilengkapi = </div> -->
      </div>
      <!-- <div class="w-[80px] sm:max-xl:w-[200px] aspect-square mx-auto bg-center bg-no-repeat bg-cover rounded-full mb-4"
        :style="`background-image: url(${its})`"></div>
      <div class="text-cust-grey text-center mb-6 text-[10px]">Institur Teknologi Sepuluh Nopember</div> -->
    </div>
  </aside>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import ButtonComp from './global/ButtonComp.vue'
import axios from 'axios'
import { useOpenLSidebar } from '@/stores/openLSidebar'
import default_profile from '../assets/default_profile.svg'

const storeOpenLsidebar = useOpenLSidebar()
const route = useRoute()
const router = useRouter()

const name = ref('')
const email = ref('')
const gender = ref('')
const originSchool = ref('')
const utbkDate = ref('')
const userId = ref(localStorage.getItem('userId'))


onMounted(() => {
  axios.get(`http://13.212.182.128:3000/user/${userId.value}`,
    {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  ).then((response) => {
    console.log(response)
    console.log(response.data)
    name.value = response.data.data.name
    email.value = response.data.data.email
    gender.value = response.data.data.gender
    originSchool.value = response.data.data.originSchool
    utbkDate.value = response.data.data.utbkDate

  }).catch((error) => {
    console.log(error)
  })
})
</script>