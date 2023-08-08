import PropTypes from "prop-types";

BtnCreateTodo.propTypes = {
  handlerClick: PropTypes.func,
};

export default function BtnCreateTodo({ handlerClick }) {
  return (
    <button
      onClick={handlerClick}
      className="bg-gradient-to-r from-c-blue to-c-lightBlue rounded-full text-white w-16 aspect-square border border-c-lightBlue grid place-items-center shadow-md transition-all duration-300 hover:shadow-c-blue/40 hover:shadow-xl hover:opacity-90 dark:hover:shadow-c-blue/10"
    >
      <span className="sr-only">Agregar nuevo TODO</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <title>Agregar nuevo TODO</title>
        <path
          fillRule="evenodd"
          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
