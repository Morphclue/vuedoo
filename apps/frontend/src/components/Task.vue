<script setup lang="ts">
import {computed, ref} from 'vue';
import {useTheme} from 'vuetify';
import {environment} from '../environments/environment';
import axios from 'axios';

const props = defineProps<{
  title: string,
  completed: boolean,
  priority: string;
  _id: string,
  plannedAt: Date | undefined
}>();
const emit = defineEmits<{
  (e: 'update'): void;
  (e: 'delete', id: string): void;
}>();
const isChecked = computed({
  get: () => props.completed,
  set: async (value: boolean) => {
    await axios.put(`${environment.backendUrl}/api/task/${props._id}`, {completed: value});
    emit('update');
  }
})
const theme = useTheme();

const priorityColor = computed(() => {
  switch (props.priority) {
    case 'high':
      return 'red';
    case 'medium':
      return 'yellow';
    case 'low':
      return 'blue';
    default:
      return 'grey';
  }
});

const menuItems = [
  { title: 'TODO' },
  { title: 'Delete' }
]

const handleMenuClick = (title: string) => {
  if (title === 'Delete') {
    emit('delete', props._id);
  }
}
</script>

<template>
  <v-hover v-slot="hoverData">
    <div
      v-bind="hoverData.props"
      class="d-flex align-center mb-2 rounded"
      :style="{
        backgroundColor: hoverData.isHovering ? theme.current.value.colors.accent : theme.current.value.colors.primary,
      }"
    >
      <div class="d-flex justify-space-between w-100 align-center">
        <v-checkbox
          v-model="isChecked"
          :label="title"
          :base-color="priorityColor"
          class="d-flex align-center"
          :class="{ 'text-decoration-line-through text-grey': isChecked }"
        />
        <v-menu>
          <template #activator="{ props: menuProps }">
            <v-btn
              class="mr-3"
              v-bind="menuProps"
              density="compact"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in menuItems"
              :key="item.title"
              @click="handleMenuClick(item.title)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-hover>
</template>
