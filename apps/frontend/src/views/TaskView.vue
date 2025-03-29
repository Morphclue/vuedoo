<script setup lang="ts">
import Task from '../components/Task.vue';
import {ref} from 'vue';
import {TaskDto} from '@vuedoo/types';

const tasks = ref<TaskDto[]>([
  { title: 'Chill', completed: false },
  { title: 'Play Games', completed: true },
  { title: 'Go sleep', completed: false },
]);

const newTask = ref('');
const addTask = () => {
  if (!newTask.value) return;
  tasks.value.push({ title: newTask.value, completed: false });
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
