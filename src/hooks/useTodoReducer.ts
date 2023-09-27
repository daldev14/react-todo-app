import { useReducer } from 'react'
import {
  reducer,
  todosInitialState,
  TODO_ACTION_TYPES
} from '../reducers/todoReducer'

export default function useTodoReducer () {
  const [state, dispatch] = useReducer(reducer, todosInitialState)

  const createTodo = ({ title }: { title: string }) => {
    dispatch({
      type: TODO_ACTION_TYPES.ADD_TODO,
      payload: {
        title
      }
    })
  }

  const removeTodo = (id: string) => { dispatch({ type: TODO_ACTION_TYPES.REMOVE_TODO, payload: { id } }) }

  const deleteAllTodos = () => { dispatch({ type: TODO_ACTION_TYPES.CLEAR_TODOS }) }

  const completedTodo = (id: string) => { dispatch({ type: TODO_ACTION_TYPES.COMPLETE_TODO, payload: { id } }) }

  return { state, createTodo, removeTodo, deleteAllTodos, completedTodo }
}
