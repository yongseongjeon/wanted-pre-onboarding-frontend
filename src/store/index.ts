import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default configureStore({
  reducer: rootReducer,
});
