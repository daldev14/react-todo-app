import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";

export default function TodoContainer() {
  return (
    <div className="flex flex-col gap-4 w-full px-3 transition-all duration-300 sm:w-[31.875rem]">
      <h1 className="font-bold text-4xl text-center dark:text-white">
        Todo APP
      </h1>

      <TodoSearch />
      <TodoList />
      <TodoModal />
    </div>
  );
}
