<script setup lang="ts">
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<MenuItem[]>,
    required: true
  }
})

const bcs = ref(props.breadcrumbs);

watch(() => props.breadcrumbs, (value) => {
  bcs.value = value;
})

onMounted(() => {
  bcs.value = props.breadcrumbs;
})
</script>

<template>
  <Breadcrumb :model="bcs" class="pl-5 pt-2 pb-0 ma-0 breadcrumbs"/>
</template>

<script lang="ts">
import Breadcrumb from 'primevue/breadcrumb';
import type { MenuItem } from "primevue/menuitem";
import { onMounted, ref, watch, type PropType } from "vue";

export default {
  name: 'BreadCrumbs',
  components: {
    Breadcrumb
  }
};
</script>

<style scoped lang="scss">
.breadcrumbs {
  background-color: #282c34;
}

/* Scoped CSS for text color change */
:deep(.p-breadcrumb-item-label) {
  color: white !important; /* Change link color */
  letter-spacing: 0.07rem;
  font-weight: 500;
  font-style: monospace;
  font-size: 13px;
}
</style>