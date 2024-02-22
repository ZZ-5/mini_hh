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

    return res;
  }
);

const initialState: CardsState = {
  vacanciesCards: undefined,
  isVacanciesLoading: false,
  params: new URLSearchParams()
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
      action.payload.forEach((value, key) => {
        if (state.params.has(key, value)) {
          state.params.delete(key, value);
          return;
        }

        if (key === 'schedule') {
          state.params.append(key, value);
          return;
        }

        state.params.set(key, value);
      });
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
