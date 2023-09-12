import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext();

TodoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("REACT_SIMPLE_TODOS_APP_V1");

  const [todosCompleted, setTodosCompleted] = useState({});
  const [todosIncompleted, setTodosIncompleted] = useState({});
  const [filterOptionSelected, setFilterOptionSelected] = useState("all");
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const filterOptions = [
    { name: "Todos", value: "all" },
    { name: "Completados", value: "completed" },
    { name: "Incompletos", value: "incompleted" },
  ];

  const createTodo = ({ name }) => {
    const newTodo = {
      id: uuidv4(),
      name,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const completedTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;

      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      };
    });

    setTodos(newTodos);
  };

  const changeFilterOption = (option) => {
    setFilterOptionSelected(option);
  };

  const changeChangeTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  useEffect(() => {
    setTodosCompleted(todos.filter((todo) => todo.isCompleted));
    setTodosIncompleted(todos.filter((todo) => !todo.isCompleted));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
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
