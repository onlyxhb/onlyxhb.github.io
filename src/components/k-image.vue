<template>
  <img :src="`https://www.kkkf.cn/images/${src}.png`" class="custom-img" :style="wrapStyle" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: String,
  top: {
    type: [String, Number],
    default: 0
  },
  bottom: {
    type: [String, Number],
    default: 0
  },
  width: {
    type: [String, Number],
    default: 0
  },
  height: {
    type: [String, Number],
    default: 0
  }
})

const wrapStyle = computed(() => {
  const { width, height, top, bottom } = props || {}
  return {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
    marginTop: top ? `${top}px` : '0',
    marginBottom: bottom ? `${bottom}px` : '0'
  }
})
</script>

<style></style>