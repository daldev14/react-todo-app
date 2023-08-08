import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import BtnChangeTheme from "./components/Buttons/BtnChangeTheme";
import "./App.css";

export default function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const handlerChangeTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  return (
    <div
      className={`relative w-full min-h-[100vh] flex flex-col ${
        toggleDarkMode ? "dark bg-cm-black" : "bg-cm-gray"
      }`}
    >
      <header className="px-6 py-2 sm:px-10">
        <div className="w-full flex justify-end">
          <BtnChangeTheme
            handlerClick={handlerChangeTheme}
            isDark={toggleDarkMode}
          />
        </div>
      </header>
      <main className="flex justify-center w-full h-full flex-1">
        <TodoContainer />
      </main>
    </div>
  );
}
