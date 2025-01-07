<template>
  <v-container fluid class="pa-0 code-view-container" height="100%">
    <CodeToolbar />
    <v-row>
      <v-col cols="auto" style="width: 52px">
        <CodeSideBar />
      </v-col>
      <v-col class="flex-grow-1">
        <CodeWindow />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import CodeSideBar from '../components/CodeSideBar.vue';
import CodeToolbar from '../components/CodeToolbar.vue';
import CodeWindow from '../components/CodeWindow.vue';

export default {
  name: 'CodeViewer',
  components: {
    CodeSideBar,
    CodeWindow,
    CodeToolbar
  },
};
</script>

<style scoped lang="scss">
.code-view-container {
  background-color: #2d2d2d;
}
</style>