<template>
  <div class="flex mb-8 items-center group">
    <input @click="(e) => { handleOnClick(e) }" type="radio" :name="inputName" :id="`${optionAlphabet}-${inputName}`"
      :value="optionAlphabet" class="hidden group-hover:font-bold">
    <label :for="`${optionAlphabet}-${inputName}`"
      class="w-[40px] xl:w-[40px] sm:w-[80px] shrink-0 xl:text-xl rounded-md border aspect-square flex justify-center items-center group-hover:bg-cust-grey-lighter group-hover:font-bold group-hover:cursor-pointer transition-all"
      :class="tryOutQnAStore.tryoutA[inputName - 1] == optionAlphabet ? 'bg-cust-blue-lighter border-cust-blue text-cust-blue font-bold' : 'border-cust-grey-lighter text-cust-black'">
      {{ optionAlphabet }}
    </label>
    <label :for="`${optionAlphabet}-${inputName}`"
      class="block xl:text-xl group-hover:font-bold group-hover:cursor-pointer pl-4 transition-all">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTryoutQnA } from '@/stores/tryoutQnA'
defineProps(
  {
    inputName: String,
    optionAlphabet: String
  }
)

const tryOutQnAStore = useTryoutQnA()
function handleOnClick(e) {
  tryOutQnAStore.setAnswer((e.target.name - 1), e.target.value)
}

</script>