<template>
  <div>
    <NavbarComp />
    <main class="w-full min-h-screen bg-cust-orange-lightest flex justify-center items-center px-16">
      <div class="max-w-[600px] w-full flex flex-col pt-32 mb-12">
        <h1 class="text-[48px] text-center">
          Behind The Scene
        </h1>

        <div class="mt-5">
          <h2 class="font-bold mb-2">
            Deskripsi
          </h2>
          <p>
            Web ini diperuntukan membantu pengguna menemukan jurusan kuliah yang paling
            sesuai. Jadi kalau bingung mau masuk jurusan apa, sabi nih dicoba wkwk
          </p>
        </div>
        <div class="mt-5">
          <h2 class="font-bold mb-2">
            Cara kerja
          </h2>
          <p>
            Nanti ada beberapa pernyataan, nah dari pertanyaan tersebut jawabannya ada 4, lo pilih satu aja yang
            paling
            sesuai. 4 jawaban tersebut adalah:
          </p>
          <ul class="list-decimal list-inside">
            <li>
              Setuju
            </li>
            <li>
              Kurang Setuju
            </li>
            <li>
              Tidak Setuju
            </li>
            <li>
              Sangat Tidak Setuju
            </li>
          </ul>
          <p class="mt-3 mb-3">Dari jawaban tersebut, nanti akan diketahui jurusan yang sesai</p>
        </div>
        <div class="mt-5">
          <h2 class="font-bold mb-2">
            Rujukan pembuatan test bisa dilihat <a
              href="https://d1wqtxts1xzle7.cloudfront.net/77867329/154-libre.pdf?1641083684=&response-content-disposition=inline%3B+filename%3DSistem_Pakar_Untuk_Menentukan_Jurusan_Ku.pdf&Expires=1719246271&Signature=bIxfoxQpPsjYh2~tksGFrMcTgtDvEbGbZIf7sKWPHFb0bvuemo--hpwdd3hKJamJfx8SuKMm7JbDUK-9-Yg-SzbO~oyCGSlLfMLRET0R9U52-nGjBOkeJCPrZUmYVO--HMExOhgxXijplfv-TVkpJTodDQU1PJf~jiKR267Uc43Krve3UM-ZkisZEGhGBJHgbNaV4fUgo5nE3SkWw3xzam8sD3gbg0ox1qnrIe2xcIQ~cKSUAhBdoLK~xkNI6ohHk-pH2ZxIIlX2cfy6brPby1rQXmAYl3E1WhaIim-lYovOwzENxHFzmkB613r7F2cn3MLCNCyBc93Gi1IFZvwnyw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"
              target="_blank" class="underline text-cust-blue">di sini</a>
          </h2>
        </div>
        <div class="mt-10">
          <h2 class="font-bold mb-2 text-cust-redish">
            Catatan Penting!
          </h2>
          <p>
            Fitur ini <strong> dibangun sebagai pendukung keputusan. Hasil dari test ini tidak untuk pedoman utama dalam
              memilih jurusan dan PTN. </strong>
          </p>
        </div>
        <div class="flex gap-4 mt-6 mb-14">
          <input v-model="isNoted" type="checkbox" name="isNoted" id="isNoted" class="w-5 accent-cust-blue">
          <label for="isNoted">Oke, noted!</label>
        </div>

        <div class="w-full">
          <ButtonComp :handle-click="() => {
            if (isNoted) {
              router.replace('/test-jurusan/pengerjaan')
            }
          }" :type-prop="isNoted ? 'primary' : 'muted'" style-prop="fill">
            <div class="py-2 text-[16px]" :class="isNoted ? 'text-white' : 'text-cust-grey cursor-not-allowed'">
              {{ !isNoted ? 'baca dulu terus kasih centang kalau paham' : 'Gas Mulai Testnya!' }}
            </div>
          </ButtonComp>
        </div>
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