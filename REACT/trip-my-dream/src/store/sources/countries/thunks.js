import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/services/countries';
import { moduleName } from './constants';

const fetchCountries = createAsyncThunk(`${moduleName}/fetchCountries`, async () => {
  const response = await api.countriesApi.fetch();

  return response;
});

export default { fetchCountries };
