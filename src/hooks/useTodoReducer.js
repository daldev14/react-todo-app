import { useReducer } from "react";
import { reducer, TODO_ACTION_TYPES } from "../reducers/todoReducer";

export default function useTodoReducer() {
  const [state, dispatch] = useReducer(reducer, []);

  const createTodo = ({ name }) =>
    dispatch({
      type: TODO_ACTION_TYPES.ADD_TODO,
      payload: {
        name,
      },
    });

  const deleteTodo = (id) =>
    dispatch({ type: TODO_ACTION_TYPES.REMOVE_TODO, payload: { id } });

  const deleteAllTodos = () =>
    dispatch({ type: TODO_ACTION_TYPES.CLEAR_TODOS });

  const completedTodo = (id) =>
    dispatch({ type: TODO_ACTION_TYPES.COMPLETE_TODO, payload: { id } });

  return { state, createTodo, deleteTodo, deleteAllTodos, completedTodo };
}
