<script setup lang="ts">
import {ref} from 'vue';
import {useTheme} from 'vuetify';

const props = defineProps<{
  title: string,
  completed: boolean,
  priority: string;
  _id: string,
  plannedAt: Date | undefined
}>();
const isChecked = ref(props.completed)
const theme = useTheme();

const menuItems = [
  { title: 'TODO' },
  { title: 'Delete' }
]

const handleMenuClick = (title: string) => {
  if (title === 'Delete') {
    emit('delete', props._id);
  }
}

const emit = defineEmits<{
  (e: 'delete', id: string): void;
}>();
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
          :class="{ 'text-decoration-line-through text-grey': isChecked }"
        />
        <v-menu>
          <template #activator="{ props: menuProps }">
            <v-btn
              class="mr-2"
              v-bind="menuProps"
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
