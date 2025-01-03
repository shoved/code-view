<script setup lang="ts">
function onNodeSelect(event: TreeNode) {
  // Callback when a node is selected
  console.log("Node Selected:", event.node.label);
}
function onNodeClick(event: TreeEvent) {
  // Callback when a node is clicked
  console.log("Node Clicked:", event.node.label);
}

const openFolder = ref(mockOpenFolder);
</script>

<template>
  <v-container fluid class="pa-1">
    <Tree
      :value="openFolder"
      :filter="true"
      filterMode="lenient"
      class="w-full md:w-[30rem] pa-0"
      @node-select="onNodeSelect"
      @node-click="onNodeClick"
    ></Tree>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tree from 'primevue/tree';
import type { TreeEvent } from '../interfaces/tree-event.interface';
import type { TreeNode } from 'primevue/treenode';
import { mockOpenFolder } from '../mock-data/open-folder';

export default {
  name: 'CodeSideNav',
  components: {
    Tree
  }
}
</script>

<style scoped lang="scss">
::v-deep(.p-tree-filter .p-inputtext) {
  padding: 2px 6px;
  font-size: 0.85rem;
  height: 36px;
}
::v-deep(.p-tree-filter) {
  margin-bottom: 4px;
}
</style>