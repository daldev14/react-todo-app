import { useId } from "react";
import { useFilter } from "../../hooks/useFilter";

export default function InputFilter() {
  const todoAllID = useId();
  const todoActiveID = useId();
  const todoCompleteID = useId();
  const { filter, changeFilter } = useFilter();

  const handleChangeFilter = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <div className="w-full flex gap-2 border-b pb-0.5 dark:text-white dark:border-c-black">
      <label className="sr-only">Filter</label>
      <div>
        <label
          htmlFor={todoAllID}
          className={`block px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 cursor-pointer ${
            filter === "all"
              ? "bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30"
              : ""
          } `}
        >
          Todos
        </label>
        <input
          type="radio"
          name="todo-filter"
          id={todoAllID}
          value="all"
          onClick={handleChangeFilter}
          hidden
        />
      </div>

      <div>
        <label
          htmlFor={todoActiveID}
          className={`block px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 cursor-pointer ${
            filter === "active"
              ? "bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30"
              : ""
          } `}
        >
          Activos
        </label>
        <input
          type="radio"
          name="todo-filter"
          id={todoActiveID}
          value="active"
          onClick={handleChangeFilter}
          hidden
        />
      </div>

      <div>
        <label
          htmlFor={todoCompleteID}
          className={`block px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 cursor-pointer ${
            filter === "complete"
              ? "bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30"
              : ""
          } `}
        >
          Completos
        </label>
        <input
          type="radio"
          name="todo-filter"
          id={todoCompleteID}
          value="complete"
          onClick={handleChangeFilter}
          hidden
        />
      </div>
    </div>
  );
}
