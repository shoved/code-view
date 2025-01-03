<script setup lang="ts">
const windows: Ref<CodeSubWindowInfo[]> = ref([
  {
    id: 1,
    files: [
      {
        name: 'File1.txt',
        content: 'This is the content of File1.txt',
        language: 'text',
      },
      {
        name: 'File2.py',
        content: 'This is the content of File2.py',
        language: 'python',
      },
    ],
  }
]);
</script>

<template>
  <v-container fluid class="splitter-container pa-0">
    <Splitter style="height: 100%" class="mb-8">
      <SplitterPanel :size="20" :style="{ flexBasis: '300px', flexGrow: 0, flexShrink: 0 }">
        <CodeSideNav />
      </SplitterPanel>

      <SplitterPanel
        v-for="(window, index) in windows"
        :key="index"
        class="flex items-center justify-center"
        :size="90"
      >
        <CodeSubWindow v-bind="window"/>
      </SplitterPanel>

      <SplitterPanel
        class="flex items-center justify-center"
        :size="90"
        v-if="windows.length === 0"
      >
        <div class="text-center">No windows open</div>
      </SplitterPanel>
    </Splitter>
  </v-container>
</template>

<script lang="ts">
import CodeSideNav from './CodeSideNav.vue';
import { type CodeSubWindowInfo } from './CodeSubWindow.vue';
import CodeSubWindow from './CodeSubWindow.vue';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { type Ref, ref } from 'vue';

export default {
  name: 'CodeWindow',
  components: {
    CodeSideNav,
    CodeSubWindow,
    Splitter,
    SplitterPanel,
  },
};
</script>

<style scoped lang="scss">
.splitter-container {
  height: 100%; /* Full height of the parent container */
  width: 100%;  /* Full width of the parent container */
  display: flex;
}

/* Ensure the Splitter component takes up all available space */
.p-splitter {
  height: 100%; /* Full height */
  width: 100%;  /* Full width */
}
</style>