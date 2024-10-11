import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from './api/moviesApi';
import filterReducer from './slices/filterSlice';
import moviesReducer from './slices/moviesSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filter: filterReducer,
    settings: settingsReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
