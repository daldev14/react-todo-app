import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodo = () => useContext(TodoContext);
