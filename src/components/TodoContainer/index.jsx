import { useTodo } from "../../hooks/useTodo";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";
import { useMemo, useState } from "react";

export default function TodoContainer() {
  const { todos, filterOptionSelected } = useTodo();
  const [searchText, setSearchText] = useState("");

  const searchTodo = useMemo(() => {
    if (filterOptionSelected === "all") {
      return todos.filter((todo) =>
        todo.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (filterOptionSelected === "completed") {
      return todos.filter(
        (todo) =>
          todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
          todo.isCompleted
      );
    }

    if (filterOptionSelected === "incompleted") {
      return todos.filter(
        (todo) =>
          todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
          !todo.isCompleted
      );
    }
  }, [filterOptionSelected, searchText, todos]);

  return (
    <div className="flex flex-col gap-4 w-full px-3 transition-all duration-300 sm:w-[31.875rem]">
      <h1 className="font-bold text-4xl text-center dark:text-white">
        Todo APP
      </h1>

      <TodoSearch handlerSearchTodo={setSearchText} />
      <TodoList todos={searchTodo} />
      <TodoModal />
    </div>
  );
}
