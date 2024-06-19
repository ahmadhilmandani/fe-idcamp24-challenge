<template>
  <div class="w-full flex-initial">
    <NavbarComp />
    <main class="p-4 xl:p-10">
      <div class="border-b border-cust-grey-lighter py-5 mb-6">
        <div @click="showMoreClicked = !showMoreClicked" class="flex justify-between hover:cursor-pointer hover:text-cust-black">
          <div class="flex gap-2">
            <Strong>Hasil Test Jurusan</Strong>
            <div>tgl. 18 Mei 2024</div>
          </div>
          <div class="flex items-center">
            <small v-if="showMoreClicked">
              show less
            </small>
            <small v-else="showMoreClicked">
              show more
            </small>
            <span class="material-symbols-outlined transition-all" :class="showMoreClicked ? 'rotate-90': ''">
              chevron_right
            </span>
          </div>
        </div>
        <div class="flex justify-between gap-5 transition-all mt-3 overflow-hidden" :class="showMoreClicked ? 'w-[100%] h-auto' : 'w-0 h-0'">
          <div class="w-[33%] p-5 rounded-xl border border-cust-grey-lighter">
            <div class="w-14 aspect-square flex justify-center items-center bg-amber-300 rounded-full text-xl font-bold">
              1.
            </div>
            <div class="text-xl mt-3">
              65% Informatika - ITS
            </div>
          </div>
          <div class="w-[33%] p-5 rounded-xl border border-cust-grey-lighter">
            <div class="w-14 aspect-square flex justify-center items-center bg-neutral-300 rounded-full text-xl font-bold">
              2.
            </div>
            <div class="text-xl mt-3">
              33% Sistem Informasi - ITS
            </div>
          </div>
          <div class="w-[33%] p-5 rounded-xl border border-cust-grey-lighter">
            <div class="w-14 aspect-square flex justify-center items-center bg-amber-900 rounded-full text-white text-xl font-bold">
              3.
            </div>
            <div class="text-xl mt-3">
              5% Informatika - Universitas Brawijaya
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavbarComp from '@/components/NavbarComp.vue'

const showMoreClicked = ref(false)
</script>