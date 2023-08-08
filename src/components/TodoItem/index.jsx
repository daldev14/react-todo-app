import { useState } from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default function TodoItem({ text, isCompleted }) {
  const [complete, setComplete] = useState(isCompleted);
  const handlerComplete = () => setComplete(!complete);

  return (
    <div
      className={`${
        complete
          ? "bg-c-blue text-white border-c-lightBlue hover:shadow-c-blue/30"
          : "bg-white text-black dark:bg-c-black dark:text-white"
      } font-semibold w-full .px-4 .py-4 rounded border shadow-sm  transition-all duration-300 hover:shadow-md dark:border-c-accent-black dark:hover:shadow-c-black`}
    >
      <div className="flex items-center gap-1.5">
        <div
          className="flex flex-1 pl-4 py-4 cursor-pointer"
          onClick={handlerComplete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`${!complete ? "text-c-gray" : "text-white"} w-6 h-6`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="flex-1 mx-2">
            <span className={`${complete ? "line-through" : ""}`}>{text}</span>
          </div>
        </div>

        <div className="pr-4">
          <button className="group rounded-full p-1 transition-all duration-300 hover:bg-c-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`${
                complete ? "text-white" : "text-black"
              } w-5 h-5 group-hover:text-white dark:text-white`}
            >
              <title>Eliminar</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
