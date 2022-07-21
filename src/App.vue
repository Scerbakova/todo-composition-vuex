<script lang="ts">
import { defineComponent } from "vue";
import NewItem from "./components/todoInput.vue";
import TodoList from "./components/todoList.vue";
export default defineComponent({
  components: { TodoList, NewItem },
});
</script>

<template>
  <div>
    <h1>Planner</h1>
    <div>
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/reset.scss";
</style>
