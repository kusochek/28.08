import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/reducer';

const rootReducer = combineReducers({
  todosReducer,
});

export default configureStore({
  reducer: rootReducer,
});

