<template>
  <div class="w-full flex-initial">
    <NavbarComp />
    <main class="p-4 xl:p-10">
      <div v-for="(val, index) in testJurusanQnAStore.question" class="flex gap-4 mb-12">
        <h2 :id="++index" class="text-2xl font-bold">
          {{ index }}.
        </h2>
        <div>
          <div class="xl:text-xl leading-[150%] mb-4">
            {{ val.questionText }}
          </div>
          <AnswerComp :inputName="`${index}`" inputValue="true" optionAlphabet="A">
            Iya
          </AnswerComp>
          <AnswerComp :inputName="`${index}`" inputValue="false" optionAlphabet="B">
            Tidak
          </AnswerComp>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import NavbarComp from '@/components/NavbarComp.vue'
import AnswerComp from '@/components/Tryout/Latihan/AnswerComp.vue';
import { useTestJurusanQnA } from '@/stores/testJurusanQnA'

const testJurusanQnAStore = useTestJurusanQnA()
testJurusanQnAStore.getTestJurusanQ()
testJurusanQnAStore.setInitA(testJurusanQnAStore.question.length)
</script>