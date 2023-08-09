import { useTodo } from "../../hooks/useTodo";
import TodoFilter from "../TodoFilter";
import TodoItem from "../TodoItem";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default function TodoList({ todos }) {
  const { todosCompleted } = useTodo();

  return (
    <div className="grid gap-1 w-full">
      <TodoFilter />
      <span className="font-semibold text-sm dark:text-white">
        TODOS completados {todosCompleted.length}/{todos.length}
      </span>
      {todos.length ? (
        <div className="grid gap-2 w-full max-h-[26.25rem] overflow-y-auto pb-14 sm:px-1 sm:pb-2 .sm:max-h-[31.25rem]">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      ) : (
        <div className="text-center mt-6 dark:text-white">
          <p className="font-semibold">No hay TODOS pendientes</p>
          <p>Agrega un TODO...</p>
        </div>
      )}
    </div>
  );
}
