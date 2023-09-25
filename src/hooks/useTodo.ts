import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export function useTodo() {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
