<template>
  <div class="w-[40%] bg-white flex justify-center items-center py-20">
    <main class="w-[65%] aspect-[4/6] flex flex-col justify-center">

      <h1 class="font-bold text-4xl">
        CA<span class="font-bold text-4xl text-cust-orange">MABA</span>
      </h1>

      <div class="leading-[150%] mt-4 font-semibold text-2xl">Register Sekarang!!!</div>
      <div class="leading-[150%]">Isi form dibawah ini yaa!</div>

      <div class="mt-8">
        <label for="" class="block mb-1">Nama</label>
        <input type="text" class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-3">
        <label for="" class="block mb-1">Alumni SMA</label>
        <input type="text" class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-3">
        <label for="" class="block mb-2">Gender</label>
        <div class="flex gap-10">
          <div class="mb-1 flex items-center gap-2">
            <input type="radio" id="laki-laki" class="accent-cust-orange" name="gender" value="laki-laki">
            <label for="laki-laki">Laki-laki</label>
          </div>
          <div class="flex items-center gap-2">
            <input type="radio" id="perempuan" class="accent-cust-orange" name="gender" value="perempuan">
            <label for="perempuan">Perempuan</label>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <label for="" class="block mb-1">Tanggal UTBK</label>
        <input type="date" class="block border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-6 flex items-center gap-2 flex-wrap">
        <label for="">PTN impian</label>
        <select id="cars" name="cars" class="grow border p-3 rounded-md focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div class="mt-3">
        <label for="" class="block mb-1">Email</label>
        <input type="email" class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-3">
        <label for="" class="block mb-1">Password</label>
        <input type="password" class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <div class="mt-3 mb-8">
        <label for="" class="bloc mb-1">Ulangi Password</label>
        <input type="password" class="border rounded-md w-full p-3 focus:outline-none focus:border-cust-orange focus:ring-cust-orange focus:ring-1">
      </div>

      <ButtonComp styleProp="fill" typeProp="primary">
        Login
      </ButtonComp>

      <div class="text-center mt-5 block">
        Udah punya akun? <RouterLink to="/login" class="text-cust-orange underline hover:font-bold">Login di sini
        </RouterLink>
      </div>

    </main>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/global/ButtonComp.vue'
import { RouterLink } from 'vue-router'
</script>