<template>
  <div class="w-full min-h-screen flex justify-between">

    <RightSidebarComp />

    <div class="w-full flex-initial">
      <NavbarComp />

      <main class="px-4 pb-4 pt-10">
        
        <header class="flex justify-between">
          <h1 class="text-base font-bold mb-6">
            Dashboard
          </h1>
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
                  <div class="text-left mb-2">Tanggal SNBT/UTBK</div>
                  <h2 class="font-bold text-xl">21 Mei 2025</h2>
                </div>
              <div class="w-[75%] bg-cust-grey-lightest border border-cust-grey-lighter rounded-md p-4 ">
                <h2 class="text-center mb-2">Hitung mundur</h2>
                <div class="w-full flex justify-between">
                  <div>
                    <h2 class="font-bold text-2xl">100</h2>
                    <div class="text-center">Hari</div>
                  </div>
                  <div>
                    <h2 class="font-bold text-2xl">24</h2>
                    <div class="text-center">Jam</div>
                  </div>
                  <div>
                    <h2 class="font-bold text-2xl">60</h2>
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

        <!-- <div class="flex gap-4 items-stretch mb-4 bg-red-200 h-[341px]">
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
        </div> -->

      </main>

    </div>

    <LeftSidebarComp />

  </div>
</template>

<script setup>
import RightSidebarComp from '../components/RightSidebarComp.vue'
import LeftSidebarComp from '../components/LeftSidebarComp.vue'
import CardComp from '@/components/Dashboard/CardComp.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import BarChartComp from '@/components/global/BarChartComp.vue'

import { ref } from 'vue';
const date = ref(new Date());
</script>