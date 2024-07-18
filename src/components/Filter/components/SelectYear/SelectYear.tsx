import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

const years = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i)

//&year=2020-2024

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

type TCurrentYear = {
	from: number
	to: number
}

const SelectYear = () => {
	const [currentYear, setCurrentYear] = React.useState<TCurrentYear>({
		from: 0,
		to: 0,
	})

	const handleChange = (event: SelectChangeEvent<number>) => {
		const { value, name } = event.target

		if (name === 'from') {
			const toValue = Number(value) > currentYear.to ? 0 : currentYear.to

			setCurrentYear({ from: Number(value), to: toValue })
		} else {
			setCurrentYear(prev => ({ ...prev, [name]: Number(value) }))
		}
		// setCurrentRating(typeof value === 'string' ? value.split(',') : value)
	}

	console.log(currentYear)

	return (
		<div>
			<FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
				<InputLabel htmlFor='grouped-select'>с ... года:</InputLabel>
				<Select
					name='from'
					MenuProps={MenuProps}
					value={currentYear.from === 0 ? '' : currentYear.from}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>Не выбирать</em>
					</MenuItem>
					{years.map(i => (
						<MenuItem key={i} value={i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
				<InputLabel htmlFor='grouped-select'>по ... год:</InputLabel>
				<Select
					name='to'
					MenuProps={MenuProps}
					value={currentYear.to === 0 ? '' : currentYear.to}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>Не выбирать</em>
					</MenuItem>
					{years.map(i => (
						<MenuItem key={i} value={i} disabled={currentYear.from > i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

export default SelectYear
