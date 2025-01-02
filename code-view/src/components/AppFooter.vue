<script setup lang="ts">
const copyright = ref("© Code View - John Lecomte 2024");

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
  <v-footer flat color="primary" app class="footer">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="button in navButtons"
        :key="button.text"
        :to="button.to"
        flat
        class="nav-btn"
        color="primary"
      >
        {{ button.text }}
      </v-btn>

      <v-col class="text-center mt-4" cols="12">
        <div class="copyright">
          {{  copyright }}
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'AppFooter',
};
</script>

<style scoped lang="scss"></style>