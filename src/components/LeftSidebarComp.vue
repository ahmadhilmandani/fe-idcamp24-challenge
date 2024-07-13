<template>
  <aside
    class="h-screen xl:flex flex-col justify-between flex-none overflow-x-hidden bg-white border-r border-cust-grey-lighter  transition-all z-[1000000]"
    :class="storeOpenRsidebar.openRSidebar ? 'xl:w-[240px] p-4 fixed xl:sticky top-0 bottom-0 left-0 right-0 xl:right-auto flex' : 'w-0 p-0 hidden xl:flex'">

    <div class="overflow-auto">
      <header class="flex justify-between items-center mb-6">
        <h1 class="font-bold text-2xl">
          CA<span class="font-bold text-2xl text-cust-orange">MABA</span>
        </h1>
        <span @click="storeOpenRsidebar.toggleRSidebar"
          class="material-symbols-outlined block xl:hidden hover:cursor-pointer text-cust-redish text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
          close
        </span>
      </header>

      <div
        class="flex gap-4 flex-wrap justify-center">
        <a :href="`#${++index}`" v-for="(value, index) in qnaStore.question" :key="value"
          class="rounded-md border border-cust-grey-lighter w-[40px] xl:w-[40px] sm:w-[80px]  aspect-square flex justify-center items-center text-cust-black"
          :class="qnaStore.answer[index - 1] != null ? 'bg-cust-blue border-cust-blue text-white font-bold' : 'border-cust-grey-lighter text-cust-black'">
          {{ index }}
        </a>
        <div class="mt-5 w-full">
          <ButtonComp :handleClick="() => { storeLogout.openModal() }" styleProp="fill" typeProp="primary">
            Selesai
          </ButtonComp>
        </div>
      </div>
    </div>

  </aside>
</template>

<script setup>
import ButtonComp from './global/ButtonComp.vue'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useLogout } from '@/stores/logoutModal'

import { useTestJurusanQnA } from '@/stores/testJurusanQnA'
import { onMounted } from 'vue';

const storeOpenRsidebar = useOpenRSidebar()
const storeLogout = useLogout()



onMounted(() => {
  if (window.innerWidth < 1024) {
    storeOpenRsidebar.openRSidebar = false
  }
})
let qnaStore = useTestJurusanQnA()

</script>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(242, 242, 242);
  border-radius: 200px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-neutral-300/50;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-neutral-300;

}
</style>