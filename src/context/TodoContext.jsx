import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// import useLocalStorage from "../hooks/useLocalStorage";
import useTodoReducer from "../hooks/useTodoReducer";

export const TodoContext = createContext();

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function TodoContextProvider({ children }) {
  // const [todos, setTodos] = useLocalStorage("REACT_SIMPLE_TODOS_APP_V1");
  const { state, createTodo, deleteTodo, deleteAllTodos, completedTodo } =
    useTodoReducer();

  const [todosCompleted, setTodosCompleted] = useState({});
  const [todosIncompleted, setTodosIncompleted] = useState({});
  const [filterOptionSelected, setFilterOptionSelected] = useState("all");
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const filterOptions = [
    { name: "Todos", value: "all" },
    { name: "Completados", value: "completed" },
    { name: "Incompletos", value: "incompleted" },
  ];

  const changeFilterOption = (option) => {
    setFilterOptionSelected(option);
  };

  const changeChangeTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  useEffect(() => {
    setTodosCompleted(state.filter((todo) => todo.isCompleted));
    setTodosIncompleted(state.filter((todo) => !todo.isCompleted));
  }, [state]);

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        createTodo,
        deleteTodo,
        deleteAllTodos,
        completedTodo,
        todosCompleted,
        todosIncompleted,
        filterOptions,
        filterOptionSelected,
        changeFilterOption,
        toggleDarkMode,
        changeChangeTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
