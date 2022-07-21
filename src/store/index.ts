import { createStore, Store as VuexStore, CommitOptions } from "vuex";

import { State, state } from "./state";
import { Mutations, mutations } from "./mutations";

export const store = createStore<State>({
  state,
  mutations,
});

export function useStore() {
  return store as Store;
}

export type Store = Omit<
  VuexStore<State>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
