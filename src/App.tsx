import TodoContainer from './components/TodoContainer'
import BtnChangeTheme from './components/Buttons/BtnChangeTheme'
import { useTodo } from './hooks/useTodo'

export default function App () {
  const { toggleDarkMode, changeChangeTheme } = useTodo()

  return (
    <div
      className={`relative w-full min-h-[100vh] flex flex-col ${
        toggleDarkMode ? 'dark bg-cm-black' : 'bg-cm-gray'
      }`}
    >
      <header className="px-6 py-2 sm:px-10">
        <div className="w-full flex justify-between">
          <div>
            <a
              href="https://github.com/daldev14/react-todo-app"
              className="font-semibold hover:text-c-blue dark:text-white dark:hover:text-c-lightBlue"
              title="Desarrollado moviendo las manitas 👋"
            >
              @daldev14
            </a>
          </div>
          <BtnChangeTheme
            handlerClick={changeChangeTheme}
            isDark={toggleDarkMode}
          />
        </div>
      </header>
      <main className="flex justify-center w-full h-full flex-1">
        <TodoContainer />
      </main>
    </div>
  )
}
