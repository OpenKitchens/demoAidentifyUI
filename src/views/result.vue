<script setup>
import Topbar from "@/components/resulttopbar.vue"
import EndAction from "@/components/endaction.vue"
import { ref } from 'vue'

import { useIndexImageStore } from '@/stores/indexImage.js'

const IndexImage = useIndexImageStore()

const imageUrl = ref(`/images/after/${IndexImage.data}.png`)


console.log("hello")
</script>

<template>
  <div>
    <div class="bg-[#110a0a] w-screen h-dvh fixed z-[-2] top-0 left-0"></div>
    <div class="bg-gradient-to-b from-black via-[#00000055]/70 w-[100vw] left-0 fixed top-0">
      <div class="relative">
        <Topbar class="mx-auto w-[85vw] mt-6 mb-8" />
      </div>
    </div>

    <div class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-[100vw] z-[-1]">
      <img v-if="imageUrl" :src="imageUrl" alt="アップロードされた画像" class="w-[100vw]" id="picture">
    </div>

    <div class="fixed bottom-0 left-0 bg-gradient-to-t from-black via-[#00000055]/70">
      <div class="mt-8 mb-6 w-[100vw]">
        <EndAction class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<style></style>