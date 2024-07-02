<template>
  <div class="w-full min-h-screen xl:flex justify-between items-start relative">
    <LeftSidebarComp />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import RightSidebarComp from '@/components/RightSidebarComp.vue'
import LeftSidebarComp from '@/components/LeftSidebarComp.vue'

</script>