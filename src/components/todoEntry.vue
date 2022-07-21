<template>
  <div>
    <div>
      <input type="checkbox" :checked="completed" @change="toggleCompletion" />
    </div>
    <div>
      <h4>{{ updatedTodo }}</h4>
    </div>
    <button @click="editTodo">Edit</button>
    <button @click="deleteTodo">Delete</button>
  </div>
  <div v-if="editing">
    <input
      v-model.trim="todoText"
      placeholder="edit"
      type="text"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
      ref="editInput"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";

const props = defineProps({
  id: { type: Number, required: true },
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
  editing: { type: Boolean, required: true },
});

const todoText = ref(props.text);

const updatedTodo = computed({
  get() {
    return todoText.value;
  },
  set() {
    store.commit(MutationType.EditCompleted, {
      id: props.id,
      text: todoText.value,
    });
  },
});

const store = useStore();

const toggleCompletion = () => {
  store.commit(MutationType.CompleteItem, {
    id: props.id,
    completed: !props.completed,
  });
};

const deleteTodo = () => {
  store.commit(MutationType.DeleteItem, {
    id: props.id,
  });
};

const editTodo = () => {
  store.commit(MutationType.EditItem, {
    id: props.id,
    editing: props.editing,
  });
};

const doneEdit = () => {
  store.commit(MutationType.EditCompleted, {
    id: props.id,
    text: todoText.value,
  });
};
</script>
