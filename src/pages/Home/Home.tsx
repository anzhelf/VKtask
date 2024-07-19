import axios from 'axios'
import { useEffect } from 'react'
import Filter from '../../components/Filter/Filter'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined'
import { IFilterSlice, IResponseGenre } from '../../interfaces/data'
import styles from './Home.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import {
	setPage,
	setPagesQty,
	setStackGenre,
} from '../../redux/slices/filterSlice'
import { setMovies } from '../../redux/slices/moviesSlice'
import type { RootState } from '../../redux/store'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const queryParams = ({ year, rating, genres }: IFilterSlice): string => {
	let y = ''
	let r = ''
	let g = ''

	if (year.from !== 0 && year.to !== 0) {
		const fromY = year.from > 0 ? year.from : 1900
		const toY = year.to > 0 ? year.to : 2024
		y = `&year=${fromY}-${toY}`
	}

	if (rating.from !== 0 && rating.to !== 0) {
		const fromR = rating.from
		const toR = rating.to
		r = `&rating.kp=${fromR}-${toR}`
	}

	if (genres.selectedGenres.length !== 0) {
		const str = '&genres.name='
		g = genres.selectedGenres.reduce((acc, el) => acc + (str + el), '')
	}

	return y + r + g
}

const Home = () => {
	const movies = useSelector((state: RootState) => state.movies.value)
	const page = useSelector((state: RootState) => state.filter.pages.page)
	const filter = useSelector((state: RootState) => state.filter)
	const dispatch = useDispatch()

	console.log(movies)

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
	}, [filter])

	useEffect(() => {
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

	return (
		<div className={styles.home}>
			<Filter />
			{!!movies && <MoviesCardList />}
			{filter.pages.pagesQty > 1 && <PaginationOutlined />}
		</div>
	)
}
export default Home
