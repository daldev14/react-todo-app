import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TodoProvider } from "./context/TodoContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </TodoProvider>
  </React.StrictMode>
);
