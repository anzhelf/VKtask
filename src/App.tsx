import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Navigation from './components/Navigation/Navigation'
import { ICard, IFilterSlice, IResponseGenre } from './interfaces/data'
import CardPage from './pages/CardPage/CardPage'
import Home from './pages/Home/Home'
import Likes from './pages/Likes/Likes'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { setPage, setPagesQty, setStackGenre } from './redux/slices/filterSlice'
import { setMovies, setSaveMovies } from './redux/slices/moviesSlice'
import type { RootState } from './redux/store'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

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

function App() {
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
				localStorage.setItem('genresStack', JSON.stringify(data))
			} catch (e) {
				console.log('Произошла ошибка, при получении списка жанров:', e)
			}
		}

		const storageSaveMovies = localStorage.getItem('saveMovies')
		if (storageSaveMovies !== null) {
			const parseSaveMovies: ICard[] = JSON.parse(storageSaveMovies)
			dispatch(setSaveMovies(parseSaveMovies))
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
		<div className={styles.content}>
			<LanguageSwitcher />
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/likes' element={<Likes />} />
				<Route path='/movie/:id' element={<CardPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	)
}

export default App
