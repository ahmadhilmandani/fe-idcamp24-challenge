<template>
  <div v-if="styleProp === 'fill'" class="rounded-full text-xs py-1 px-3 font-semibold" :class="typeProp === 'primary' ? 'bg-cust-orange-lighter text-cust-orange' :
    typeProp === 'muted' ? 'bg-cust-grey-lightest text-cust-grey-lighter' :
      typeProp === 'danger' ? 'bg-cust-redish-lighter text-cust-redish' :
        typeProp === 'success' ? 'bg-cust-green-lighter text-cust-green' :
          typeProp === 'info' && 'bg-cust-blue-lighter text-cust-blue'
    ">
    <slot></slot>
  </div>
  <div v-if="styleProp === 'no-fill'" class="rounded-full text-xs py-1 px-3 font-semibold" :class="typeProp === 'primary' ? 'text-cust-orange' :
    typeProp === 'muted' ? 'text-cust-grey-lighter' :
      typeProp === 'danger' ? 'text-cust-redish' :
        typeProp === 'success' ? 'text-cust-green' :
          typeProp === 'info' && 'text-cust-blue'
    ">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  styleProp: {
    validator(value) {
      return ['fill', 'no-fill'].includes(value)
    }
  },
  typeProp: {
    validator(value) {
      return ['primary', 'muted', 'danger', 'success', 'info'].includes(value)
    }
  }
})

</script>