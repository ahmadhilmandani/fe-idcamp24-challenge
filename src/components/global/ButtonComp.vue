<template>
  <button v-if="type === 'danger'" class="bg-cust-redish rounded-md w-full text-center p-2 text-white">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    validator(value, props) {
      return ['primary', 'secondary', 'danger'].includes(value)
    }
  },
  handleClick: Function
})
</script>112