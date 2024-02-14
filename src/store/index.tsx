import { configureStore } from '@reduxjs/toolkit';
import { vacanciesCardsReducer } from './cardsSlice';
import { favoritesReducer } from './favoritesSlice';
import { filtersDictionariesReducer } from './filtersDictionariesSlice';
import { vacancySliceReducer } from './vacancy/vacancySlice';

// const store = {
//   vacanciesCards: {
//     vacanciesCards: undefined,
//     isVacanciesLoading: false,
//     params: undefined,
//     reducers: {
//       setParams: ...
//     },
//     extraReducers: {
//       getVacanciesCards: ...
//     }
//   },
//   favorites: {
//     favoritesCards: [],
//     isFavoritesCards: false,
//     reducers: {
//       addToFavorite: ...,
//       removeToFavorite: ...,
//     },
//   },
//   filtersDictionaries: {
//     experience: [],
//     employment: [],
//     reducers: {},
//     extraReducers: {
//       getFiltersDictionaries: ...
//     }
//   },
//   vacancy: {
//     vacancy: undefined,
//     isVacancyLoading: false,
//     reducers: { ... },
//     extraReducers: { ... }
//   }
// }

const reducer = {
  vacanciesCards: vacanciesCardsReducer,
  favorites: favoritesReducer,
  filtersDictionaries: filtersDictionariesReducer,
  vacancy: vacancySliceReducer
};

export const store = configureStore({
  reducer // тоже самое что и reducer: reducer
  // middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
