<template>
  <main class="w-full min-h-screen flex justify-center items-center">
    <div class="w-[500px] p-24 aspect-video flex justify-center items-center flex-col gap-4">
      <h1 class="font-bold text-5xl">404 🥲</h1>
      <div>waduh... ini dimanaaa??</div>
      <ButtonComp :handleClick="goBackToMainPage" styleProp="fill" typeProp="primary">
        Balik skuy!
      </ButtonComp>
    </div>
  </main>
</template>

<script setup>
import ButtonComp from '@/components/global/ButtonComp.vue'
import { useRouter  } from 'vue-router'

const router = useRouter()
function goBackToMainPage() {
  router.push({ path: '/' })
}
</script>