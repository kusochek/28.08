/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { moduleName } from './constants';
import actions from './actions';

const initialState = {
  countries: [],
  loading: false,
  error: undefined,
  filter: '',
};

export const countriesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    // filter(state, { payload }) {
    //   state.filter = payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.filterAction, (state, { payload }) => {
      state.filter = payload;
    });
    builder.addCase(thunks.fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(thunks.fetchCountries.fulfilled, (state, { payload }) => {
      state.countries = payload;
      state.loading = false;
    });
  },
});

// export const { filter } = countriesReducer.actions;
export default countriesReducer.reducer;
