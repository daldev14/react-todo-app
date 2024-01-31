import { createContext, useEffect, useState } from 'react'
import useTodoReducer from '../hooks/useTodoReducer'
import { type ListOfTodos } from '../types/todo'

interface ProviderProps {
  children: React.ReactNode
}

interface ContextProps {
  todos: ListOfTodos
  createTodo: ({ title }: { title: string }) => void
  removeTodo: (id: string) => void
  deleteAllTodos: () => void
  completedTodo: (id: string) => void
  toggleDarkMode: boolean
  changeChangeTheme: () => void
}

const initialContext: ContextProps = {
  todos: [],
  createTodo: () => {},
  removeTodo: () => {},
  deleteAllTodos: () => {},
  completedTodo: () => {},
  toggleDarkMode: false,
  changeChangeTheme: () => {}
}

export const TodoContext = createContext<ContextProps>(initialContext)

export function TodoProvider ({ children }: ProviderProps) {
  const { state, createTodo, removeTodo, deleteAllTodos, completedTodo } =
    useTodoReducer()

  const [toggleDarkMode, setToggleDarkMode] = useState(() => {
    const value = window.localStorage.getItem('REACT_SIMPLE_TODOS_APP_THEME_V1')

    if (!value) {
      window.localStorage.setItem('REACT_SIMPLE_TODOS_APP_THEME_V1', 'false')
      return false
    }

    return JSON.parse(value)
  })

  const changeChangeTheme = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

  useEffect(() => {
    window.localStorage.setItem(
      'REACT_SIMPLE_TODOS_APP_THEME_V1',
      `${toggleDarkMode}`
    )
  }, [toggleDarkMode])

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        createTodo,
        removeTodo,
        deleteAllTodos,
        completedTodo,
        toggleDarkMode,
        changeChangeTheme
      }}>
      {children}
    </TodoContext.Provider>
  )
}
