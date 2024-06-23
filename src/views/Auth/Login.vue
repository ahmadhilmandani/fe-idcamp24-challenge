<template>
  <div class="w-full xl:w-[40%] bg-white flex justify-center items-center py-20">
    <loading :active="isLoading" opacity="0.85" color="#DD761C" background-color="#1C1C1C" :lock-scroll="true"
    :is-full-page="true" />
    <main class="w-[80%] xl:w-[65%] aspect-[4/6] flex flex-col justify-center">
      <h1 class="font-bold text-4xl">
        CA<span class="font-bold text-4xl text-cust-orange">MABA</span>
      </h1>
      <div class="leading-[150%] mt-4 font-semibold text-2xl">Gas Login!!!</div>
      <div class="leading-[150%]">Lihat perkembanganmu memperjuangkan PTN idaman</div>
      <div>
        <label for="" class="block mt-8 mb-1">Email</label>
        <input type="email" v-model="emailInput" class="border rounded-md w-full p-3">
      </div>
      <div class="mb-8">
        <label for="" class="block mt-3 mb-1">Password</label>
        <input type="password" v-model="passwordInput" class="border rounded-md w-full p-2">
      </div>
      <ButtonComp :handleClick="handleLogin" styleProp="fill" typeProp="primary">
        Login
      </ButtonComp>
      <div class="text-center mt-5 block">
        Belum punya akun? <RouterLink to="/register" class="text-cust-orange underline hover:font-bold">Daftar di sini
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import ButtonComp from '@/components/global/ButtonComp.vue'
import axios from 'axios';
import { RouterLink, useRouter } from 'vue-router'
import { ref } from 'vue'
import Loading from 'vue-loading-overlay'

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// toast("Hello! Wow so easy!", {
//   "theme": "auto",
//   "type": "default",
//   "dangerouslyHTMLString": true
// })

const isLoading = ref(false)
const router = useRouter()
const emailInput = ref(null)
const passwordInput = ref(null)


function handleLogin() {
  isLoading.value = true
  axios.post('http://13.212.182.128:3000/auth/login',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        "email": emailInput.value,
        "password": passwordInput.value
      }
    }
  ).then((response) => {
    toast.success("Pendaftaran berhasil, silahkan login!")
    router.replace('/dashboard')
  }).catch((error) => {
    toast.error("Pendaftaran belum berhasil, coba lagi...")
  }).finally(() => {
    isLoading.value = false
  })

}
</script>