import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../interfaces/data';
import { IMoviesState } from '../../interfaces/data';

const initialState: IMoviesState = {
  movies: null,
  saveMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<ICard[] | null>) => {
      state.movies = action.payload;
    },
    setSaveMovies: (state, action: PayloadAction<ICard[] | []>) => {
      if (action.payload) {
        state.saveMovies = action.payload;
      } else {
        state.saveMovies = [];
      }
    },
    incSaveMovies: (state, action: PayloadAction<ICard>) => {
      state.saveMovies = [...state.saveMovies, action.payload];
    },
    decSaveMovies: (state, action: PayloadAction<number>) => {
      state.saveMovies = state.saveMovies.filter(
        (el) => el.id !== action.payload,
      );
    },
  },
});

export const { setMovies, setSaveMovies, incSaveMovies, decSaveMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
