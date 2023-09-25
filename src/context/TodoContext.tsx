import React, { createContext, useState } from "react";
import useTodoReducer from "../hooks/useTodoReducer";

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext();

export function TodoProvider({ children }: Props) {
  const { state, createTodo, removeTodo, deleteAllTodos, completedTodo } =
    useTodoReducer();

  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const changeChangeTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        createTodo,
        removeTodo,
        deleteAllTodos,
        completedTodo,
        toggleDarkMode,
        changeChangeTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
