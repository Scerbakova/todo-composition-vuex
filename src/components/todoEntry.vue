<template>
  <div class="entry__container">
    <div class="container__left-side">
      <input
        class="entry__checkbox"
        type="checkbox"
        :checked="completed"
        @change="toggleCompletion"
      />
      <p v-if="!editing" :class="`entry ${completed && 'entry--completed'}`">
        {{ updatedTodo }}
      </p>
    </div>
    <div class="button__container">
      <button class="edit__button" @click="editTodo" v-if="!editing">
        <img class="image" src="../assets/images/edit.png" alt="edit" />
      </button>
      <button class="delete__button" @click="deleteTodo" v-if="!editing">
        <img class="image" src="../assets/images/trash.png" alt="edit" />
      </button>
    </div>
  </div>
  <hr style="width: 100%" />
  <div v-if="editing">
    <input
      class="edit__input"
      v-model.trim="todoText"
      placeholder="edit"
      type="text"
      @blur="doneEdit"
      @keyup.enter="doneEdit"
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

<style lang="scss">
@import "@/styles/App.scss";
</style>
