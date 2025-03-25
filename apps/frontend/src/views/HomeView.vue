<script setup lang="ts">
import Task from '../components/Task.vue';
import {ref} from 'vue';

const tasks = ref([
  { title: 'Chill', done: false },
  { title: 'Play Games', done: true },
  { title: 'Go sleep', done: false },
]);

const newTask = ref('');
const addTask = () => {
  if (!newTask.value) return;
  tasks.value.push({ title: newTask.value, done: false });
  newTask.value = '';
  return newTask.value;
};
</script>

<template>
  <v-container class="d-flex flex-column gap-4">
    <div class="d-flex gap-2">
      <v-text-field v-model="newTask" placeholder="New Task..." />
      <v-btn @click="addTask">Add Task</v-btn>
    </div>

    <div class="d-flex flex-column gap-2">
      <Task v-for="task in tasks" :key="task.title" :title="task.title" :done="task.done" />
    </div>
  </v-container>
</template>
