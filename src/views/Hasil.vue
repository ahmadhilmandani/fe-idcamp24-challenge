<template>
  <div>
    <NavbarComp />
    <main class="w-full min-h-screen bg-cust-orange-lightest flex justify-center items-center px-4 xl:px-16 py-32">
      <div class="max-w-[600px] w-full flex flex-col items-center bg-red-">
        <h1 class="text-center">
          Wah lu Tipikal Orang yang...
        </h1>

        <div class="bg-white shadow-lg rounded-xl px-6 py-8 mt-10 mb-20 w-full border">
          <div v-for="finalResult in storeTestJurusanQnA.finalResult" class="mb-6">
            <h2>
              {{ storeTestJurusanQnA.arrIntelegence[finalResult].type }}
            </h2>

            <h3 class="text-cust-orange/80 mt-2 mb-1">
              Jurusan yang cocok tuh..
            </h3>
            <ul class="list-inside list-disc">
              <li v-for="jurusan in storeTestJurusanQnA.arrIntelegence[finalResult].jurusan">{{ jurusan }}</li>
            </ul>
          </div>

        </div>

        <div class="max-w-[500pxx] w-full xl:flex gap-4 justify-center">
          <div class=" w-full xl:w-fit">
            <ButtonComp :handle-click="() => {
              router.replace('/')
            }" type-prop="secondary" style-prop="outline">
              <div class="py-2 text-cust-orange">
                Balik ke Beranda!
              </div>
            </ButtonComp>
          </div>
          <div class=" w-full xl:w-fit mt-5 xl:mt-0">
            <ButtonComp type-prop="primary" style-prop="fill">
              <div class="py-2 text-white">
                Simpan Hasil Test!
              </div>
            </ButtonComp>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'

import { useRouter } from 'vue-router'

import { useTestJurusanQnA } from '@/stores/testJurusanQnA'

const storeTestJurusanQnA = useTestJurusanQnA()


for (let index = 0; index < storeTestJurusanQnA.finalResult.length; index++) {
  console.log(storeTestJurusanQnA.arrIntelegence[storeTestJurusanQnA.finalResult[index]])
}


const router = useRouter()
</script>