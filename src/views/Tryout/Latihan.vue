<template>
  <div class="w-full flex-initial">
    <NavbarComp />
    <main class="p-10">
      <div v-for="val in testLoop" class="flex gap-4 mb-12">
        <h2 :id="val" class="text-2xl font-bold">
          {{ val }}.
        </h2>
        <div>
          <div class="font-bold italic mb-2">
            (soal UTBK 2024)
          </div>
          <div class="text-xl leading-[150%] mb-4">
            “Dani dipromosikan untuk mendapat posisi baru di perusahaan X
            sebagai kepala Divisi Pemasaran atau Sekretaris Direksi. Ternyata
            Budi terpilih sebagai Sekretaris Direksi di perusahaan X sehingga
            posisi tersebut telah terisi.”

            Simpulan yang paling tepat adalah…
          </div>
          <AnswerComp />
          <AnswerComp />
          <AnswerComp />
          <AnswerComp />
          <AnswerComp />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavbarComp from '@/components/NavbarComp.vue'
import AnswerComp from '@/components/Tryout/Latihan/AnswerComp.vue';

const testLoop = ref(30)
</script>