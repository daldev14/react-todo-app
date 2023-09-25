import { useState, useRef, useEffect } from "react";
import { useTodo } from "../../hooks/useTodo";
import BtnCreateTodo from "../Buttons/BtnCreateTodo";
import BtnDeleteAllTodos from "../Buttons/BtnDeleteAllTodos";
import BtnDefault from "../Buttons/BtnDefault";

export default function TodoModal() {
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState("");
  const { createTodo, deleteAllTodos } = useTodo();
  const inputRef = useRef();

  const handlerToggleShowModal = () => {
    setShowModal(!showModal);
    setTodo("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [showModal]);

  const handlerChange = (event) => {
    setTodo(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (todo !== "") createTodo({ name: todo.trim() });
    setTodo("");
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <div className="flex gap-4 items-end">
          <BtnDeleteAllTodos handlerClick={deleteAllTodos} />
          <BtnCreateTodo handlerClick={handlerToggleShowModal} />
        </div>
      </div>

      {/* modal */}
      <div
        className={`${
          showModal ? "inline-block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-cm-gray dark:bg-cm-black`}
      >
        <div className="h-full w-full grid place-items-center px-4 sm:p-0">
          <div className="w-full flex flex-col gap-3 sm:w-[31.875rem]">
            <h1 className="font-bold text-4xl text-center dark:text-white">
              Nuevo TODO
            </h1>
            <form
              action=""
              onSubmit={handlerSubmit}
              className="flex flex-col gap-3"
            >
              <div>
                <label htmlFor="inputAddTodo" className="sr-only">
                  Agregar TODO
                </label>
                <input
                  type="text"
                  name="inputAddTodo"
                  id="inputAddTodo"
                  placeholder="Agregar TODO"
                  className="bg-white py-3 px-4 rounded-md w-full border transition duration-300 hover:shadow-md focus:outline-none placeholder-c-gray dark:bg-c-black dark:border-c-accent-black dark:text-white dark:hover:shadow-c-black"
                  value={todo}
                  onChange={handlerChange}
                  ref={inputRef}
                />
              </div>
              <div className="flex justify-center items-center gap-6">
                <BtnDefault title="Guardar" color="blue" type="submit" />
                <BtnDefault
                  title="Cancelar"
                  color="red"
                  handlerClick={handlerToggleShowModal}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
