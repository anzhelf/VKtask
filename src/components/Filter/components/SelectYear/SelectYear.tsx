import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useDispatch, useSelector } from 'react-redux'
import { setYearFrom, setYearTo } from '../../../../redux/slices/filterSlice'
import type { RootState } from '../../../../redux/store'

const years = Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i)

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

const SelectYear = () => {
	const year = useSelector((state: RootState) => state.filter.year)
	const dispatch = useDispatch()

	const handleChange = (event: SelectChangeEvent<number>) => {
		const { value, name } = event.target

		if (name === 'from') {
			if (Number(value) > year.to) {
				dispatch(setYearTo(0))
			}
			dispatch(setYearFrom(Number(value)))
		} else {
			dispatch(setYearTo(Number(value)))
		}
	}

	return (
		<div>
			<FormControl
				size='small'
				sx={{ m: 1, minWidth: 120, margin: 0, marginRight: 1 }}
			>
				<InputLabel htmlFor='grouped-select'>с ... года:</InputLabel>
				<Select
					name='from'
					MenuProps={MenuProps}
					value={year.from === 0 ? '' : year.from}
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
			<FormControl size='small' sx={{ m: 1, minWidth: 120, margin: 0 }}>
				<InputLabel htmlFor='grouped-select'>по ... год:</InputLabel>
				<Select
					name='to'
					MenuProps={MenuProps}
					value={year.to === 0 ? '' : year.to}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>Не выбирать</em>
					</MenuItem>
					{years.map(i => (
						<MenuItem key={i} value={i} disabled={year.from > i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}
export default SelectYear
