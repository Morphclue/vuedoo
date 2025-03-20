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
      <v-btn color="primary">Vuetify Button</v-btn>
    <div class="flex space-x-2 mb-4">
      <input v-model="newTask" placeholder="New Task..." class="p-2 border border-gray-300 rounded"/>
      <button @click="addTask" class="p-2 bg-blue-500 text-white rounded">Add Task</button>
    </div>
    <Task v-for="task in tasks" :title="task.title" :done="task.done"></Task>
  </v-container>
</template>
