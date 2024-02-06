import { Store, configureStore } from '@reduxjs/toolkit';
import { vacanciesCardsReducer } from './cardsSlice';

const reducer = {
  vacanciesCards: vacanciesCardsReducer
};

export const store: Store = configureStore({
  reducer, // тоже самое что и reducer: reducer
  middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
