import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined'
import { IResponse } from '../../interfaces/data'
import styles from './Home.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { setPage, setPagesQty } from '../../redux/slices/filterSlice'
import type { RootState } from '../../redux/store'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const Home = () => {
	const page = useSelector((state: RootState) => state.filter.pages.page)
	const year = useSelector((state: RootState) => state.filter.year)
	const rating = useSelector((state: RootState) => state.filter.rating)
	const dispatch = useDispatch()

	console.log('page:', page)
	console.log('year:', year)
	console.log('rating:', rating)

	const [movies, setMovies] = useState<IResponse | null>(null)

	const [query, setQuery] = useState<number>(1)

	useEffect(() => {
		async function fetchMovies() {
			try {
				const { data } = await axios.get(`${BASE_URL}?page=${page}&limit=50`, {
					method: 'GET',
					headers: {
						'X-API-KEY': `${API_KEY}`,
					},
				})
				localStorage.setItem('moviesList', JSON.stringify(data))
				setMovies(data)
				dispatch(setPage(data.page))
				dispatch(setPagesQty(data.pages))
			} catch (e) {
				console.log('Произошла ошибка, при получении фильмов:', e)
			}
		}
		fetchMovies()
	}, [query, page])

	return (
		<div className={styles.home}>
			<Filter />
			{!!movies && <MoviesCardList movies={movies} />}
			<PaginationOutlined />
		</div>
	)
}
export default Home
