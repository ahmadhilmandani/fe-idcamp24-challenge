<template>

  <aside
    class="h-screen xl:flex flex-col justify-between flex-none overflow-x-hidden bg-white border-l border-cust-grey-lighter  transition-all z-[100000000]"
    :class="storeOpenLsidebar.openLSidebar ? 'xl:w-[240px] p-4 fixed xl:sticky top-0 bottom-0 left-0 right-0 xl:right-auto flex' : 'w-0 p-0 hidden xl:flex'">


    <div
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

  </aside>
</template>

<script setup>
import { useOpenLSidebar } from '@/stores/openLSidebar'

const storeOpenLsidebar = useOpenLSidebar()
</script>