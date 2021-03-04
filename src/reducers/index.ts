import { combineReducers } from 'redux'
import { todosReducer } from "./todosReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: visibilityFilterReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>