import React, { useId } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { FilterOption } from '../../types/const'
import { type FilterValue } from '../../types/filter'

export default function InputFilter () {
  const todoAllID = useId()
  const todoActiveID = useId()
  const todoCompleteID = useId()
  const { filter, changeFilter } = useFilter()

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeFilter({ option: event.target.value as FilterValue })
  }

  return (
    <div className="w-full flex gap-2 border-b pb-0.5 dark:text-white dark:border-c-black">
      <label className="sr-only">Filter</label>
      <div>
        <label
          htmlFor={todoAllID}
          className={`block px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 cursor-pointer ${
            filter === 'all'
              ? 'bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30'
              : ''
          } `}
        >
          Todos
        </label>
        <input
          type="radio"
          name="todo-filter"
          id={todoAllID}
          value={FilterOption.ALL}
          onChange={handleChangeFilter}
          hidden
        />
      </div>

      <div>
        <label
          htmlFor={todoActiveID}
          className={`block px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 cursor-pointer ${
            filter === 'active'
              ? 'bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30'
              : ''
          } `}
        >
          Activos
        </label>
        <input
          type="radio"
          name="todo-filter"
          id={todoActiveID}
          value={FilterOption.ACTIVE}
          onChange={handleChangeFilter}
          hidden
        />
      </div>

      <div>
        <label
          htmlFor={todoCompleteID}
          className={`block px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 cursor-pointer ${
            filter === 'complete'
              ? 'bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30'
              : ''
          } `}
        >
          Completos
        </label>
        <input
          type="radio"
          name="todo-filter"
          id={todoCompleteID}
          value={FilterOption.COMPLETE}
          onChange={handleChangeFilter}
          hidden
        />
      </div>
    </div>
  )
}
