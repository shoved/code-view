<template>
  <v-container fluid>
    <AppSideBar />
  </v-container>
</template>

<script lang="ts">
import AppSideBar from '../components/AppSideBar.vue';

export default {
  name: 'CodeViewer',
  components: {
    AppSideBar,
  },
};
</script>