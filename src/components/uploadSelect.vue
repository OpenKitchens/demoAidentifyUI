<script setup>
import { useIndexImageStore } from '@/stores/indexImage.js'
const store = useIndexImageStore()

import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="relative block bg-[#90838059] w-[90vw] rounded-xl backdrop-blur-sm">
    <button><img src="/images/0.jpg" class="w-[40vw]" @click="store.data = 0;router.push('edit')"></button>
    <button><img src="/images/1.jpg" class="w-[40vw]" @click="store.data = 1;router.push('edit')"></button>
    <br>
    <button><img src="/images/2.jpg" class="w-[40vw]" @click="store.data = 2;router.push('edit')"></button>
    <button><img src="/images/3.jpg" class="w-[40vw]" @click="store.data = 3;router.push('edit')"></button>
  </div>
</template>