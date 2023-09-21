import { useEffect, useState } from "react";
import { useTodo } from "../../hooks/useTodo";

export default function InputProgress() {
  const { todos } = useTodo();
  const todosCompleted = todos.filter((todo) => todo.isCompleted);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(() => {
      const newValue = Math.floor((todosCompleted.length * 100) / todos.length);
      if (isNaN(newValue)) return 0;
      return newValue;
    });
  }, [todos, todosCompleted]);

  return (
    <div className="flex-start flex h-4 w-full overflow-hidden rounded-full bg-gray-200 font-sans text-xs font-medium dark:bg-gray-700">
      <div
        className="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white"
        style={{ width: `${percentage}%` }}
      >
        {percentage}% Completos
      </div>
    </div>
  );
}
