<template>
  <div>
    <NavbarComp />
    <main class="w-full min-h-screen bg-cust-orange-lightest flex justify-center items-center px-16">
      <div class="max-w-[600px] w-full flex flex-col items-center">
        <h1 class="text-[40px] text-center">
          Wah lu Tipikal Orang yang...
        </h1>

        <div class="bg-white shadow-lg rounded-xl px-6 py-8 mt-10 mb-20 max-w-[320px] w-full border">
          <div v-for="finalResult in storeTestJurusanQnA.finalResult">
            <h1>
              {{ storeTestJurusanQnA.arrIntelegence[finalResult].type }}
            </h1>

            <h2 class="text-cust-orange/80 mt-3 mb-1">
              Jurusan yang cocok tuh..
            </h2>
            <ul class="list-inside list-disc">
              <li v-for="jurusan in storeTestJurusanQnA.arrIntelegence[finalResult].jurusan">{{ jurusan }}</li>
            </ul>
          </div>

        </div>

        <div class="flex gap-4">
          <div class="w-fit">
            <ButtonComp :handle-click="() => {
              router.replace('/')
            }" type-prop="secondary" style-prop="outline">
              <div class="py-2 text-[16px] text-cust-orange">
                Balik ke Beranda!
              </div>
            </ButtonComp>
          </div>
          <div class="w-fit">
            <ButtonComp type-prop="primary" style-prop="fill">
              <div class="py-2 text-[16px] text-white">
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