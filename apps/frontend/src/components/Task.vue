<script setup lang="ts">
import {ref} from 'vue';
import {useTheme} from 'vuetify';

const props = defineProps<{ title: string, completed: boolean }>();
const isChecked = ref(props.completed)
const theme = useTheme();

const menuItems = [
  { title: 'TODO'},
  { title: 'Delete'}
]
</script>

<template>
  <v-hover v-slot:default="hoverData">
    <div
      v-bind="hoverData.props"
      class="d-flex align-center mb-2 rounded"
      :style="{
        backgroundColor: hoverData.isHovering ? theme.current.value.colors.accent : theme.current.value.colors.primary,
      }"
    >
      <div class="d-flex justify-space-between w-100 align-center">
        <div class="d-flex align-center">
          <v-checkbox v-model="isChecked" />
          <p class="mb-3" :class="{ 'text-decoration-line-through text-grey': isChecked }">{{ title }}</p>
        </div>
        <v-menu>
          <template #activator="{ props: menuProps }">
            <v-btn class="mr-2" v-bind="menuProps" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in menuItems" :key="item.title">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-hover>
</template>
