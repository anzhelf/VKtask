import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

const ratingArr = [...new Array(10)].map((_, i) => i + 1)

//&rating.kp=7-10

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

type TCurrentRating = {
	from: number
	to: number
}

const SelectRating = () => {
	const [currentRating, setCurrentRating] = React.useState<TCurrentRating>({
		from: 0,
		to: 0,
	})

	const handleChange = (event: SelectChangeEvent<number>) => {
		const { value, name } = event.target

		if (name === 'from') {
			const toValue = Number(value) > currentRating.to ? 0 : currentRating.to
			setCurrentRating({ from: Number(value), to: toValue })
		} else {
			setCurrentRating({ ...currentRating, [name]: Number(value) })
		}
		// setCurrentRating(typeof value === 'string' ? value.split(',') : value)
	}

	return (
		<div>
			<FormControl
				size='small'
				sx={{ m: 1, minWidth: 120, margin: 0, marginRight: 1 }}
			>
				<InputLabel htmlFor='grouped-select'>с ... рейтинга:</InputLabel>
				<Select
					name='from'
					MenuProps={MenuProps}
					value={currentRating.from === 0 ? '' : currentRating.from}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>Не выбирать</em>
					</MenuItem>
					{ratingArr.map(i => (
						<MenuItem key={i} value={i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ m: 1, minWidth: 120, margin: 0 }}>
				<InputLabel htmlFor='grouped-select'>по ... рейтинг:</InputLabel>
				<Select
					name='to'
					MenuProps={MenuProps}
					value={currentRating.to === 0 ? '' : currentRating.to}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>Не выбирать</em>
					</MenuItem>
					{ratingArr.map(i => (
						<MenuItem key={i} value={i} disabled={currentRating.from > i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

export default SelectRating
