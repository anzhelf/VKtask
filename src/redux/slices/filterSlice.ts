import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface IResponseGenre {
	name: string
	slug: string
}

export interface IFilterSlice {
	year: {
		from: number
		to: number
	}
	rating: {
		from: number
		to: number
	}
	genres: {
		stackGenres: IResponseGenre[] | null
		selectedGenres: string[] | string
	}

	pages: {
		pagesQty: number
		page: number
	}
}

const initialState: IFilterSlice = {
	year: {
		from: 0,
		to: 0,
	},
	rating: {
		from: 0,
		to: 0,
	},
	genres: {
		stackGenres: null,
		selectedGenres: [],
	},
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

		setSelectedGenres(state, action: PayloadAction<string[] | []>) {
			state.genres.selectedGenres = action.payload
		},
		// decSelectGenre(state, action: PayloadAction<string>) {
		// 	state.genres.selectGenres = state.genres.selectGenres.filter(
		// 		i => i !== action.payload,
		// 	)
		// },
		setStackGenre(state, action: PayloadAction<IResponseGenre[]>) {
			state.genres.stackGenres = action.payload
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
	setSelectedGenres,
	setStackGenre,
} = filterSlice.actions

export default filterSlice.reducer
