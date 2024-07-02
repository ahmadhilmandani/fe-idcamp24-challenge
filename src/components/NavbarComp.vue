<template>
  <nav v-if="route.name === 'test-jurusan-pengerjaan'" class="w-full flex justify-between items-center border-b border-cust-grey-lighter px-4 xl:px-16 py-6 fixed top-0 z-50 bg-white">
    <div class="flex gap-2 items-center">
      <div @click="storeOpenRsidebar.toggleRSidebar"
        class="material-symbols-outlined transition-all hover:text-cust-blue hover:cursor-pointer text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        dock_to_right
      </div>
      <RouterLink to="/" class="text-cust-grey">
        Pengerjaan Test Rekomendasi Jurusan
      </RouterLink>
    </div>
    <!-- <div class="flex gap-2 items-center">
      <div class="xl:hidden block lg:text-xl">
        100m 60d
      </div>
      <RouterLink class="material-symbols-outlined text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        light_mode
      </RouterLink>
      <div @click="storeOpenLsidebar.toggleLSidebar"
        class="material-symbols-outlined transition-all hover:text-cust-blue hover:cursor-pointer text-[20px] sm:max-xl:text-3xl xl:text-[20px]">
        dock_to_left
      </div>
    </div> -->
  </nav>

  <nav v-else
    class="w-full flex justify-between items-center px-4 xl:px-16 py-6 fixed top-0 left-0 right-0 bg-cust-orange-lightest z-50">
    <h3>
      CA<h3 class="inline font-bold text-cust-orange">MABA</h3>
    </h3>

    <a class="block w-fit" href="https://download.garuda.kemdikbud.go.id/article.php?article=957186&val=14716&title=Sistem%20Pakar%20Untuk%20Menentukan%20Jurusan%20Kuliah%20Berdasarkan%20Minat%20dan%20Bakat%20Siswa%20SMA%20Dengan%20Menggunakan%20Metode%20Forward%20Chaining" target="_blank">
      <ButtonComp style-prop="outline" type-prop="secondary">
        <div class="text-[12px] sm:text-[24px] xl:text-[15px] text-cust-orange font-bold xl:px-2 xl:py-1">
          Jurnal referensi
        </div>
      </ButtonComp>
    </a>

  </nav>
</template>

<script setup>
import ButtonComp from './global/ButtonComp.vue'
import { RouterLink } from 'vue-router'
import { useOpenRSidebar } from '@/stores/openRSidebar'
import { useOpenLSidebar } from '@/stores/openLSidebar'
import { useRoute } from 'vue-router'

const route = useRoute()
const storeOpenRsidebar = useOpenRSidebar()
const storeOpenLsidebar = useOpenLSidebar()
</script>