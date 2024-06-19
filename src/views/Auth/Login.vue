<template>
  <div class="w-[40%] bg-white flex justify-center items-center py-20">
    <main class="w-[65%] aspect-[4/6] flex flex-col justify-center">
      <h1 class="font-bold text-4xl">
        CA<span class="font-bold text-4xl text-cust-orange">MABA</span>
      </h1>
      <div class="leading-[150%] mt-4 font-semibold text-2xl">Gas Login!!!</div>
      <div class="leading-[150%]">Lihat perkembanganmu memperjuangkan PTN idaman</div>
      <div>
        <label for="" class="block mt-8 mb-1">Email</label>
        <input type="email" class="border rounded-md w-full p-3">
      </div>
      <div class="mb-8">
        <label for="" class="block mt-3 mb-1">Password</label>
        <input type="password" class="border rounded-md w-full p-2">
      </div>
      <ButtonComp styleProp="fill" typeProp="primary">
        Login
      </ButtonComp>
      <div class="text-center mt-5 block">
        Belum punya akun?  <RouterLink to="/register" class="text-cust-orange underline hover:font-bold">Daftar di sini</RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/global/ButtonComp.vue'
import { RouterLink } from 'vue-router'
</script>