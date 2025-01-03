<script setup lang="ts">
const items = ref(codeToolbarItems);
</script>

<template>
  <v-container fluid class="pa-1">
    <Menubar :model="items" >
      <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
      </template>
    </Menubar>
  </v-container>
</template>

<script lang="ts">
import Menubar from 'primevue/menubar';
import { codeToolbarItems } from '../mock-data/code-toolbar';
import { ref } from 'vue';

export default {
  name: 'CodeToolbar',
  components: {
    Menubar
  }
};
</script>

<style scoped lang="scss">
/* Reduce the overall height and padding */
.p-menubar {
  height: 42px; /* Adjust as needed */
  font-size: 0.85rem; /* Make text smaller */
}

/* Reduce padding inside menu items */
.p-menubar .p-menuitem-link {
  padding: 4px 10px; /* Less vertical and horizontal padding */
}

/* Adjust spacing between icons and labels */
.p-menubar .p-menuitem-link .p-menuitem-icon {
  margin-right: 4px; /* Reduce space between icon and text */
}
</style>