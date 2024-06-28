<template>
  <button @click="handleClick" v-if="styleProp === 'fill'"
    class="flex justify-center items-center rounded-xl gap-2 w-full text-center px-6 py-2 font-semibold hover:opacity-75 transition-all"
    :class="typeProp === 'primary' ? 'bg-cust-orange text-white' :
      typeProp === 'secondary' ? 'bg-cust-orange-lighter text-cust-orange' :
        typeProp === 'danger' ? 'bg-cust-redish text-white' :
          typeProp === 'success' ? 'bg-cust-green text-white' :
            typeProp === 'muted' && 'bg-cust-grey-lightest text-cust-grey'
      ">
    <slot></slot>
  </button>

  <button @click="handleClick" v-else-if="styleProp === 'outline'"
    class="flex justify-center items-center rounded-xl gap-2 w-full text-center px-6 py-2 border font-semibold" :class="typeProp === 'primary' ? 'bg-cust-orange' :
      typeProp === 'secondary' ? 'border-cust-orange text-cust-orange hover:bg-cust-orange-lighter' :
        typeProp === 'danger' ? 'border-cust-redish text-cust-redish hover:bg-cust-redish-lighter' :
          typeProp === 'success' ? 'border-cust-green text-cust-green hover:bg-cust-green-lighter' :
            typeProp === 'muted' ? 'border-cust-grey text-cust-grey hover:bg-cust-grey-lightest' :
              'border-cust-black text-cust-black hover:bg-cust-grey-lightest'
      ">
    <slot></slot>
  </button>

  <button @click="handleClick" v-else-if="styleProp === 'borderless'"
    class="flex justify-center items-center gap-2 text-cust-black w-full text-center p-2 font-semibold hover:font-bold transition-all">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps(
  {
    styleProp: {
      validator(value) {
        return ['fill', 'outline', 'borderless'].includes(value)
      }
    },
    typeProp: {
      validator(value) {
        return ['primary', 'secondary', 'danger', 'success', 'muted'].includes(value)
      }
    },
    handleClick: Function
  }
)
</script>