<template>
  <div class="w-full h-full bg-cust-grey-lightest border border-cust-grey-lighter p-6 rounded-lg">
    <slot class="text-sm" name="label"></slot>
    <div class="font-bold text-2xl mt-2">
      {{ cardContent }}
    </div>
  </div>
</template>
<script setup>
defineProps(['cardContent'])
</script>