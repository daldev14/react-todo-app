import TodoItem from '../TodoItem'
import { type ListOfTodos } from '../../types/todo'

export default function TodoList ({ todos }: { todos: ListOfTodos }) {
  return (
    <div className="grid gap-2 w-full sm:px-1">
      {(todos.length > 0)
        ? (
        <div className="grid gap-2 w-full max-h-[26.25rem] overflow-y-auto pb-14 sm:pb-2">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />
          })}
        </div>
          )
        : (
        <div className="text-center mt-6 dark:text-white">
          <p className="font-semibold">No hay TODOS pendientes</p>
          <p>Agrega un TODO...</p>
        </div>
          )}
    </div>
  )
}
