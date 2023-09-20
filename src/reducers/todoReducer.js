import { v4 as uuidv4 } from "uuid";

export const TODO_ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
  COMPLETE_TODO: "COMPLETE_TODO",
  CLEAR_TODOS: "CLEAR_TODOS",
};

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  console.log({ state, actionType, actionPayload });

  if (actionType === TODO_ACTION_TYPES.ADD_TODO) {
    const { name } = actionPayload;
    const newState = [
      ...state,
      {
        id: uuidv4(),
        name,
        isCompleted: false,
      },
    ];

    return newState;
  }

  if (actionType === TODO_ACTION_TYPES.REMOVE_TODO) {
    const { id } = actionPayload;
    return state.filter((todo) => todo.id !== id);
  }

  if (actionType === TODO_ACTION_TYPES.COMPLETE_TODO) {
    const { id } = actionPayload;
    const todoIndex = state.findIndex((item) => item.id === id);
    (todo) => todo.id === id;

    if (todoIndex >= 0) {
      const newState = [
        ...state.slice(0, todoIndex),
        { ...state[todoIndex], isCompleted: !state[todoIndex].isCompleted },
        ...state.slice(todoIndex + 1),
      ];

      return newState;
    }

    return state;
  }

  if (actionType === TODO_ACTION_TYPES.CLEAR_TODOS) {
    return [];
  }

  return state;
};
