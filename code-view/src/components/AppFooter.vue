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
  <v-container>
    <v-footer flat color="secondary" app class="footer">
      <v-row justify="center" no-gutters>
        <div class="copyright">
          {{  copyright }}
        </div>

        <v-spacer></v-spacer>

        <v-btn
          v-for="button in navButtons"
          :key="button.text"
          :to="button.to"
          flat
          class="nav-btn"
          color="secondary"
        >
          {{ button.text }}
        </v-btn>
      </v-row>
    </v-footer>
  </v-container>

</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'AppFooter',
};
</script>

<style scoped lang="scss"></style>