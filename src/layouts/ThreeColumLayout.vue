<template>
  <div class="w-full min-h-screen flex justify-between relative">
    <RightSidebarComp />
    <RouterView />
    <LeftSidebarComp />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import RightSidebarComp from '@/components/RightSidebarComp.vue'
import LeftSidebarComp from '@/components/LeftSidebarComp.vue'



</script>