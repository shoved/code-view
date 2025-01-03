<script setup lang="ts">
const title = ref("Code View");

const navButtons = ref([
  {
    text: "Home",
    to: "/",
    icon: "mdi-home",
  },
  {
    text: "Code Viewer",
    to: "/code-viewer",
    icon: "mdi-code-tags",
  },
  {
    text: "Documentation",
    to: "/documentation",
    icon: "mdi-file-document",
  },
  {
    text: "License",
    to: "/license",
    icon: "mdi-file-certificate",
  }
])
</script>

<template>
  <v-app-bar flat color="secondary" app class="px-10" height="48">
    <v-toolbar-title class="app-title">{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>
  
    <v-btn
      v-for="button in navButtons"
      :key="button.text"
      :to="button.to"
      flat
      class="nav-btn mx-2"
    >
      <v-icon left class="mr-2">{{ button.icon }}</v-icon>
      {{ button.text }}
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'AppHeader',
};
</script>

<style scoped lang="scss"></style>