<script setup lang="ts">
defineProps({
  files: Array as PropType<CodeFileInfo[]>,
});
</script>

<template>
  <v-container fluid class="pa-1">
    <div>Code Sub Window</div>
  </v-container>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export interface CodeFileInfo {
  name: string;
  content: string;
  language: string;
}

export interface CodeSubWindowInfo {
  id: number;
  files: CodeFileInfo[];
}

export default {
  name: 'CodeSubWindow',
};
</script>

<style scoped lang="scss">
</style>