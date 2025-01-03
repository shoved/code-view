<script setup lang="ts">
const command = (cmd: string) => {
  console.log(cmd);
}

const items = ref([
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    command: command('file'),
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        command: command('new'),
        items: [
          {
            label: 'Project',
            icon: 'pi pi-fw pi-plus',
            command: command('project')
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-plus',
            command: command('other')
          }
        ]
      },
      {
        label: 'Open',
        icon: 'pi pi-fw pi-folder-open',
        command: command('open')
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-times',
        command: command('quit')
      }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    command: command('edit'),
    items: [
      {
        label: 'Undo',
        icon: 'pi pi-fw pi-undo',
        command: command('undo')
      },
      {
        label: 'Redo',
        icon: 'pi pi-fw pi-redo',
        command: command('redo')
      }
    ]
  },
  {
    label: 'Help',
    icon: 'pi pi-fw pi-question',
    command: command('help'),
    items: [
      {
        label: 'Contents',
        icon: 'pi pi-fw pi-book',
        command: command('contents')
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-search',
        command: command('search')
      }
    ]
  }
])
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