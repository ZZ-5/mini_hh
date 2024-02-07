import { createSlice } from '@reduxjs/toolkit';
import { FavoritesCardsState, VacancyCard } from './types';

const initialState: FavoritesCardsState = {
  favoritesCards: [],
  isFavoritesCards: false
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (
      state,
      action: {
        payload: VacancyCard;
        type: string;
      }
    ) => {
      console.log('action.payload ', action.payload);
      state.favoritesCards.push(action.payload);

      console.log('state ', state);
    },
    removeToFavorite: (
      state,
      action: {
        payload: VacancyCard;
        type: string;
      }
    ) => {
      state.favoritesCards = state.favoritesCards.filter(i => i.id !== action.payload.id);
    }
  }
});

export const { addToFavorite, removeToFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
