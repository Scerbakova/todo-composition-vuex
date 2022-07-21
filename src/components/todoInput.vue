<template>
  <form @submit.prevent="createTask">
    <div>
      <div>
        <input v-model="text" type="text" placeholder="Write new task here" />
      </div>
      <div class="flex-shrink-0">
        <button type="submit">Add</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/store";
import { TodoEntry } from "@/store/state";
import { MutationType } from "@/store/mutations";

const text = ref("");
const store = useStore();
const createTask = () => {
  if (text.value === "") return;
  const item: TodoEntry = {
    id: Date.now(),
    text: text.value,
    completed: false,
    editing: false,
  };
  store.commit(MutationType.CreateItem, item);
  text.value = "";
};
</script>
