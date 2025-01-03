<script setup lang="ts">
const title = ref("Code View");

const navButtons = ref([
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Code Viewer",
    to: "/code-viewer",
  },
  {
    text: "Documentation",
    to: "/documentation",
  },
  {
    text: "License",
    to: "/license",
  }
])
</script>

<template>
  <v-app-bar flat color="secondary" app class="px-10">
    <v-toolbar-title class="app-title">{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>
  
    <v-btn
      v-for="button in navButtons"
      :key="button.text"
      :to="button.to"
      flat
      class="nav-btn mx-2"
    >
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