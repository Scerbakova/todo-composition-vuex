<template>
  <div v-for="filter in filters" :key="filter">
    <button @click="filteredTodos(filter)">{{ filter }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";

const store = useStore();

const filters = ["All", "In Progress", "Completed"];

const filteredTodos = (filter: string) => {
  if (filter === "Completed") {
    console.log(filter);
    return computed(() => store.getters.competedTodos);
  } else if (filter === "InProgress") {
    return computed(() => store.getters.inProgressTodos);
  } else {
    console.log(filter);
    return computed(() => store.state.items);
  }
};
</script>
