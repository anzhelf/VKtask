import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ICard } from '../../interfaces/data'

interface MoviesState {
	movies: ICard[] | null
	saveMovies: number[]
}

const initialState: MoviesState = {
	movies: null,
	saveMovies: [],
}

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMovies: (state, action: PayloadAction<ICard[] | null>) => {
			state.movies = action.payload
		},
		setSaveMovies: (state, action: PayloadAction<number[]>) => {
			state.saveMovies = action.payload
		},
		incSaveMovies: (state, action: PayloadAction<number>) => {
			state.saveMovies = [...state.saveMovies, action.payload]
		},
		decSaveMovies: (state, action: PayloadAction<number>) => {
			state.saveMovies = state.saveMovies.filter(el => el !== action.payload)
		},
	},
})

export const { setMovies, setSaveMovies, incSaveMovies, decSaveMovies } =
	moviesSlice.actions

export default moviesSlice.reducer
