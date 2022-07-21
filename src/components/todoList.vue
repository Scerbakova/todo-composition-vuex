<template>
  <TodoEntry v-for="item in filteredTodos" :key="item.id" v-bind="item" />
  <div class="filter__wrapper">
    <div v-for="filter in filters" :key="filter">
      <button class="filter__button" @click="setFilter(filter)">
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoEntry from "./todoEntry.vue";
import { useTodoList } from "@/composables/useTodoList";

const { setFilter, filteredTodos } = useTodoList();

const filters = ["All", "In Progress", "Completed"];
</script>

<style lang="scss">
@import "@/styles/App.scss";
</style>
