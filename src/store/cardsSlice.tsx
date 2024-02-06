import { createAsyncThunk, createSlice, AsyncThunk } from '@reduxjs/toolkit';
import { CardsState, VacancyCard } from './types';
import { apiService } from '../service/apiService';

export const getVacanciesCards = createAsyncThunk('getVacanciesCards', async params => {
  const res = await apiService.get('vacancies', {
    params: params
  });

  return res.items;
});

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
