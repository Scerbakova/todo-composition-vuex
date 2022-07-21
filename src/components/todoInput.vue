<template>
  <form @submit.prevent="createTask">
    <div class="form__group">
      <input
        class="form__input"
        v-model="text"
        type="text"
        placeholder="Write a new task here"
        ref="formInput"
      />
      <button class="button">Add</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "@/store";
import { TodoEntry } from "@/store/state";
import { MutationType } from "@/store/mutations";

const text = ref("");

const formInput = ref();

const store = useStore();

onMounted(() => {
  formInput.value.focus();
});

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

<style lang="scss">
@import "@/styles/App.scss";
</style>
