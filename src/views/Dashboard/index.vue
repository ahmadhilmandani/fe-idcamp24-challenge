<template>
  <div class="w-full min-h-screen flex justify-between relative">
    <ModalComp v-if="storeLogout.modalLogoutOpen">
      <h1 class="font-semibold text-center text-2xl">Yakin nih mau Logout?</h1>
      <div class="mt-8 mb-3">
      <ButtonComp :handleClick="storeLogout.closedModal" styleProp="fill" typeProp="secondary">
        Ga jadi deh...
      </ButtonComp>
    </div>
        <ButtonComp styleProp="fill" typeProp="primary">
          Yakin, nanti mampir lagi, kok!
        </ButtonComp>
    </ModalComp>

    <!-- <RightSidebarComp /> -->

    <div class="w-full flex-initial">
      <NavbarComp />

      <main class="px-4 pb-4 pt-10">

        <header class="flex justify-between mb-6">
          <h1 class="text-base font-bold">
            Dashboard
          </h1>
          <div class="w-48 relative">
            <ButtonComp :handleClick="() => {
              isButtonTambahTryoutClicked = !isButtonTambahTryoutClicked
            }" typeProp="primary" styleProp="fill">
              Tambah TryOut
              <span class="material-symbols-outlined transition-all text-white text-[18px]"
                :class="isTestJurusanClicked && 'rotate-90'">
                chevron_right
              </span>
            </ButtonComp>
            <div v-if="isButtonTambahTryoutClicked"
              class="w-60 bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4 absolute top-[120%] right-0 shadow-lg">
              <RouterLink to="/1" class="mb-4 block hover:font-bold transition-all">
                Latihan di Web <span class="font-bold">CA<span class="font-bold text-cust-orange">MABA</span></span>
              </RouterLink>
              <RouterLink to="/1" class="hover:font-bold transition-all">
                Jadwalkan dari Platform Lain
              </RouterLink>
            </div>
          </div>
        </header>

        <div class="flex gap-4 items-stretch mb-4">
          <div class="w-44">
            <CardComp cardContent="100 Kali">
              <template #label>
                <div class="text-xs">
                  Total TryOut Tuntas
                </div>
              </template>
            </CardComp>
          </div>
          <div class="flex-auto">
            <CardComp cardContent="25 Kali">
              <template #label>
                <div class="text-xs">
                  Rata-rata TryOut Tuntas per <span class="text-cust-blue underline hover:cursor-pointer">Minggu
                    ▼</span>
                </div>
              </template>
            </CardComp>
          </div>
          <div class="min-w-[160px] flex-1">
            <CardComp cardContent="620">
              <template #label>
                <div class="text-xs">
                  Nilai tertinggi
                </div>
              </template>
            </CardComp>
          </div>
          <div class="min-w-[160px] flex-1">
            <CardComp cardContent="561,5">
              <template #label>
                <div class="text-sm">
                  Rata-rata nilai
                </div>
              </template>
            </CardComp>
          </div>
        </div>

        <div class="flex gap-4 mb-4">
          <div>
            <div class="flex gap-4 w-[500px]">
              <div class="w-[35%] bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4">
                <div class="text-left mb-2">Tanggal UTBK</div>
                <div class="flex gap-2">
                  <h2 class="font-bold text-5xl text-cust-orange">21</h2>
                  <div>
                    <div class="font-bold text-cust-blue mb-1">Mei</div>
                    <div class="font-bold text-cust-blue">2025</div>
                  </div>
                </div>
              </div>
              <div class="w-[75%] bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4 ">
                <h2 class="text-center mb-2 font-bold ">Hitung mundur</h2>
                <div class="w-full flex justify-between">
                  <div>
                    <h2 class="text-2xl">100</h2>
                    <div class="text-center">Hari</div>
                  </div>
                  <div>
                    <h2 class="text-2xl">24</h2>
                    <div class="text-center">Jam</div>
                  </div>
                  <div>
                    <h2 class="text-2xl">60</h2>
                    <div class="text-center">Menit</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[500px] bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4 mt-4">
              <div class="flex gap-2">
                <h2 class="font-bold mb-2">Statistik Nilai</h2>
                <span class="text-cust-blue underline hover:cursor-pointer">Desember 2024 ▼</span>
              </div>
              <BarChartComp />
            </div>
          </div>
          <div class="flex-1 bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4">
            <div class="flex gap-2 flex-wrap mb-2">
              <h2 class="font-bold mb-2 pr-4 border-r border-cust-black">Jadwal TryOut</h2>
              <span class="text-cust-green text-[10px]">• Selesai</span>
              <span class="text-cust-blue text-[10px]">• Mendatang</span>
              <span class="text-cust-redish text-[10px]">• Terlewat/belum ada nilai</span>
            </div>
            <VDatePicker v-model="date" mode="date" expanded transparent="true" borderless="true" />
          </div>
        </div>

      </main>

    </div>

    <!-- <LeftSidebarComp /> -->

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


import CardComp from '@/components/Dashboard/CardComp.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import BarChartComp from '@/components/global/BarChartComp.vue'
import ButtonComp from '@/components/global/ButtonComp.vue'
import ModalComp from '@/components/global/ModalComp.vue'
import { useLogout } from '@/stores/logoutModal'


const date = ref(new Date())
const storeLogout = useLogout()

const isTestJurusanClicked = ref(false)
const isButtonTambahTryoutClicked = ref(false)

</script>