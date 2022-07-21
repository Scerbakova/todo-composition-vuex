<script setup lang="ts">
const filters = ["All", "In Progress", "Completed"];
</script>

<template>
  <div v-for="filter in filters" :key="filter">
    <button>{{ filter }}</button>
  </div>
</template>
