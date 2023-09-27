import { v4 as uuidv4 } from 'uuid'
import { type ListOfTodos, type Todo } from '../types/todo'

type State = ListOfTodos | []

interface Payload {
  id: string
  title: string
}

interface actionType {
  type: string
  payload: Partial<Payload>
}

const getItemFromLocalStorage = () => {
  const item = window.localStorage.getItem('REACT_SIMPLE_TODOS_APP_V1')
  if (item) return JSON.parse(item)
  return []
}

export const todosInitialState = getItemFromLocalStorage()

export const TODO_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  CLEAR_TODOS: 'CLEAR_TODOS'
}

const updateLocalStorage = (state: State) => {
  window.localStorage.setItem(
    'REACT_SIMPLE_TODOS_APP_V1',
    JSON.stringify(state)
  )
}

export const reducer = (state: State, action: Partial<actionType>) => {
  const { type: actionType, payload: actionPayload } = action

  if (actionType === TODO_ACTION_TYPES.ADD_TODO) {
    const title = actionPayload?.title
    if (!title) return state

    const newState = [
      ...state,
      {
        id: uuidv4(),
        title,
        isCompleted: false
      }
    ]

    updateLocalStorage(newState)

    return newState
  }

  if (actionType === TODO_ACTION_TYPES.REMOVE_TODO) {
    const id = actionPayload?.id
    const newState = state.filter((todo: Todo) => todo.id !== id)
    updateLocalStorage(newState)

    return newState
  }

  if (actionType === TODO_ACTION_TYPES.COMPLETE_TODO) {
    const id = actionPayload?.id
    const todoIndex = state.findIndex((item: Todo) => item.id === id)

    if (todoIndex >= 0) {
      const newState = [
        ...state.slice(0, todoIndex),
        { ...state[todoIndex], isCompleted: !state[todoIndex].isCompleted },
        ...state.slice(todoIndex + 1)
      ]

      updateLocalStorage(newState)

      return newState
    }

    return state
  }

  if (actionType === TODO_ACTION_TYPES.CLEAR_TODOS) {
    updateLocalStorage([])
    return []
  }

  return state
}
