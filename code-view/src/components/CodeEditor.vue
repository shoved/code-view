<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>{{ content }}</div>
</template>

<script lang="ts">
export default {
  name: 'CodeEditor',
}
</script>

<style scoped lang="scss"></style>