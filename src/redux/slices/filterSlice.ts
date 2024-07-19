import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface filterSlice {
	year: number
	rating: number
	genre: number
	pages: {
		pagesQty: number
		page: number
	}
}

const initialState: filterSlice = {
	year: 0,
	rating: 0,
	genre: 0,
	pages: {
		pagesQty: 0,
		page: 0,
	},
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			console.log('action:', action)
			state.pages.page = action.payload
		},
		setPagesQty(state, action: PayloadAction<number>) {
			state.pages.pagesQty = action.payload
		},

		increment: state => {
			state.pages.page += 1
		},
		decrement: state => {
			state.pages.page -= 1
		},
	},
})

export const { increment, decrement, setPage, setPagesQty } =
	filterSlice.actions

export default filterSlice.reducer
