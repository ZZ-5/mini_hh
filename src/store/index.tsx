import { configureStore } from '@reduxjs/toolkit';
import { vacanciesCardsReducer } from './cardsSlice';
import { favoritesReducer } from './favoritesSlice';

const reducer = {
  vacanciesCards: vacanciesCardsReducer,
  favorites: favoritesReducer
};

export const store = configureStore({
  reducer // тоже самое что и reducer: reducer
  // middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
