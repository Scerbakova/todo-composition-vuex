<template>
  <TodoEntry v-for="item in items" :key="item.id" v-bind="item" />
  <TodoFilters />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import TodoEntry from "./todoEntry.vue";
import TodoFilters from "./todoFilters.vue";

const store = useStore();
const items = computed(() => store.state.items);
</script>
