interface Props {
  title: string
  handlerClick?: () => void
  color: 'red' | 'blue'
  type?: 'button' | 'submit' | 'reset'
}

const btnThemes = {
  red: 'bg-gradient-to-r from-c-red to-c-lightRed text-white font-semibold rounded-md px-6 py-2  border border-c-lightRed shadow transition-all duration-300 hover:shadow-xl hover:shadow-c-red/40 hover:opacity-90 dark:hover:shadow-c-blue/10 flex-1',

  blue: 'bg-gradient-to-r from-c-blue to-c-lightBlue text-white font-semibold rounded-md px-6 py-2 border border-c-lightBlue shadow transition-all duration-300 hover:shadow-xl hover:shadow-c-blue/40 hover:opacity-90 dark:hover:shadow-c-blue/10 flex-1'
}

export default function BtnDefault ({
  title,
  handlerClick,
  color,
  type = 'button'
}: Props) {
  return (
    <button
      type={type}
      onClick={() => {
        if (handlerClick !== undefined) handlerClick()
      }}
      className={`${btnThemes[color]}`}
    >
      {title}
    </button>
  )
}
