<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import { useImageStore } from '@/stores/image.js'
import { useViewControlStore } from '@/stores/viewcontrol.js'
import uploadSelect from './uploadSelect.vue';

const store = useViewControlStore()

const uploadSelectShow = ref(false)
</script>

<template>
  <div class="relative block bg-[#90838059] w-[90vw] rounded-xl backdrop-blur-sm">
    <button class="position absolute right-0 invert"><img src="@/assets/images/x.svg" class="w-6 h-6 mr-3 mt-3"
        @click="store.router('title')"></button>
    <h2 class="text-3xl font-bold text-center text-white p-7">画像をアップロード</h2>
    <Transition><div v-show="uploadSelectShow"><uploadSelect /></div></Transition>
    <button class="relative left-[50%] translate-x-[-50%] rounded-xl bg-indigo-400 text-xl px-5 py-4 font-bold bg-indigo-500 text-white w-[80vw]" @click="uploadSelectShow = true">Upload image</button>
    <div v-show="!uploadSelectShow" class="h-40"></div>
    <div v-show="uploadSelectShow" class="h-16"></div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>