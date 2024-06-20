<template>
  <div class="w-full flex-initial">
    <NavbarComp />
    <main class="p-4 xl:p-10">
      <div v-for="(val, index) in tryOutStore.tryoutQ" class="flex gap-4 mb-12">
        <h2 :id="++index" class="text-2xl font-bold">
          {{ index }}.
        </h2>
        <div>
          <div class="font-bold italic mb-2">
            (soal UTBK 2024)
          </div>
          <div class="xl:text-xl leading-[150%] mb-4">
            {{ val.questionText }}
          </div>
          <AnswerComp :inputName="`${index}`" :inputId="A" optionAlphabet="A">
            {{ val.optionA }}
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" :inputId="B" optionAlphabet="B">
            {{ val.optionB }}
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" :inputId="C" optionAlphabet="C">
            {{ val.optionC }}
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" :inputId="D" optionAlphabet="D">
            {{ val.optionD }}
          </AnswerComp>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import AnswerComp from '@/components/Tryout/Latihan/AnswerComp.vue'
import { useTryoutQnA } from '@/stores/tryoutQnA'
const tryOutStore = useTryoutQnA()
tryOutStore.getTryoutQ()
tryOutStore.setInitA(tryOutStore.tryoutQ.length)
</script>