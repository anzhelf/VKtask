import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
// import { IFilterSlice, IResponseGenre } from '../../interfaces/data'

interface ISettingsSlice {
	theme: string
	langage: string
}

const initialState: ISettingsSlice = {
	theme: 'light',
	langage: 'ru',
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		toggleTheme(state, action: PayloadAction<string>) {
			console.log(action.payload)
			state.theme = action.payload
		},
		toggleLanguage(state, action: PayloadAction<string>) {
			state.langage = action.payload
		},
	},
})

export const { toggleTheme, toggleLanguage } = settingsSlice.actions

export default settingsSlice.reducer
