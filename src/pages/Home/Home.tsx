import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from '../../components/Filter/Filter'
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList'
import PaginationOutlined from '../../components/PaginationOutlined/PaginationOutlined'
import { IResponse } from '../../interfaces/data'
import styles from './Home.module.scss'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const Home = () => {
	const [movies, setMovies] = useState<IResponse | null>(null)

	useEffect(() => {
		async function fetchMovies() {
			try {
				const { data } = await axios.get(`${BASE_URL}`, {
					method: 'GET',
					headers: {
						'X-API-KEY': `${API_KEY}`,
					},
				})
				localStorage.setItem('moviesList', JSON.stringify(data))
				setMovies(data)
			} catch (e) {
				console.log('Произошла ошибка, при получении фильмов.', e)
			}
		}
		const storageMovies = localStorage.getItem('moviesList')

		if (storageMovies !== null) {
			const parseMovies: IResponse = JSON.parse(storageMovies)
			setMovies(parseMovies)
		} else {
			fetchMovies()
		}
	}, [])

	return (
		<div className={styles.home}>
			<Filter />
			<main>{movies !== null && <MoviesCardList movies={movies} />}</main>
			<PaginationOutlined />
		</div>
	)
}
export default Home
