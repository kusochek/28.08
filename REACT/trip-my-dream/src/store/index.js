import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from './sources/countries';

const rootReducer = combineReducers({
  countriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
