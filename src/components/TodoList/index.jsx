import TodoFilter from "../TodoFilter";
import TodoItem from "../TodoItem";

const todos = [
  { name: "Crear diseño app TODOS", isCompleted: true },
  { name: "Programar app TODOS", isCompleted: false },
  { name: "Hacer ejercicio", isCompleted: false },
  { name: "Practicar Inglés", isCompleted: true },
  { name: "Hacer el super", isCompleted: false },
];

export default function TodoList() {
  return (
    <div className="grid gap-1 w-full">
      <TodoFilter />
      {todos.length ? (
        <div className="grid gap-2 w-full max-h-[26.25rem] overflow-y-auto pb-14 sm:px-1 sm:pb-2 .sm:max-h-[31.25rem]">
          {todos.map(({ name, isCompleted }) => {
            return (
              <TodoItem key={name} text={name} isCompleted={isCompleted} />
            );
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
