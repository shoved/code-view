<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  files: {
    type: Array as PropType<CodeFileInfo[]>,
    required: true,
  }
})

const tabs = computed(() => {
  return props.files.map((file, index) => {
    return {
      label: file.name,
      value: `tab-${index}`,
    };
  });
});

const content = computed(() => {
  return props.files.map(file => {
    return {
      name: file.name,
      language: file.language,
      content: file.content,
      path: file.path,
    }
  });
});

const code = ref("def greet(name):\n    return f'Hello, {name}'");
</script>

<template>
  <ScrollableTabs :tabs="tabs" >
    <template v-slot:tab-panels>
      <TabPanel v-for="(con, index) in content" :key="index" :value="tabs[index].value">
        <BreadCrumbs :breadcrumbs="pathToBreadcrumbs(con.path)"/>

        <CodeEditor v-model="code"  language="python" />
      </TabPanel>
    </template>
  </ScrollableTabs>
</template>

<script lang="ts">
import { computed, ref, type PropType } from 'vue';
import CodeEditor from './CodeEditor.vue';
import BreadCrumbs from './BreadCrumbs.vue';
import ScrollableTabs from './ScrollableTabs.vue';
import type { CodeFileInfo } from '../interfaces/code-file-info.interface';
import TabPanel from 'primevue/tabpanel';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import { pathToBreadcrumbs } from '../tools/breadCrumbs';


export default {
  name: 'CodeSubWindow',
  components: {
    CodeEditor,
    BreadCrumbs,
    ScrollableTabs,
    TabPanel,
    Tabs,
    TabList,
    Tab,
    TabPanels,
  }
};
</script>

<style scoped lang="scss">
::v-deep(.p-tablist-tab-list) {
  background-color: #282c34;
  color: white;
  padding: 0px;
  border: 1px solid #444;
}
</style>