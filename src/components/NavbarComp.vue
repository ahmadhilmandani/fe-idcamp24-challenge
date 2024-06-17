<template>
  <nav class="w-full flex justify-between items-center border-b border-cust-grey-lighter p-4">
    <div class="flex gap-2 items-center">
      <div @click="storeOpenRsidebar.toggleRSidebar"
        class="material-symbols-outlined transition-all hover:text-cust-blue hover:cursor-pointer text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        dock_to_right
      </div>
      <RouterLink to="/" class="text-cust-grey">
        Dashboard
      </RouterLink>
    </div>
    <div class="flex gap-2 items-center">
      <div v-if="route.name === 'tryout-latihan'" class="xl:hidden block lg:text-xl">
        100m 60d
      </div>
      <RouterLink class="material-symbols-outlined text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        light_mode
      </RouterLink>
      <RouterLink v-if="route.name !== 'tryout-latihan'" class="material-symbols-outlined text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        settings
      </RouterLink>
      <div @click="storeOpenLsidebar.toggleLSidebar"
        class="material-symbols-outlined transition-all hover:text-cust-blue hover:cursor-pointer text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        dock_to_left
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useOpenLSidebar } from '@/stores/openLSidebar'


const route = useRoute()
const storeOpenRsidebar = useOpenRSidebar()
const storeOpenLsidebar = useOpenLSidebar()
</script>