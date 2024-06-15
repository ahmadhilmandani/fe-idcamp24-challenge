<template>
  <nav class="w-full flex justify-between items-center border-b border-cust-grey-lighter p-4">
    <div class="flex gap-2 items-center">
      <div @click="storeOpenRsidebar.toggleRSidebar" class="material-symbols-outlined text-[20px] transition-all hover:text-cust-blue hover:cursor-pointer">
        dock_to_right
      </div>
      <RouterLink to="/" class="text-cust-grey">
        Dashboard
      </RouterLink>
    </div>
    <div class="flex gap-2 items-center">
      <RouterLink class="material-symbols-outlined text-[20px]">
        light_mode
      </RouterLink>
      <RouterLink class="material-symbols-outlined text-[20px]">
        settings
      </RouterLink>
      <div @click="storeOpenLsidebar.toggleLSidebar" class="material-symbols-outlined text-[20px] transition-all hover:text-cust-blue hover:cursor-pointer">
        dock_to_left
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useOpenLSidebar } from '@/stores/openLSidebar'

const storeOpenRsidebar = useOpenRSidebar()
const storeOpenLsidebar = useOpenLSidebar()
</script>