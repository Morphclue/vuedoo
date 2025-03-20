<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps<{title: string, done: boolean}>();
const isChecked = ref(props.done)
</script>

<template>
  <div class="flex space-x-2">
    <h3 :class="{ 'line-through text-gray-500': isChecked }">{{ title }}</h3>
    <input type="checkbox" v-model="isChecked"/>
  </div>
</template>

<style scoped></style>
