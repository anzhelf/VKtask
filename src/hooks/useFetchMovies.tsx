import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IFilterSlice } from '../interfaces/data'
import { setPage, setPagesQty } from '../redux/slices/filterSlice'
import { setMovies } from '../redux/slices/moviesSlice'
import type { RootState } from '../redux/store'

const queryParams = ({ year, rating, genres }: IFilterSlice): string => {
	let y: string = ''
	let r: string = ''
	let g: string = ''

	if (year.from !== 0 && year.to !== 0) {
		const fromY: number = year.from > 0 ? year.from : 1900
		const toY: number = year.to > 0 ? year.to : 2024
		y = `&year=${fromY}-${toY}`
	}

	if (rating.from !== 0 && rating.to !== 0) {
		const fromR: number = rating.from
		const toR: number = rating.to
		r = `&rating.kp=${fromR}-${toR}`
	}

	if (
		Array.isArray(genres.selectedGenres) &&
		genres.selectedGenres.length !== 0
	) {
		const str: string = '&genres.name='
		g = genres.selectedGenres.reduce((acc, el) => acc + (str + el), '')
	}

	return y + r + g
}

export const useFetchMovies = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL
	const API_KEY = import.meta.env.VITE_API_KEY
	const page = useSelector((state: RootState) => state.filter.pages.page)
	const filter = useSelector((state: RootState) => state.filter)
	const dispatch = useDispatch()

	useEffect(() => {
		async function fetchMovies() {
			try {
				const { data } = await axios.get(
					`${BASE_URL}?page=${page}&limit=50${queryParams(filter)}`,
					{
						method: 'GET',
						headers: {
							'X-API-KEY': `${API_KEY}`,
						},
					},
				)
				dispatch(setMovies(data.docs))
				dispatch(setPage(data.page))
				dispatch(setPagesQty(data.pages))
			} catch (e) {
				console.log('Произошла ошибка, при получении фильмов:', e)
			}
		}
		fetchMovies()
	}, [filter, dispatch, page, BASE_URL, API_KEY])

	return
}
