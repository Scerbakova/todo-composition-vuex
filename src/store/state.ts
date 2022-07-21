export type TodoEntry = {
  id: number;
  text: string;
  completed: boolean;
  editing: boolean;
};

export type State = {
  items: TodoEntry[];
};

export const state: State = {
  items: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") || "[]")
    : ([] as object[]),
};
