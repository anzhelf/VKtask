import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slices/moviesSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		filter: filterReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
