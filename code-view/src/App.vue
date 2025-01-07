<script setup lang="ts">
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
</script>

<template>
  <v-app>
    <AppHeader />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
    <Toast />
  </v-app>
</template>

<script lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { Toast } from 'primevue';
import { onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Toast
  }
};
</script>

<style scoped lang="scss">
.v-main {
  background-color: #282c34;
}
</style>