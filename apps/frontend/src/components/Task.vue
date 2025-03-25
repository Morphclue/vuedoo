<script setup lang="ts">
import {ref} from 'vue';
import {useTheme} from 'vuetify';

const props = defineProps<{title: string, done: boolean}>();
const isChecked = ref(props.done)
const theme = useTheme();
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <div
      v-bind="props"
      class="d-flex align-center mb-2 rounded"
      :style="{
        backgroundColor: isHovering ? theme.current.value.colors.accent : theme.current.value.colors.primary,
      }"
    >
      <div class="d-flex align-center">
        <v-checkbox v-model="isChecked" />
        <p class="mb-3" :class="{ 'text-decoration-line-through text-grey': isChecked }">{{ title }}</p>
      </div>
    </div>
  </v-hover>
</template>
