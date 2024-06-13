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
        <div class="flex gap-4 items-stretch">
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
                  Rata-rata TryOut Tuntas per <span class="text-cust-blue underline hover:cursor-pointer">Minggu ▼</span>
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
</script>