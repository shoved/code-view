<script setup lang="ts">
const props = defineProps({
  tabs: {
    type: Array as PropType<TabModel[]>,
    required: true,
  },
});

onMounted(() => {
  console.log(props.tabs);
});
</script>

<template>
  <Tabs value="tab-0" scrollable class="tabview-scrollable">
    <TabList>
      <Tab v-for="tab in tabs" :key="tab.label" :value="tab.value">
        {{ tab.label }}
      </Tab>
    </TabList>

    <TabPanels class="pa-0 ma-0 mx-0">
      <slot name="tab-panels"></slot>
    </TabPanels>
  </Tabs>
</template>

<script lang="ts">
import { onMounted, type PropType } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import CodeEditor from './CodeEditor.vue';
import type { TabModel } from '../interfaces/tab-model.interface';
import BreadCrumbs from './BreadCrumbs.vue';

export default {
  name: 'ScrollableTabs',
  components: {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    CodeEditor,
    BreadCrumbs,
  }
};
</script>

<style scoped lang="scss">
/* Scoped styles for a specific TabView */
::v-deep(.p-tab) {
  height: 42px;
  padding: 0 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  background-color: #282c34;
  color: white;
  border: 1px solid #ccc;
}

::v-deep(.p-tablist-content ) {
  background-color: #282c34;
  color: white;
}

::v-deep(.p-tablist-viewport) {
  background-color: #282c34;
  color: white;
}

::v-deep(.p-tabview-nav) {
  height: 50px;
  line-height: 50px;
}

/* Change the tab background and active tab styling */
.tabview-scrollable :deep(.p-tabview-nav) {
  background-color: #333;
  color: white;
}

.tabview-scrollable :deep(.p-tabview-nav li .p-tabview-nav-link) {
  color: white;
  background-color: #282c34;
}
</style>