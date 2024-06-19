<template>
  <div class="flex gap-4 mb-8 items-center">
    <input type="radio" :name="inputName" :id="inputId" :value="inputValue">
    <!-- <label for=""></label> -->
    <label :for="inputId"
      class="w-[40px] xl:w-[40px] sm:w-[80px] shrink-0 xl:text-xl rounded-md border border-cust-grey-lighter aspect-square flex justify-center items-center text-cust-black">
      A.
    </label>
    <div class="xl:text-xl">
      Dani mendapatkan posisi baru sebagai kepala Divisi Pemasaran di Perusahaan X
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps(
  {
    inputName: String,
    inputId: String,
    inputValue: [String, Number],
    labelContent: String,
    inputName: String,
  }
)

</script>