<template>
  <aside
    class="w-[240pt] transition-all flex-initial p-4 border-r border-cust-grey-lighter flex flex-col justify-between"
    :class="storeOpenRsidebar.openRSidebar ? 'block' : 'hidden'">
    <div>
      <h1 class="font-bold text-2xl mb-6">
        CA<span class="font-bold text-2xl text-cust-orange">MABA</span>
      </h1>

      <ul>

        <li
          class="flex gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined">
            show_chart
          </span>
          <RouterLink>
            Dashboard
          </RouterLink>
        </li>

        <li
          class="flex gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined">
            category
          </span>
          <RouterLink>
            TryOut
          </RouterLink>
        </li>

        <li @click="isTestJurusanClicked = !isTestJurusanClicked"
          class="flex gap-2 items-center mb-3 py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
          <span class="material-symbols-outlined transition-all" :class="isTestJurusanClicked && 'rotate-90'">
            chevron_right
          </span>
          <span class="material-symbols-outlined">
            star
          </span>
          <div>
            Test Jurusan
          </div>
        </li>

        <!-- only show if test jurusan is clicked -->
        <li v-if="isTestJurusanClicked">
          <RouterLink
            class="flex w-full gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
            <div class="w-[24px] text-center text-2xl">
              •
            </div>
            <div>
              Kerjakan
            </div>
          </RouterLink>
        </li>

        <li v-if="isTestJurusanClicked">
          <RouterLink
            class="flex w-full gap-2 items-center mb-3 pl-[31px] py-2 pr-2 rounded-xl hover:bg-cust-grey-lightest hover:cursor-pointer transition-all">
            <div class="w-[24px] text-center text-2xl">
              •
            </div>
            <div>
              Hasil
            </div>
          </RouterLink>
        </li>

      </ul>
    </div>

    <ButtonComp :handleClick="()=>{storeLogout.openModal()}" styleProp="fill" typeProp="danger">
      Keluar
    </ButtonComp>

  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ButtonComp from './global/ButtonComp.vue'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useLogout } from '@/stores/logoutModal'

const isTestJurusanClicked = ref(false)
const storeOpenRsidebar = useOpenRSidebar()
const storeLogout = useLogout()


</script>