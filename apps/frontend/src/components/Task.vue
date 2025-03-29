<script setup lang="ts">
import {ref} from 'vue';
import {useTheme} from 'vuetify';

// FIXME: defineProps<TaskDto>(); does not work
const props = defineProps<{ title: string, completed: boolean }>();
const isChecked = ref(props.completed)
const theme = useTheme();
</script>

<template>
  <v-hover v-slot:default="hoverData">
    <div
      v-bind="hoverData.props"
      class="d-flex align-center mb-2 rounded"
      :style="{
        backgroundColor: hoverData.isHovering ? theme.current.value.colors.accent : theme.current.value.colors.primary,
      }"
    >
      <v-checkbox v-model="isChecked" />
       <p class="mb-3" :class="{ 'text-decoration-line-through text-grey': isChecked }">{{ title }}</p>
    </div>
  </v-hover>
</template>
