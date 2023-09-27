export interface Todo {
  id: string
  title: string
  isCompleted: boolean
}

export type ListOfTodos = Todo[]

export type TotoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'isCompleted'>

export enum FilterOption {
  ALL = 'all',
  COMPLETE = 'complete',
  ACTIVE = 'active'
}
