<script setup lang="ts">
const title = ref("Welcome to Code Viewer");
</script>

<template>
  <v-container fluid class="pa-0" height="100%">
    <div>{{ title }}</div>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'CodeViewer',
}
</script>

<style scoped lang="scss">
</style>