import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOpenRSidebar = defineStore('OpenRSidebar', () => {
  const openRSidebar = ref(true)
  function toggleRSidebar() {
    openRSidebar.value = !openRSidebar.value
  }

  return {openRSidebar, toggleRSidebar}
}) 