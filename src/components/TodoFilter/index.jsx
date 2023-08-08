const filterOptions = ["Todos", "Completos", "Incompletos"];

export default function TodoFilter() {
  return (
    <ul className="w-full flex gap-4 border-b pb-0.5 mx-1 dark:text-white dark:border-c-black">
      {filterOptions.map((option) => {
        return (
          <li key={option}>
            <button className="px-2 py-1 rounded-md transition-all duration-300 hover:bg-slate-200/40 hover:shadow-sm dark:hover:bg-white/10">
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
