import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodoProvider } from "./context/TodoContext.tsx"
import { FilterProvider } from "./context/FilterContext.tsx"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodoProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </TodoProvider>
  </React.StrictMode>
);
