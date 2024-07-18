import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import axios from 'axios'
import * as React from 'react'

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

const SelectChip = () => {
	const [personName, setPersonName] = React.useState<string[]>([])
	const [genresName, setGenresName] = React.useState<IResponseGenre[] | null>(
		null,
	)

	React.useEffect(() => {
		async function fetchGenres() {
			try {
				const { data } = await axios.get(
					`https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name`,
					{
						method: 'GET',
						headers: {
							'X-API-KEY': `${API_KEY}`,
						},
					},
				)
				// localStorage.setItem('moviesList', JSON.stringify(data))
				setGenresName(data)
			} catch (e) {
				console.log('Произошла ошибка, при получении списка жанров:', e)
			}
		}

		const storageGenres = localStorage.getItem('genresList')

		if (storageGenres !== null) {
			const parseGenres: IResponseGenre[] = JSON.parse(storageGenres)
			setGenresName(parseGenres)
		} else {
			fetchGenres()
		}
	}, [])

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const { value } = event.target
		setPersonName(typeof value === 'string' ? value.split(',') : value)
	}

	return (
		<div>
			<FormControl size='small' sx={{ m: 1, width: 250, margin: 0 }}>
				<InputLabel id='demo-multiple-checkbox-label'>По жанру:</InputLabel>
				<Select
					labelId='demo-multiple-checkbox-label'
					id='demo-multiple-checkbox'
					multiple
					value={personName}
					onChange={handleChange}
					input={<OutlinedInput label='Tag' />}
					renderValue={selected => selected.join(', ')}
					MenuProps={MenuProps}
				>
					{!!genresName &&
						genresName.map(el => (
							<MenuItem key={el.name} value={el.name}>
								<Checkbox checked={personName.indexOf(el.name) > -1} />
								<ListItemText primary={el.name} />
							</MenuItem>
						))}
				</Select>
			</FormControl>
		</div>
	)
}

export default SelectChip
