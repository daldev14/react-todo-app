import { createContext, useState } from 'react'
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

  const [toggleDarkMode, setToggleDarkMode] = useState(false)

  const changeChangeTheme = () => {
    setToggleDarkMode(!toggleDarkMode)
  }

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
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
