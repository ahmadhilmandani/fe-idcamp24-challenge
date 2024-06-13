<template>
  <nav class="w-full flex justify-between items-center border-b border-cust-grey-lighter p-4">
    <div class="flex gap-2 items-center">
      <RouterLink class="material-symbols-outlined text-[20px]">
        dock_to_right
      </RouterLink>
      <RouterLink to="/" class="text-cust-grey">
        Dashboard
      </RouterLink>
    </div>
    <div class="flex gap-2 items-center">
      <RouterLink class="material-symbols-outlined text-[20px]">
        light_mode
      </RouterLink>
      <RouterLink class="material-symbols-outlined text-[20px]">
        settings
      </RouterLink>
      <RouterLink class="material-symbols-outlined text-[20px]">
        dock_to_left
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>