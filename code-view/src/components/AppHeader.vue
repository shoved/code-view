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
  <v-app-bar flat color="primary">
    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>
  
    <v-btn
      v-for="button in navButtons"
      :key="button.text"
      :to="button.to"
      flat
      class="nav-btn"
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