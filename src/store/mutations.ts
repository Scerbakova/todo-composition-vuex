import { MutationTree } from "vuex";
import { State, TodoEntry } from "./state";

export enum MutationType {
  CreateItem = "CREATE_ITEM",
  CompleteItem = "COMPLETE_ITEM",
  DeleteItem = "DELETE_ITEM",
  EditItem = "EDIT_ITEM",
  EditCompleted = "EDIT_COMPLETED",
}

export type Mutations = {
  [MutationType.CreateItem](state: State, item: TodoEntry): void;
  [MutationType.CompleteItem](
    state: State,
    item: Partial<TodoEntry> & { id: number }
  ): void;
  [MutationType.DeleteItem](
    state: State,
    item: Partial<TodoEntry> & { id: number }
  ): void;
  [MutationType.EditItem](
    state: State,
    item: Partial<TodoEntry> & { id: number }
  ): void;
  [MutationType.EditCompleted](
    state: State,
    item: Partial<TodoEntry> & { text: string }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateItem](state, item) {
    state.items.unshift(item);
    localStorage.todos = JSON.stringify(state.items);
  },
  [MutationType.CompleteItem](state, newItem) {
    state.items.map((item) => {
      item.id === newItem.id ? (item.completed = !item.completed) : item.text;
      localStorage.todos = JSON.stringify(state.items);
    });
  },
  [MutationType.DeleteItem](state, newItem) {
    state.items = state.items.filter((state) => state.id !== newItem.id);
    localStorage.todos = JSON.stringify(state.items);
  },
  [MutationType.EditItem](state, newItem) {
    state.items.map((item) => {
      if (item.id === newItem.id) {
        item.editing = true;
      } else {
        item.text;
      }
    });
  },
  [MutationType.EditCompleted](state, newItem) {
    state.items.map((item) => {
      if (item.id === newItem.id) {
        item.text = newItem.text;
      }
      item.editing = false;
      localStorage.todos = JSON.stringify(state.items);
    });
  },
};
