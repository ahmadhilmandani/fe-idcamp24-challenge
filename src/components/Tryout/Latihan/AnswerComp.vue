<template>
  <div class="flex mb-8 items-center group">
    <input @click="(e) => { handleOnClick(e) }" type="radio" :name="inputName" :id="`${optionAlphabet}-${inputName}`"
      :value="inputValue" class="hidden">
    <label :for="`${optionAlphabet}-${inputName}`"
      class="w-[40px] xl:w-[40px] sm:w-[80px] shrink-0 xl:text-xl rounded-md border aspect-square flex justify-center items-center transition-all"
      :class="qnaStore.answer[inputName - 1] == inputValue ? 'bg-cust-blue-lighter border-cust-blue text-cust-blue font-bold' : 'border-cust-grey-lighter text-cust-black group-hover:bg-cust-grey-lighter group-hover:font-bold group-hover:cursor-pointer '">
      {{ optionAlphabet }}
    </label>
    <label :for="`${optionAlphabet}-${inputName}`"
      class="block xl:text-xl pl-4 transition-all" :class="qnaStore.answer[inputName - 1] == inputValue ? '': 'group-hover:font-bold group-hover:cursor-pointer'">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
import { useTryoutQnA } from '@/stores/tryoutQnA'
import { useTestJurusanQnA } from '@/stores/testJurusanQnA'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
const route = useRoute()

defineProps(
  {
    inputName: String,
    optionAlphabet: String,
    inputValue: [String, Boolean]
  }
)

let qnaStore

onBeforeMount(() => {
  if (route.name === 'tryout-latihan') {
    qnaStore = useTryoutQnA()
  } else if (route.name === 'test-jurusan-pengerjaan') {
    qnaStore = useTestJurusanQnA()
  }
})



function handleOnClick(e) {
  qnaStore.setAnswer((e.target.name - 1), e.target.value)
}

</script>