<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = [
  {
    title: 'Tasks',
    to: '/',
  },
  {
    title: 'Eisenhower',
    to: '/eisenhower',
  },
  {
    title: 'About',
    to: '/about',
  },
];

const drawer = ref(false);

const navigate = (to: string) => {
  router.push(to);
  drawer.value = false;
};
</script>

<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    />
    <v-toolbar-title>Vuedoo</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      @click="navigate(item.to)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
  </v-navigation-drawer>
</template>
