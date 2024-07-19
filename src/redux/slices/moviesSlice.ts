import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface moviesSlice {
	value: number
}

const initialState: moviesSlice = {
	value: 0,
}

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

export const { increment, decrement, incrementByAmount } = moviesSlice.actions

export default moviesSlice.reducer
