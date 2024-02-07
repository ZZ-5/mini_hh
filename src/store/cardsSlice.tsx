import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardsState, VacancyCard } from './types';
import { apiService } from '../service/apiService';
import { AxiosRequestConfig } from 'axios';

export const getVacanciesCards = createAsyncThunk<VacancyCard[], AxiosRequestConfig | void>(
  'getVacanciesCards',
  async config => {
    const res = await apiService.get('vacancies', { ...config });

    return res.items;
  }
);

const initialState: CardsState = {
  vacanciesCards: [],
  isVacanciesLoading: false
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getVacanciesCards.pending, state => {
        state.isVacanciesLoading = true;
      })
      .addCase(getVacanciesCards.fulfilled, (state, { payload }) => {
        state.vacanciesCards = payload;
        state.isVacanciesLoading = false;
      })
      .addCase(getVacanciesCards.rejected, state => {
        state.isVacanciesLoading = false;
      })
});

export const vacanciesCardsReducer = cardsSlice.reducer;
