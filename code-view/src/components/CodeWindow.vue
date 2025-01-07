<script setup lang="ts">
const windows = ref(codeViewWindows)

const windowWidth = computed(() => {
  return Math.floor(85 / (windows.value.length || 1));
});
</script>

<template>
  <v-container fluid class="splitter-container px-2 py-0">
    <Splitter style="height: 100%" class="mb-8">
      <SplitterPanel :size="15">
        <CodeSideNav />
      </SplitterPanel>

      <SplitterPanel
        v-for="(window, index) in windows"
        :key="index"
        class="flex items-center justify-center"
        :size="windowWidth"
      >
        <CodeSubWindow :id="window.id.toString()" :files="window.files" class="content flex-grow-1 fill-height"/>
      </SplitterPanel>

      <SplitterPanel
        class="flex items-center justify-center"
        v-if="windows.length === 0"
        :size="85"
      >
        <CodeWindowEmpty />
      </SplitterPanel>
    </Splitter>
  </v-container>
</template>

<script lang="ts">
import CodeSideNav from './CodeSideNav.vue';
import ScrollableTabs from './ScrollableTabs.vue';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import { ref, computed } from 'vue';
import CodeToolbar from './CodeToolbar.vue';
import CodeWindowEmpty from './CodeWindowEmpty.vue';
import { codeViewWindows } from '../mock-data/code-windows';
import CodeSubWindow from './CodeSubWindow.vue';

export default {
  name: 'CodeWindow',
  components: {
    CodeSideNav,
    ScrollableTabs,
    Splitter,
    SplitterPanel,
    CodeToolbar,
    CodeWindowEmpty,
    CodeSubWindow,
  },
};
</script>

<style scoped lang="scss">
.splitter-container {
  height: 100%; /* Full height of the parent container */
  width: 100%;  /* Full width of the parent container */
  display: flex;
  background-color: #282c34;
  border: none;
}

/* Ensure the Splitter component takes up all available space */
.p-splitter {
  height: 100%; /* Full height */
  width: 100%;  /* Full width */
  border: none;
}

::v-deep(.p-splitter-gutter) {
  width: 1px;
  border: 1px solid #333;
  background-color: #282c34;
}

::v-deep(.p-splitterpanel) {
  background-color: #282c34;
}
</style>