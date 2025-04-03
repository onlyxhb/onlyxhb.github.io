<template>
  <div :style="{ width: '100%', height: gap + 'px' }" />
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  gap: {
    type: [Number, String],
    default: 0
  }
})
</script>

<style>

</style>