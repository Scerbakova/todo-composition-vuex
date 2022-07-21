import { computed, ref } from "vue";
import { useStore } from "vuex";

export const useTodoList = () => {
  const store = useStore();
  const filter = ref("All");

  const setFilter = (value: string) => {
    filter.value = value;
  };

  const filteredTodos = computed(function () {
    switch (filter.value) {
      case "In Progress":
        return store.getters.inProgressTodos;

      case "Completed":
        return store.getters.competedTodos;

      default:
        return store.state.items;
    }
  });

  return {
    filteredTodos,
    setFilter,
  };
};
