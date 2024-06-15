import { ref } from "vue"
import { defineStore } from "pinia"

export const useLogout = defineStore('isWantToLogout', () => {
  const modalLogoutOpen = ref(false)
  const isWantToLogout = ref(false)

  function openModal() {
    modalLogoutOpen.value = true
  }

  function closedModal() {
    modalLogoutOpen.value = false
  }

  return {
    modalLogoutOpen,
    isWantToLogout,
    openModal,
    closedModal
  }
})