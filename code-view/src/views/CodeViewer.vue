<template>
  <v-container fluid class="pa-0" height="100%">
    <CodeToolbar />
    <AppSideBar />
    <CodeWindow />
  </v-container>
</template>

<script lang="ts">
import AppSideBar from '../components/AppSideBar.vue';
import CodeToolbar from '../components/CodeToolbar.vue';
import CodeWindow from '../components/CodeWindow.vue';

export default {
  name: 'CodeViewer',
  components: {
    AppSideBar,
    CodeWindow,
    CodeToolbar
  },
};
</script>

<style scoped lang="scss">
</style>