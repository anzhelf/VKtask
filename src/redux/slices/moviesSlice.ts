import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICard } from '../../interfaces/data'

interface MoviesState {
	value: ICard[] | null
}

const initialState: MoviesState = {
	value: null,
}

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMovies: (state, action: PayloadAction<ICard[] | null>) => {
			state.value = action.payload
		},
	},
})

export const { setMovies } = moviesSlice.actions

export default moviesSlice.reducer
