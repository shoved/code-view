<script setup lang="ts">

const uploadFile = () => {
  console.log("Upload File");
}

const downloadFile = () => {
  console.log("Download File");
}

const saveFile = () => {
  console.log("Save File");
}

const createFile = () => {
  console.log("Create File");
}

const actionButtons = ref([
  {
    icon: "mdi-upload-outline",
    callback: () => uploadFile(),
  },
  {
    icon: "mdi-download-outline",
    callback: () => downloadFile(),
  },
  {
    icon: "mdi-content-save-outline",
    callback: () => saveFile(),
  },
  {
    icon: "mdi-file-plus-outline",
    callback: () => createFile(),
  }
])

const iconColor = ref("white");
</script>

<template>
  <v-container class="code-side-bar pa-0">
    <v-list style="width: 54px" class="code-side-bar-list">
      <v-list-item
        v-for="button in actionButtons"
        :key="button.icon"
        @click="button.callback"
        class="code-side-bar-list-item"
      >
        <v-icon :color="iconColor">{{ button.icon }}</v-icon>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'CodeSideBar',
}
</script>

<style scoped lang="scss">
.code-side-bar {
  width: 100px;

  &-list {
    background-color: #2d2d2d;

    &-item {
      background-color: #2d2d2d;
      height: 54px;
    }
  }
}
</style>