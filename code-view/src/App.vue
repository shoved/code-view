<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <v-btn color="primary">Hello Vuetify</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
};
</script>