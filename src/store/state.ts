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
  items: JSON.parse(localStorage.getItem("todos") || "[]"),
};
