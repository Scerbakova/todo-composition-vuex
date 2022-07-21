<script lang="ts">
import { defineComponent } from "vue";
import NewItem from "./components/todoInput.vue";
import TodoList from "./components/todoList.vue";
export default defineComponent({
  components: { TodoList, NewItem },
});
</script>

<template>
  <div class="app__wrapper">
    <h1 class="app__title">Planner</h1>
    <div class="todo__wrapper">
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/reset.scss";
@import "@/styles/App.scss";
</style>
