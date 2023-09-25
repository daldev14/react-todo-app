import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const FilterContext = createContext();

const FILTER_OPTION = {
  all: "all",
  complete: "complete",
  active: "active",
};

export function FilterProvider({ children }: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(FILTER_OPTION.all);

  const changeQuery = (value) => setQuery(value);

  const changeFilter = (option) => {
    setFilter(FILTER_OPTION[option]);
  };

  const filterTodos = (todos) => {
    let newTodos = todos;

    if (filter === FILTER_OPTION.complete) {
      newTodos = todos.filter((todo) => todo.isCompleted);
    }

    if (filter === FILTER_OPTION.active) {
      newTodos = todos.filter((todo) => !todo.isCompleted);
    }

    if (query !== "") {
      newTodos = newTodos.filter((todo) =>
        todo.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return newTodos;
  };

  return (
    <FilterContext.Provider
      value={{
        query,
        changeQuery,
        filter,
        changeFilter,
        filterTodos,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
