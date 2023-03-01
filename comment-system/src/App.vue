<script setup>
  import Header from "./components/Header.vue";
</script>

<template>
  <Header/>

  <v-container class="w-75">
    <RouterView />
  </v-container>
</template>
