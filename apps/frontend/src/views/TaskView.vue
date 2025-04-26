<script setup lang="ts">
import {TaskDto} from '@vuedoo/types';
import axios from 'axios';
import {format} from 'date-fns';
import {computed, onMounted, ref} from 'vue';

import Task from '../components/Task.vue';
import {environment} from '../environments/environment';

const tasks = ref<TaskDto[]>([]);
const datePickerOpen = ref(false);
const newTask = ref<{ title: string; priority: string; date: Date | undefined }>({
  title: '',
  date: new Date(),
  priority: 'medium'
});

onMounted(async () => {
  await fetchTasks();
})

const fetchTasks = async () => {
  const response = await axios.get(`${environment.backendUrl}/api/task`);
  tasks.value = response.data;
};

const formattedDate = computed(() =>
  newTask.value?.date ? format(newTask.value.date, 'dd.MM.yyyy') : ''
);

const addTask = async () => {
  if (!newTask.value) return;
  const task = {
    title: newTask.value.title,
    completed: false,
    plannedAt: newTask.value.date,
    priority: newTask.value.priority
  }
  const response = await axios.post(`${environment.backendUrl}/api/task`, task);
  tasks.value.push(response.data);
  newTask.value.title = '';
  newTask.value.date = new Date();
  newTask.value.priority = 'medium';
};

const deleteTask = async (id: string) => {
  await axios.delete(`${environment.backendUrl}/api/task/${id}`);
  tasks.value = tasks.value.filter(task => task._id !== id);
};
</script>

<template>
  <v-container class="d-flex flex-column gap-4">
    <div class="d-flex">
    <v-text-field
      v-model="newTask.title"
      placeholder="New Task..."
      class="w-100"
      @keydown.enter="addTask"
    >
      <template #append-inner>
        <span
          v-if="formattedDate"
          class="text-caption text-grey pr-2"
        >
          {{ formattedDate }}
        </span>

        <v-menu
          v-model="datePickerOpen"
          :close-on-content-click="false"
          activator="parent"
          offset-y
        >
          <template #activator="{ props }">
            <v-btn
              icon
              v-bind="props"
              class="mr-1"
              @click.stop
            >
              <v-icon>mdi-calendar</v-icon>
            </v-btn>
          </template>

          <v-date-picker
            v-model="newTask.date"
            @update:model-value="datePickerOpen = false"
          />
        </v-menu>
      </template>
    </v-text-field>
    <v-select
      v-model="newTask.priority"
      :items="['low', 'medium', 'high']"
      density="compact"
      variant="underlined"
      hide-details
      class="ml-10"
    />
    </div>

    <div class="d-flex flex-column gap-2">
      <!-- TODO: Find a better way for task._id -->
      <Task
        v-for="task in tasks"
        :key="task._id.toString()"
        :title="task.title"
        :completed="task.completed"
        :planned-at="task.plannedAt"
        :_id="task._id.toString()"
        :priority="task.priority"
        @update="fetchTasks"
        @delete="deleteTask"
      />
    </div>
  </v-container>
</template>
