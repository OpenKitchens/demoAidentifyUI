<script setup>
import { ref } from 'vue'
import { useIndexImageStore } from '@/stores/indexImage.js'
const store = useIndexImageStore()

import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([0,1,2,3,4,5,6,7,8])
</script>

<template>
  <div class="relative block w-[90vw] rounded-xl backdrop-blur-sm overflow-y-auto px-1">
    <button v-for="(item, index) in items">
      <img :src="'/images/before/'+index+'.jpg'" class="w-28 h-28 rounded-lg my-4 ml-4" @click="store.data = index;router.push('edit')">
    </button>
  </div>
</template>

<style scoped>

</style>