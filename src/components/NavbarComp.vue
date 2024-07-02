<template>
  <nav v-if="route.name === 'landing-page' || route.name === 'test-jurusan-hasil'"
    class="w-full flex justify-between items-center px-16 py-6 fixed top-0 left-0 right-0 bg-cust-orange-lightest">
    <h1 class="font-bold text-3xl">
      CA<span class="font-bold text-3xl text-cust-orange">MABA</span>
    </h1>

    <a class="block w-fit" href="https://jurnal.mdp.ac.id/index.php/jatisi/article/download/1069/390/" target="_blank">
      <ButtonComp style-prop="outline" type-prop="secondary">
        <div class="text-[15px] text-cust-orange font-bold px-2 py-1">
          Jurnal referensi
        </div>
      </ButtonComp>
    </a>

  </nav>

  <nav v-else class="w-full flex justify-between items-center border-b border-cust-grey-lighter p-4">
    <div class="flex gap-2 items-center">
      <div @click="storeOpenRsidebar.toggleRSidebar"
        class="material-symbols-outlined transition-all hover:text-cust-blue hover:cursor-pointer text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        dock_to_right
      </div>
      <RouterLink to="/" class="text-cust-grey">
        Pengerjaan Test Rekomendasi Jurusan
      </RouterLink>
    </div>
    <div class="flex gap-2 items-center">
      <div class="xl:hidden block lg:text-xl">
        100m 60d
      </div>
      <RouterLink class="material-symbols-outlined text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        light_mode
      </RouterLink>
      <div @click="storeOpenLsidebar.toggleLSidebar"
        class="material-symbols-outlined transition-all hover:text-cust-blue hover:cursor-pointer text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        dock_to_left
      </div>
    </div>
  </nav>
</template>

<script setup>
import ButtonComp from './global/ButtonComp.vue'
import { RouterLink } from 'vue-router'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useOpenLSidebar } from '@/stores/openLSidebar'
import { useRoute } from 'vue-router'

const route = useRoute()
const storeOpenRsidebar = useOpenRSidebar()
const storeOpenLsidebar = useOpenLSidebar()
</script>