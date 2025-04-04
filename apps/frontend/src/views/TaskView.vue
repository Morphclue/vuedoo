<script setup lang="ts">
import Task from '../components/Task.vue';
import {computed, onMounted, ref} from 'vue';
import {TaskDto} from '@vuedoo/types';
import {environment} from '../environments/environment';
import axios from 'axios';

const tasks = ref<TaskDto[]>([]);
const datePickerOpen = ref(false);
const newTask = ref<{ title: string; date: Date | undefined }>({
  title: '',
  date: new Date()
});

onMounted(async () => {
  const response = await fetch(`${environment.backendUrl}/api/task`);
  tasks.value = await response.json()
})

const formattedDate = computed(() =>
  newTask.value?.date?.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }) ?? ''
);

const addTask = async () => {
  if (!newTask.value) return;
  const task = { title: newTask.value.title, completed: false, plannedAt: newTask.value.date }
  const response = await axios.post(`${environment.backendUrl}/api/task`, task);
  tasks.value.push(response.data);
  newTask.value.title = '';
  newTask.value.date = new Date();
};

const deleteTask = async (id: string) => {
  await axios.delete(`${environment.backendUrl}/api/task/${id}`);
  tasks.value = tasks.value.filter(task => task._id !== id);
};
</script>

<template>
  <v-container class="d-flex flex-column gap-4">
    <v-text-field
      v-model="newTask.title"
      placeholder="New Task..."
      @keydown.enter="addTask"
      class="w-100"
    >
      <template #append-inner>
      <span v-if="formattedDate" class="text-caption text-grey pr-2">
        {{ formattedDate }}
      </span>

        <v-menu
          v-model="datePickerOpen"
          :close-on-content-click="false"
          activator="parent"
          offset-y
        >
          <template #activator="{ props }">
            <v-btn icon v-bind="props" @click.stop class="mr-1">
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

    <div class="d-flex flex-column gap-2">
      <Task
        v-for="task in tasks"
        :title="task.title"
        :completed="task.completed"
        :plannedAt="task.plannedAt"
        :_id="task._id"
        @delete="deleteTask"
      />
    </div>
  </v-container>
</template>
