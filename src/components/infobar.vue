<script setup>

import axios from 'axios';
import { ref } from "vue"
import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

import { useClassifyStore } from '@/stores/classify.js'
const classifyStore = useClassifyStore()

import { useImageStore } from '@/stores/image.js' // imageストア用
const image = useImageStore()

import { useUrlStore } from '@/stores/url.js'
const url = useUrlStore()

//store.router("loading")

const data = ref("70")

</script>
<template>
  <p class="text-center text-white">危険度: {{ data }}/100</p>
</template>