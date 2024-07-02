<template>
  <div>
    <NavbarComp />
    <main class="w-full min-h-screen bg-cust-orange-lightest flex justify-center items-center px-4 xl:px-16 py-32">
      <div class="max-w-[600px] w-full flex flex-col items-center bg-red-">
        <h1 class="text-center">
          Wah lu Tipikal Orang yang...
        </h1>

        <div ref="resultCard" class="bg-white shadow-lg rounded-xl px-6 py-8 mt-10 mb-20 w-full border">
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

        <div class="max-w-[500px] w-full xl:flex gap-4 justify-center">
          <a href="/"
            class="xl:w-fit border border-cust-orange text-cust-orange hover:bg-cust-orange-lighter flex justify-center items-center rounded-xl gap-2 w-full text-center px-6 py-4 font-semibold">
            Balik ke Beranda!
          </a>
          <a :href="downloadedImg" download="Hasil Rekomendasi Jurusan | CAMABA.jpg" class="block w-full xl:w-fit mt-5 xl:mt-0">
            <ButtonComp type-prop="primary" style-prop="fill">
              <div class="py-2 text-white">
                Simpan Hasil Test!
              </div>
            </ButtonComp>
          </a>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import html2canvas from 'html2canvas'

import NavbarComp from '@/components/NavbarComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'

import { useRouter } from 'vue-router'

import { useTestJurusanQnA } from '@/stores/testJurusanQnA'

const storeTestJurusanQnA = useTestJurusanQnA()

let resultCard = ref(null)
let downloadedImg = ref(null)

const handleDonwloadImg = () => {
  html2canvas(resultCard.value).then(function (canvas) {
    downloadedImg.value = canvas.toDataURL("image/jpg").replace(/"data:image\/jpg"/, "data:application\/octet-stream");
  })
}

onMounted(() => {
  handleDonwloadImg()
})


for (let index = 0; index < storeTestJurusanQnA.finalResult.length; index++) {
  console.log(storeTestJurusanQnA.arrIntelegence[storeTestJurusanQnA.finalResult[index]])
}


const router = useRouter()
</script>