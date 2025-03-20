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
  <v-container>
    <v-container class="d-flex flex-1-0">
      <v-text-field v-model="newTask" placeholder="New Task..."/>
      <v-btn @click="addTask">Add Task</v-btn>
    </v-container>
    <Task v-for="task in tasks" :title="task.title" :done="task.done"></Task>
  </v-container>
</template>
