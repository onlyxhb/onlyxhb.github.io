<template>
  <div :style="{ width: '100%', height: gap + 'px' }" />
</template>

<script setup>
defineProps({
  gap: {
    type: [Number, String],
    default: 0
  }
})
</script>

<style>

</style>