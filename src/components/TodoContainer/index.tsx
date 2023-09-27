import { useTodo } from '../../hooks/useTodo'
import { useFilter } from '../../hooks/useFilter'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import TodoModal from '../TodoModal'
import InputProgress from '../InputProgress'

export default function TodoContainer () {
  const { todos } = useTodo()
  const { filterTodos } = useFilter()
  const todosFiltered = filterTodos(todos)

  return (
    <section className="flex flex-col gap-4 w-full px-3 transition-all duration-300 sm:w-[31.875rem]">
      <h1 className="font-bold text-4xl text-center dark:text-white">
        TODO APP
      </h1>
      <TodoForm />
      <InputProgress />
      <TodoList todos={todosFiltered} />
      <TodoModal />
    </section>
  )
}
