import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOpenLSidebar = defineStore('OpenLSidebar', () => {
  const openLSidebar = ref(true)
  function toggleLSidebar() {
    openLSidebar.value = !openLSidebar.value
  }

  return {openLSidebar, toggleLSidebar}
}) 