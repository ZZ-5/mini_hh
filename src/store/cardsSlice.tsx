import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardsState, CardsStateParams, VacanciesCards } from './types';
import { apiService } from '../service/apiService';
import { AxiosRequestConfig } from 'axios';

export const getVacanciesCards = createAsyncThunk<VacanciesCards, AxiosRequestConfig | void>(
  'getVacanciesCards',
  async config => {
    const res = await apiService.get('vacancies', {
      ...config
    });

    console.log(res);

    return res;
  }
);

const initialState: CardsState = {
  vacanciesCards: undefined,
  isVacanciesLoading: false,
  params: undefined
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setParams: (
      state,
      action: {
        payload: CardsStateParams;
        type: string;
      }
    ) => {
      state.params = {
        ...state.params,
        ...action.payload
      };
    }
  },
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
export const { setParams } = cardsSlice.actions;
