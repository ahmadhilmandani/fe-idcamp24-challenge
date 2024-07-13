<template>
  <div>
    <NavbarComp />
    <main class="w-full min-h-screen bg-cust-orange-lightest flex justify-center items-center px-4 xl:px-16 py-32">
      <div class="max-w-[600px] w-full flex flex-col items-center">
        <h1 class=" text-center">
          Catatan Penting Bang!
        </h1>

        <p class="text-center  mt-8">
          Web ini dibagnun sebagai pendukung keputusan. Hasil dari rekomendasi tidak untuk dijadikan pedoman utama dalam memilih
          jurusan
        </p>

        <div class="flex gap-4 mt-6 mb-14">
          <input v-model="isNoted" type="checkbox" name="isNoted" id="isNoted" class="w-5 accent-cust-blue">
          <label for="isNoted" class="">Oke, noted!</label>
        </div>

        <div class="w-fit">
          <ButtonComp :handle-click="() => {
            if (isNoted) {
              router.replace('/test-jurusan/pengerjaan')
            }
          }" :type-prop="isNoted ? 'primary' : 'muted'" style-prop="fill">
            <div class="py-2 " :class="isNoted ? 'text-white' : 'text-cust-grey cursor-not-allowed'">
              {{ !isNoted ? 'baca dulu terus kasih centang kalau paham' : 'Gas Mulai Testnya!' }}
            </div>
          </ButtonComp>
        </div>

        <small class=" mt-20">
          Mau tau behind the scene web ini ngerekomenin jurusan? <RouterLink to="/test-jurusan/behind-the-scene"
            class="text-cust-orange underline">
            Klik sini ya!</RouterLink>
        </small>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'

import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const isNoted = ref(false)
const router = useRouter()
</script>