import { useId } from 'react'
import { useFilter } from '../../hooks/useFilter'

export default function InputSearch () {
  const todoSearchID = useId()
  const { changeQuery } = useFilter()

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeQuery(event.target.value)
  }

  return (
    <div className="bg-white px-2 rounded-md w-full border transition duration-300 hover:shadow-md dark:bg-c-black dark:border-c-accent-black dark:text-white dark:hover:shadow-c-black">
      <div className="flex items-center gap-3">
        <label htmlFor={todoSearchID}>
          <span className="sr-only">Buscar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-c-gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </label>

        <input
          type="search"
          name="todoSearch"
          id={todoSearchID}
          placeholder="Buscar TODO"
          className="flex-1 focus:outline-none py-3 placeholder-c-gray bg-transparent"
          onChange={handlerChange}
        />
      </div>
    </div>
  )
}
