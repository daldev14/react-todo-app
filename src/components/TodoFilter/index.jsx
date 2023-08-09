import { useTodo } from "../../hooks/useTodo";

export default function TodoFilter() {
  const { filterOptions, filterOptionSelected, changeFilterOption } = useTodo();

  return (
    <ul className="w-full flex gap-2 border-b pb-0.5 mx-1 dark:text-white dark:border-c-black">
      {filterOptions.map(({ name, value }) => {
        return (
          <li key={name}>
            <button
              onClick={() => changeFilterOption(value)}
              className={`px-2 py-1 rounded-md transition-all duration-300 hover:bg-blueGray-200 hover:shadow-sm dark:hover:bg-white/10 ${
                filterOptionSelected === value
                  ? "bg-blueGray-200 hover:bg-blueGray-300 font-semibold dark:bg-white/10 dark:hover:bg-white/30"
                  : ""
              } `}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
