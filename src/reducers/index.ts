import { type } from 'os';
import { combineReducers } from 'redux'
import { todosReducer } from "./todosReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  filter: visibilityFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>