import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useIndexImageStore = defineStore('indexImage', () => {

  const data = ref(0)

  return { data }
})
