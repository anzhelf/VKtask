import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface filterSlice {
	year: {
		from: number
		to: number
	}
	rating: {
		from: number
		to: number
	}
	genre: string[]
	pages: {
		pagesQty: number
		page: number
	}
}

const initialState: filterSlice = {
	year: {
		from: 0,
		to: 0,
	},
	rating: {
		from: 0,
		to: 0,
	},
	genre: [],
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
			state.pages.page = action.payload
		},
		setPagesQty(state, action: PayloadAction<number>) {
			state.pages.pagesQty = action.payload
		},
		setYearFrom(state, action: PayloadAction<number>) {
			state.year.from = action.payload
		},
		setYearTo(state, action: PayloadAction<number>) {
			state.year.to = action.payload
		},
		setRatingFrom(state, action: PayloadAction<number>) {
			state.rating.from = action.payload
		},
		setRatingTo(state, action: PayloadAction<number>) {
			state.rating.to = action.payload
		},

		increment: state => {
			state.pages.page += 1
		},
		decrement: state => {
			state.pages.page -= 1
		},
	},
})

export const {
	setPage,
	setPagesQty,
	setYearFrom,
	setYearTo,
	setRatingFrom,
	setRatingTo,
} = filterSlice.actions

export default filterSlice.reducer
