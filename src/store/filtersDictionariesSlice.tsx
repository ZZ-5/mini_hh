import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from '../service/apiService';
import { AxiosRequestConfig } from 'axios';
import { FiltersDictionaries } from './types';

export const getFiltersDictionaries = createAsyncThunk<
  FiltersDictionaries,
  AxiosRequestConfig | void
>('getFiltersDictionaries', async config => {
  const res = await apiService.get('dictionaries', { ...config });

  return res;
});

const initialState: FiltersDictionaries = {
  experience: [],
  employment: [],
  schedule: []
};

const filtersDictionaries = createSlice({
  name: 'filtersDictionaries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getFiltersDictionaries.fulfilled, (state, { payload }) => {
      state.experience = payload.experience;
      state.employment = payload.employment;
      state.schedule = payload.schedule;
    });
  }
});

export const filtersDictionariesReducer = filtersDictionaries.reducer;
