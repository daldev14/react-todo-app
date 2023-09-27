import { createContext, useState } from 'react'
import { type FilterValue } from '../types/filter'
import { FilterOption } from '../types/const'
import { type ListOfTodos } from '../types/todo'

interface Props {
  children: React.ReactNode
}

interface ContextProps {
  query: string
  changeQuery: (value: string) => void
  filter: FilterValue
  changeFilter: ({ option }: { option: FilterValue }) => void
  filterTodos: (todos: ListOfTodos) => ListOfTodos
}

const defaultContextProps: ContextProps = {
  query: '',
  changeQuery: () => {},
  filter: 'all',
  changeFilter: () => {},
  filterTodos: () => []
}

export const FilterContext = createContext<ContextProps>(defaultContextProps)

export function FilterProvider ({ children }: Props) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterValue>('all')

  const changeQuery = (value: string) => { setQuery(value) }

  const changeFilter = ({ option }: { option: FilterValue }) => {
    setFilter(option)
  }

  const filterTodos = (todos: ListOfTodos) => {
    let newTodos = todos

    if (filter === FilterOption.COMPLETE) {
      newTodos = todos.filter((todo) => todo.isCompleted)
    }

    if (filter === FilterOption.ACTIVE) {
      newTodos = todos.filter((todo) => !todo.isCompleted)
    }

    if (query !== '') {
      newTodos = newTodos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      )
    }

    return newTodos
  }

  return (
    <FilterContext.Provider
      value={{
        query,
        changeQuery,
        filter,
        changeFilter,
        filterTodos
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
