import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
	setRatingFrom,
	setRatingTo,
} from '../../../../redux/slices/filterSlice'
import type { RootState } from '../../../../redux/store'

const ratingArr = [...new Array(10)].map((_, i) => i + 1)

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

const SelectRating = () => {
	const rating = useSelector((state: RootState) => state.filter.rating)
	const dispatch = useDispatch()

	const { t } = useTranslation()

	const handleChange = (event: SelectChangeEvent<number>) => {
		const { value, name } = event.target

		if (name === 'from') {
			if (Number(value) > rating.to) {
				dispatch(setRatingTo(0))
			}
			dispatch(setRatingFrom(Number(value)))
		} else {
			dispatch(setRatingTo(Number(value)))
		}
	}

	return (
		<div>
			<FormControl
				size='small'
				sx={{ m: 1, minWidth: 120, margin: 0, marginRight: 1 }}
			>
				<InputLabel htmlFor='grouped-select'>{t('fromRating')}:</InputLabel>
				<Select
					name='from'
					MenuProps={MenuProps}
					value={rating.from === 0 ? '' : rating.from}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>{t('select')}</em>
					</MenuItem>
					{ratingArr.map(i => (
						<MenuItem key={i} value={i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ m: 1, minWidth: 120, margin: 0 }}>
				<InputLabel htmlFor='grouped-select'>{t('toRating')}:</InputLabel>
				<Select
					name='to'
					MenuProps={MenuProps}
					value={rating.to === 0 ? '' : rating.to}
					id='grouped-select'
					label='Grouping'
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>{t('select')}</em>
					</MenuItem>
					{ratingArr.map(i => (
						<MenuItem key={i} value={i} disabled={rating.from > i}>
							{i}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}

export default SelectRating
