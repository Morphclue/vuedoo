<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <v-app-bar app color="primary" dark>
    <v-container class="d-flex align-center">
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-container>
  </v-app-bar>
</template>
