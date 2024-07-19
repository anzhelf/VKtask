import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import axios from 'axios'
import * as React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
	setSelectedGenres,
	setStackGenre,
} from '../../../../redux/slices/filterSlice'
import type { RootState } from '../../../../redux/store'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

//genres.name=криминал&genres.name=комедия

interface IResponseGenre {
	name: string
	slug: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

const SelectGenres = () => {
	const stackGenres = useSelector(
		(state: RootState) => state.filter.genres.stackGenres,
	)
	const selectedGenres = useSelector(
		(state: RootState) => state.filter.genres.selectedGenres,
	)
	const dispatch = useDispatch()

	React.useEffect(() => {
		async function fetchGenres() {
			try {
				const { data } = await axios.get(
					`${BASE_URL}/possible-values-by-field?field=genres.name`,
					{
						method: 'GET',
						headers: {
							'X-API-KEY': `${API_KEY}`,
						},
					},
				)
				// localStorage.setItem('moviesList', JSON.stringify(data))
				dispatch(setStackGenre(data))
			} catch (e) {
				console.log('Произошла ошибка, при получении списка жанров:', e)
			}
		}

		const storageStackGenres = localStorage.getItem('genresStack')

		if (storageStackGenres !== null) {
			const parseGenres: IResponseGenre[] = JSON.parse(storageStackGenres)
			dispatch(setStackGenre(parseGenres))
		} else {
			fetchGenres()
		}
	}, [])

	const handleChange = (event: SelectChangeEvent<typeof selectedGenres>) => {
		const { value } = event.target
		dispatch(
			setSelectedGenres(typeof value === 'string' ? value.split(',') : value),
		)
	}

	return (
		<div>
			<FormControl size='small' sx={{ m: 1, width: 250, margin: 0 }}>
				<InputLabel id='demo-multiple-checkbox-label'>По жанру:</InputLabel>
				<Select
					labelId='demo-multiple-checkbox-label'
					id='demo-multiple-checkbox'
					multiple
					value={selectedGenres}
					onChange={handleChange}
					input={<OutlinedInput label='Tag' />}
					renderValue={selected =>
						Array.isArray(selected) && selected.join(', ')
					}
					MenuProps={MenuProps}
				>
					{!!stackGenres &&
						stackGenres.map(el => (
							<MenuItem key={el.name} value={el.name}>
								<Checkbox checked={selectedGenres.indexOf(el.name) > -1} />
								<ListItemText primary={el.name} />
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	)
}

export default SelectGenres
