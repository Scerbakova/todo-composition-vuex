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
    item: Partial<TodoEntry> & { text: string; id: number }
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateItem](state, item) {
    state.items.unshift(item);
    localStorage.todos = JSON.stringify(state.items);
  },
  [MutationType.CompleteItem](state, { id }) {
    state.items = state.items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      localStorage.todos = JSON.stringify(state.items);

      return item;
    });
  },
  [MutationType.DeleteItem](state, { id }) {
    state.items = state.items.filter((entry) => entry.id !== id);
    localStorage.todos = JSON.stringify(state.items);
  },
  [MutationType.EditItem](state, { id }) {
    state.items = state.items.map((item) => {
      if (item.id === id) {
        item.editing = true;
      }

      return item;
    });
  },
  [MutationType.EditCompleted](state, { id, text }) {
    state.items = state.items.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
      item.editing = false;
      localStorage.todos = JSON.stringify(state.items);

      return item;
    });
  },
};
