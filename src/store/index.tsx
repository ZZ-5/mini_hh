import { configureStore } from '@reduxjs/toolkit';
import { vacanciesCardsReducer } from './cardsSlice';
import { favoritesReducer } from './favoritesSlice';
import { filtersDictionariesReducer } from './filtersDictionariesSlice';
import { vacancySliceReducer } from './vacancy/vacancySlice';

const reducer = {
  vacanciesCards: vacanciesCardsReducer,
  favorites: favoritesReducer,
  filtersDictionaries: filtersDictionariesReducer,
  vacancy: vacancySliceReducer
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
