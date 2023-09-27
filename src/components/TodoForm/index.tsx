import { useRef } from 'react'
import InputSearch from '../InputSearch'
import InputFilter from '../InputFilter'

export default function TodoForm () {
  const formRef = useRef<HTMLFormElement>(null)

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

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
  )
}
