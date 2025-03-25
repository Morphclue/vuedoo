<template>
  <v-container fluid class="pa-0 body-height">
    <v-row no-gutters style="height: 50%;">
      <v-col cols="6" class="pa-1">
        <v-card class="pa-4 fill-height" color="red lighten-4" variant="outlined">
          <div class="d-flex">
            <v-icon icon="mdi-numeric-1-circle"></v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Important & Urgent</h3>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" class="pa-1">
        <v-card class="pa-4 fill-height" color="orange lighten-4" variant="outlined">
          <div class="d-flex">
            <v-icon icon="mdi-numeric-2-circle"></v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Important & Not urgent</h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters style="height: 50%;">
      <v-col cols="6" class="pa-1">
        <v-card class="pa-4 fill-height" color="blue lighten-4" variant="outlined">
          <div class="d-flex">
            <v-icon icon="mdi-numeric-3-circle"></v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Not important & Urgent</h3>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6" class="pa-1">
        <v-card class="pa-4 fill-height" color="grey lighten-4" variant="outlined">
          <div class="d-flex">
            <v-icon icon="mdi-numeric-4-circle"></v-icon>
            <h3 class="text-h6 font-weight-bold mb-2">Not important & Not urgent</h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.body-height {
  height: calc(100vh - 64px);
}
</style>
<script setup lang="ts">
</script>
