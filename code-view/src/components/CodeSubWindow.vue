<script setup lang="ts">
const props = defineProps({
  files: {
    type: Array as PropType<CodeFileInfo[]>,
    required: true,
  },
});

const scrollableTabs = computed(() => {
  return props.files.map((file, index) => ({
    title: file.name,
    content: file.content,
    value: index.toString(),
    language: file.language,
  }));
});
</script>

<template>
  <v-container fluid class="pa-1">
    <Tabs value="0" scrollable>
      <TabList>
        <Tab v-for="tab in scrollableTabs" :key="tab.title" :value="tab.value">
          {{ tab.title }}
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel v-for="tab in scrollableTabs" :key="tab.content" :value="tab.value">
          <CodeEditor :content="tab.content" :language="tab.language" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </v-container>
</template>

<script lang="ts">
import { computed, type PropType } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import CodeEditor from './CodeEditor.vue';
import type { CodeFileInfo } from '../interfaces/code-file-info.interface';

export default {
  name: 'CodeSubWindow',
  components: {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CodeEditor
  }
};
</script>

<style scoped lang="scss">
/* Scoped styles for a specific TabView */
::v-deep(.p-tab) {
  height: 32px;
  padding: 0 1rem;
  font-size: 0.75rem;
}

::v-deep(.p-tabview-nav) {
  height: 50px;
  line-height: 50px;
}
</style>