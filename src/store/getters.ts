import { GetterTree } from "vuex";
import { State, TodoEntry } from "./state";

export type Getters = {
  inProgressTodos(state: State): TodoEntry[];
  competedTodos(state: State): TodoEntry[];
};

export const getters: GetterTree<State, State> & Getters = {
  inProgressTodos(state) {
    return state.items.filter((item) => !item.completed);
  },
  competedTodos(state) {
    return state.items.filter((item) => item.completed);
  },
};
