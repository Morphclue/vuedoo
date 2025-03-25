<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps<{title: string, done: boolean}>();
const isChecked = ref(props.done)
</script>

<template>
  <v-row align="center">
    <v-checkbox v-model="isChecked"></v-checkbox>
    <h3 class="text-h5" :class="{ 'text-decoration-line-through text-gray-500': isChecked }">
      {{ title }}
    </h3>
  </v-row>
</template>

<style scoped></style>
