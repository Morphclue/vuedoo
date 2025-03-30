<script setup lang="ts">
import Task from '../components/Task.vue';
import {onMounted, ref} from 'vue';
import {TaskDto} from '@vuedoo/types';
import {environment} from '../environments/environment';
import axios from 'axios';

const tasks = ref<TaskDto[]>([]);
onMounted(async () => {
  const response = await fetch(`${environment.backendUrl}/api/task`);
  tasks.value = await response.json();
})

const newTask = ref('');
const addTask = async () => {
  if (!newTask.value) return;
  const task = { title: newTask.value, completed: false }
  const response = await axios.post(`${environment.backendUrl}/api/task`, task);
  tasks.value.push(response.data);
  newTask.value = '';
  return newTask.value;
};
</script>

<template>
  <v-container class="d-flex flex-column gap-4">
    <div class="d-flex gap-2">
      <v-text-field v-model="newTask" placeholder="New Task..." @keydown.enter="addTask" />
    </div>

    <div class="d-flex flex-column gap-2">
      <Task v-for="task in tasks" :title="task.title" :completed="task.completed" />
    </div>
  </v-container>
</template>
