<template>
  <aside
    class="h-screen xl:flex flex-col justify-between flex-none overflow-x-hidden bg-white border-r border-cust-grey-lighter  transition-all z-[1000000000000]"
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

      <div v-if="route.name === 'tryout-latihan' || route.name === 'test-jurusan-pengerjaan'"
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
      <ul v-else>
        <RouterLink to="/dashboard" activeClass="bg-cust-grey-lighter"
          class="flex gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined sm:max-xl:text-3xl xl:text-[20px]">
            show_chart
          </span>
          Dashboard
        </RouterLink>
        <RouterLink to="/tryout" activeClass="bg-cust-grey-lighter"
          class="flex gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined sm:max-xl:text-3xl xl:text-[20px]">
            category
          </span>
          TryOut
        </RouterLink>

        <li @click="isTestJurusanClicked = !isTestJurusanClicked"
          class="flex gap-2 items-center mb-3 py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined sm:max-xl:text-3xl xl:text-[20px] transition-all"
            :class="isTestJurusanClicked && 'rotate-90'">
            chevron_right
          </span>
          <span class="material-symbols-outlined sm:max-xl:text-3xl xl:text-[20px]">
            star
          </span>
          <div>
            Test Jurusan
          </div>
        </li>

        <!-- only show if test jurusan is clicked -->
        <li v-if="isTestJurusanClicked">
          <RouterLink activeClass="bg-cust-grey-lighter" to="/test-jurusan/kerjakan"
            class="flex w-full gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lighter hover:cursor-pointer transition-all">
            <div class="w-[24px] text-center text-2xl">
              •
            </div>
            <div>
              Kerjakan
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>

    <ButtonComp v-if="route.name !== 'tryout-latihan' && route.name !== 'test-jurusan-pengerjaan'"
      :handleClick="() => { storeLogout.openModal() }" styleProp="fill" typeProp="danger">
      Keluar
    </ButtonComp>

  </aside>
</template>

<script setup>
import { onUpdated, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ButtonComp from './global/ButtonComp.vue'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useLogout } from '@/stores/logoutModal'

import { useTryoutQnA } from '@/stores/tryoutQnA'
import { useTestJurusanQnA } from '@/stores/testJurusanQnA'

const isTestJurusanClicked = ref(false)
const storeOpenRsidebar = useOpenRSidebar()
const storeLogout = useLogout()

const route = useRoute()

let qnaStore = ref(route.name === 'tryout-latihan' ? useTryoutQnA() : route.name === 'test-jurusan-pengerjaan' && useTestJurusanQnA())

onUpdated(() => {
  if (route.name === 'tryout-latihan') {
    qnaStore.value = useTryoutQnA()
  } else if (route.name === 'test-jurusan-pengerjaan') {
    qnaStore.value = useTestJurusanQnA()
  }
})

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