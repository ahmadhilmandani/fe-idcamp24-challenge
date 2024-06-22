<template>
  <div class="w-full min-h-screen block xl:flex justify-between">
    <div class="w-[60%] bg-cust-orange hidden xl:flex flex-col justify-between items-center py-36">
      <h1 v-if="route.name === 'login'" class="text-6xl text-white font-bold w-[80%] text-center leading-[170%] capitalize">
        aslinya <i class="text-6xl text-white font-bold">Mageran</i>, Tapi Demi PTN impian, kita gaskann!
      </h1>
      <h1 v-else class="text-5xl text-white font-bold w-[80%] text-center leading-[170%] capitalize">
        Kuliah itu capek, tapi kalau capeknya di PTN dan jurusan Impian... ya mau lahh! 
      </h1>

      <div>
        <div class="text-center text-white">
          Made with ☕ 
          Copyright © 2024
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>