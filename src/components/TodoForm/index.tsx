import InputSearch from "../InputSearch";
import InputFilter from "../InputFilter";
import { useRef } from "react";

export default function TodoForm() {
  const formRef = useRef();

  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handlerSubmit}
        className="w-full flex flex-col gap-4"
        ref={formRef}
      >
        <InputSearch />
        <InputFilter />
      </form>
    </div>
  );
}
