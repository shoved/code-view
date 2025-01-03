<script setup lang="ts">
function onNodeSelect(event: TreeNode) {
  // Callback when a node is selected
  console.log("Node Selected:", event.node.label);
}
function onNodeClick(event: TreeEvent) {
  // Callback when a node is clicked
  console.log("Node Clicked:", event.node.label);
}

const openFolder = ref(
  [{
    key: '0',
    label: 'Documents',
    icon: 'pi pi-fw pi-folder',
    children: [
      {
        key: '0-0',
        label: 'Work',
        icon: 'pi pi-fw pi-file',
        children: [
          {
            key: '0-0-0',
            label: 'Expenses.doc',
            icon: 'pi pi-fw pi-file'
          },
          {
            key: '0-0-1',
            label: 'Resume.doc',
            icon: 'pi pi-fw pi-file'
          },
        ],
      },
      {
        key: '0-1',
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        children: [
          {
            key: '0-1-0',
            label: 'Invoices.txt',
            icon: 'pi pi-fw pi-file'
          },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'Pictures',
    icon: 'pi pi-fw pi-image',
    children: [
      {
        key: '1-0',
        label: 'barcelona.jpg',
        icon: 'pi pi-fw pi-file-image'
      },
      {
        key: '1-1',
        label: 'logo.png',
        icon: 'pi pi-fw pi-file-image'
      },
    ],
  },
]);
</script>

<template>
  <v-container fluid class="pa-1">
    <Tree
      :value="openFolder"
      :filter="true"
      filterMode="lenient"
      class="w-full md:w-[30rem] pa-1"
      @node-select="onNodeSelect"
      @node-click="onNodeClick"
    ></Tree>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tree from 'primevue/tree';
import type { TreeNode } from "primevue/treenode"; // Import the TreeNode type

interface TreeEvent {
  originalEvent: Event;
  node: TreeNode;
}

export default {
  name: 'CodeSideNav',
  components: {
    Tree
  }
}
</script>

<style scoped lang="scss">
</style>