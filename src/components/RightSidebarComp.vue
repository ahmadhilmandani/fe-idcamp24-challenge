<template>
  <aside
    class="h-screen flex flex-col justify-between flex-none sticky top-0 bottom-0 left-0 transition-all p-4 border-r border-cust-grey-lighter bg-white overflow-hidden"
       :class="storeOpenRsidebar.openRSidebar ? 'w-[240px] p-4' : 'w-0 p-0'"
    >

    <div class="overflow-auto">
      <h1 class="font-bold text-2xl mb-6">
        CA<span class="font-bold text-2xl text-cust-orange">MABA</span>
      </h1>

      <div v-if="route.name === 'tryout-latihan'" class="flex gap-4 flex-wrap justify-center">
        <a :href="`#${value}`" v-for="(value) in testLoop" :key="value"
          class="rounded-md border border-cust-grey-lighter w-[40px] aspect-square flex justify-center items-center text-cust-black">
          {{ value }}
        </a>
        <div class="mt-5 w-full">
        <ButtonComp :handleClick="() => { storeLogout.openModal() }"
          styleProp="fill" typeProp="primary">
            Selesai
          </ButtonComp>
        </div>
      </div>
      <ul v-else>
        <RouterLink to="/dashboard" activeClass="bg-cust-grey-lighter"
          class="flex gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined">
            show_chart
          </span>
          Dashboard
        </RouterLink>
        <RouterLink to="/tryout" activeClass="bg-cust-grey-lighter"
          class="flex gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined">
            category
          </span>
          TryOut
        </RouterLink>

        <li @click="isTestJurusanClicked = !isTestJurusanClicked"
          class="flex gap-2 items-center mb-3 py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined transition-all" :class="isTestJurusanClicked && 'rotate-90'">
            chevron_right
          </span>
          <span class="material-symbols-outlined">
            star
          </span>
          <div>
            Test Jurusan
          </div>
        </li>

        <!-- only show if test jurusan is clicked -->
        <li v-if="isTestJurusanClicked">
          <RouterLink activeClass="bg-cust-grey-lighter" to="/test-jurusan/kerjakan"
            class="flex w-full gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
            <div class="w-[24px] text-center text-2xl">
              •
            </div>
            <div>
              Kerjakan
            </div>
          </RouterLink>
        </li>

        <li v-if="isTestJurusanClicked">
          <RouterLink activeClass="bg-cust-grey-lighter" to="/test-jurusan/hasil"
            class="flex w-full gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
            <div class="w-[24px] text-center text-2xl">
              •
            </div>
            <div>
              Hasil
            </div>
          </RouterLink>
        </li>

      </ul>
    </div>

    <ButtonComp v-if="route.name !== 'tryout-latihan'" :handleClick="() => { storeLogout.openModal() }" styleProp="fill"
      typeProp="danger">
      Keluar
    </ButtonComp>

  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ButtonComp from './global/ButtonComp.vue'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useLogout } from '@/stores/logoutModal'

const isTestJurusanClicked = ref(false)
const storeOpenRsidebar = useOpenRSidebar()
const storeLogout = useLogout()

const route = useRoute()
const testLoop = ref(30)
</script>