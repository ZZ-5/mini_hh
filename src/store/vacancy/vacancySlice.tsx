import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiService } from '../../service/apiService';
import { Vacancy, VacancyState } from './types';

export const getVacancyPage = createAsyncThunk<Vacancy, string>(
  'getVacancyPage',
  async vacancyId => {
    const res = await apiService.get(`vacancies/${vacancyId}`);

    return res;
  }
);

const initialState: VacancyState = {
  vacancy: undefined,
  isVacancyLoading: false
};

const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getVacancyPage.pending, state => {
        state.isVacancyLoading = true;
      })
      .addCase(getVacancyPage.fulfilled, (state, { payload }) => {
        state.vacancy = payload;
        state.isVacancyLoading = false;
      })
      .addCase(getVacancyPage.rejected, state => {
        state.isVacancyLoading = false;
      }),
  reducers: {}
});

export const vacancySliceReducer = vacancySlice.reducer;
