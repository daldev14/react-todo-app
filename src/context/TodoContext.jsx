import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useTodoReducer from "../hooks/useTodoReducer";

export const TodoContext = createContext();

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function TodoProvider({ children }) {
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
