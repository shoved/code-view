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
    icon: "mdi-upload",
    callback: () => uploadFile(),
  },
  {
    icon: "mdi-download",
    callback: () => downloadFile(),
  },
  {
    icon: "mdi-content-save",
    callback: () => saveFile(),
  },
  {
    icon: "mdi-file-plus",
    callback: () => createFile(),
  }
])

const iconColor = ref("white");
</script>

<template>
  <v-navigation-drawer
    :rail="true"
    permanent
    class="side-bar"
    color="secondary"
  >
    <v-list>
      <v-list-item
        v-for="button in actionButtons"
        :key="button.icon"
        @click="button.callback"
      >
        <v-list-item-icon>
          <v-icon :color="iconColor">{{ button.icon }}</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'AppSideBar',
}
</script>

<style scoped lang="scss"></style>