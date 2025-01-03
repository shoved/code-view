<template>
  <v-container fluid class="pa-0" height="100%">
    <AppSideBar />
    <CodeWindow />
  </v-container>
</template>

<script lang="ts">
import AppSideBar from '../components/AppSideBar.vue';
import CodeWindow from '../components/CodeWindow.vue';

export default {
  name: 'CodeViewer',
  components: {
    AppSideBar,
    CodeWindow,
  },
};
</script>

<style scoped lang="scss">
</style>